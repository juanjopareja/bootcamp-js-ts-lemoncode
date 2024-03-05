import {
    game,
    resetScore,
    setCurrentScore
} from './model';

import {
    getRandomCard,
    getCardPoint,
    getRandomNumber,
    addPoints
} from './motor';


// Función para iniciar partida
export const startGame = () => {
    showScore(game.currentScore);
    hideButton("new-game");
    hideButton("what-if");
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

// Función para mostrar el marcador
export const showScore = (score: number) => {
    const scoreRoute = document.getElementById("score");

    if (scoreRoute !== null && scoreRoute !== undefined && scoreRoute instanceof HTMLHeadingElement) {
        scoreRoute.textContent = String(score);
    }
}

// Función para esconder botones
export const hideButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.style.display = "none";
    }
}

// Función para mostrar botones
export const showButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.style.display = "inline";
    }
}

// Función para activar botones
export const activateButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.removeAttribute("disabled");
    }
}

// Función para desactivar botones
export const disableButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.setAttribute("disabled", "");
    }
}

// Función para reiniciar mensajes del juego
export const resetMessages = (id: string) => {
    const messageRoute = document.getElementById(id);

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = "";
    }
}

// Función para mostrar la carta elegida al azar en el DOM
export const printCard = (cardRoute: string) => {
    const finalCardRoute = document.getElementById("card");

    if(finalCardRoute !== null && finalCardRoute !== undefined && finalCardRoute instanceof HTMLImageElement) {
        finalCardRoute.src = cardRoute;
    }
}

// Función para mostrar la carta de What if...
export const printWhatIfCard = (cardRoute: string) => {
    const whatIfCardRoute = document.getElementById("what-if-card");

    if(whatIfCardRoute !== null && whatIfCardRoute !== undefined && whatIfCardRoute instanceof HTMLImageElement) {
        whatIfCardRoute.src = cardRoute;
    }
}

// Función para mostrar mensaje de puntuación
export const getMessage = (scoreValue: number) => {
    let stopMessage = gameMessage(scoreValue);
    const messageRoute = document.getElementById("game-message");

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = stopMessage;
    }
}

// Función para quitar carta de What If en nueva partida
export const disableWhatIfCard = () => {
    const whatIfCard = document.getElementById("what-if-card");
    if (whatIfCard !== null && whatIfCard !== undefined && whatIfCard instanceof HTMLImageElement) {
        whatIfCard.setAttribute("src", "");
    }
}

// Función para imprimir mensaje de What If...
export const getWhatIfMessage = (newCardPoint: number, newScore: number, resumeMessage: string) => {
    const messageRoute = document.getElementById("game-message");
    const resumeMessageRoute = document.getElementById("resume-message")

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = `En la siguiente mano hubieras sacado una carta con valor de ${newCardPoint} puntos y tu puntuación sería de ${newScore} puntos.`;
    }

    if (resumeMessageRoute !== null && resumeMessageRoute !== undefined && resumeMessageRoute instanceof HTMLHeadingElement) {
        resumeMessageRoute.textContent = resumeMessage;
    }
}