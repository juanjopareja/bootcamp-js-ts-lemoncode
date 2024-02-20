// Importar partida con variables de modelo
import {
    game
} from './model';

// Importar funciones de ui
import {
    showScore,
    hideButton,
    getMessage,
    disableButton,
    showButton,
    printCard,
    resetMessages,
    activateButton,
    disableWhatIfCard,
    getWhatIfMessage,
    printWhatIfCard
} from './ui';

// Función para iniciar partida
export const startGame = () => {
    showScore(game.currentScore);
    hideButton("new-game");
    hideButton("what-if");
}

// Función para generar un número aleatorio
export const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10);
}

// Función para seleccionar una carta al azar
export const getRandomCard = (randomNumber: number) => {
    if (randomNumber > 7) {
        return randomNumber + 2;
    } else {
        return randomNumber;
    }
}

// Función para seleccionar ruta de carta
const getUrlCard = (randomNumber: number) => {
    let cardType= "";

    switch (randomNumber) {
        case 1:
            cardType = "_as";
            break;

        case 2:
            cardType = "_dos";
            break;

        case 3:
            cardType = "_tres";
            break;

        case 4:
            cardType = "_cuatro";
            break;

        case 5:
            cardType = "_cinco";
            break;

        case 6:
            cardType = "_seis";
            break;

        case 7:
            cardType = "_siete";
            break;

        case 10:
            cardType = "_sota";
            break;

        case 11:
            cardType = "_caballo";
            break;
                
        case 12:
            cardType = "_rey";
            break;
                    
        default:
            cardType = "back";
            break;
    }

    return cardType;
}

// Función para asignar ruta a las cartas
export const asignRoute = (randomNumber: number) => {
    let cardTypeRoute = "";
    const cardType = getUrlCard(randomNumber);
    
    cardTypeRoute = `src/img/${randomNumber}${cardType}-copas.jpg`;

    return cardTypeRoute;
}

// Función para tomar el valor de carta
export const getCardPoint = (card: number) => {
    if (card > 7) {
        return 0.5;
    } else {
        return card;
    }
}

// Función para sumar puntos
export const addPoints = (points: number) => {
    return game.currentScore + points;
}

// Función para establecer nuevo marcador
export const setCurrentScore = (newPoints: number) => {
    game.currentScore = newPoints;
}

// Función para establecer el marcador a 0
export const resetScore = () => {
    game.currentScore = 0;
}

// Función para chequear la puntuación y poner fin de juego por pasarnos de puntuación
export const checkGame = (score: number) => {
    if (score > game.limitScore) {
        lostGame();
    } else if (score === game.limitScore) {
        winGame();
    }
}

// Función para juego ganado
const winGame = () => {
    const winScore = game.currentScore;
    getMessage(winScore);

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
}

// Función para juego perdido
const lostGame = () => {
    const lostScore = game.currentScore;
    getMessage(lostScore);

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
}

// Función para detener el juego en una mano cualquiera
export const stopGame = () => {
    const totalScore = game.currentScore;
    getMessage(totalScore);

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
    showButton("what-if");
}

// Función para seleccionar mensaje según puntuación
export const gameMessage = (scoreValue:  number) => {
    let message = "";

    if (scoreValue <= 4) {
        message = "Has sido muy conservador";
    } else if (scoreValue > 4 && scoreValue < 6) {
        message = "Te ha entrado el canguelo, eh?";
    } else if (scoreValue >= 6 && scoreValue < game.limitScore) {
        message = "Casi, casi...";
    } else if (scoreValue === game.limitScore) {
        message = "¡Lo has clavado!¡Enhorabuena!";
    } else if (scoreValue > game.limitScore) {
        message = "Has perdido";
    }

    return message;
}

// Función para botón de Nueva Partida
export const newGame = () => {
    resetScore();
    showScore(0);
    printCard("src/img/back.jpg");
    
    hideButton("new-game");
    hideButton("what-if");
    resetMessages("game-message");
    resetMessages("resume-message");

    activateButton("take-card");
    activateButton("stop-game");

    disableWhatIfCard();
}

// Función para botón de What If...?
export const whatIf = () => {
    const randomNumber = getRandomNumber();
    const numCard = getRandomCard(randomNumber);
    const urlCard = asignRoute(numCard);
    printWhatIfCard(urlCard);

    const cardPoint = getCardPoint(numCard);
    const newPoints = addPoints(cardPoint);
    setCurrentScore(newPoints);
    showScore(game.currentScore);

    const newMessage = whatIfMessage(game.currentScore);
    getWhatIfMessage(cardPoint, game.currentScore, newMessage);
}

// Función para seleccionar mensajes de What if...?
const whatIfMessage = (newScore: number) => {
    let resumeMessage = "";

    if (newScore < game.limitScore) {
        resumeMessage = "Seguirias sin llegar a 7 y medio...";
    } else if (newScore > game.limitScore) {
        resumeMessage = "Te habrías pasado de puntuación...";
    } else if (newScore === game.limitScore) {
        resumeMessage = "¡Hubieras ganado la partida, melón!"
    }

    return resumeMessage;
}

// Función del botón Dame Carta
export const takeCard = () => {
    const randomNumber = getRandomNumber();
    const numCard = getRandomCard(randomNumber);
    const urlCard = asignRoute(numCard);
    printCard(urlCard);

    const cardPoint = getCardPoint(numCard);
    const newPoints = addPoints(cardPoint);
    setCurrentScore(newPoints);
    showScore(game.currentScore);
    checkGame(game.currentScore);
}