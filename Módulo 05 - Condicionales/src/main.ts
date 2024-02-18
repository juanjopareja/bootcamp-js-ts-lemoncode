import "./style.css";

//VARIABLES
// Variables de marcador actual y marcador límite
let currentScore: number = 0;
const limitScore: number = 7.5;

// FUNCIONES
// Función para iniciar partida
const startGame = () => {
    showScore(currentScore);
    hideButton("new-game");
    hideButton("what-if");
}

// Función para mostrar el marcador
const showScore = (score: number) => {
    const scoreRoute = document.getElementById("score");

    if (scoreRoute !== null && scoreRoute !== undefined && scoreRoute instanceof HTMLHeadingElement) {
        scoreRoute.textContent = String(score);
    }
}

// Función para esconder botones
const hideButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.style.display = "none";
    }
}

// Función para mostrar botones
const showButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.style.display = "inline";
    }
}

// Función para activar botones
const activateButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.removeAttribute("disabled");
    }
}

// Función para desactivar botones
const disableButton = (id: string) => {
    const buttonRoute = document.getElementById(id);

    if (buttonRoute !== null && buttonRoute !== undefined && buttonRoute instanceof HTMLInputElement) {
        buttonRoute.setAttribute("disabled", "");
    }
}

// Función para reiniciar mensajes del juego
const resetMessages = (id: string) => {
    const messageRoute = document.getElementById(id);

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = "";
    }
}

// Función para generar un número aleatorio
const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10);
}

// Función para seleccionar una carta al azar
const getRandomCard = (randomNumber: number) => {
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
const asignRoute = (randomNumber: number) => {
    let cardTypeRoute = "";
    const cardType = getUrlCard(randomNumber);
    
    cardTypeRoute = `src/img/${randomNumber}${cardType}-copas.jpg`;

    return cardTypeRoute;
}

// Función para mostrar la carta elegida al azar en el DOM
const printCard = (cardRoute: string) => {
    const finalCardRoute = document.getElementById("card");

    if(finalCardRoute !== null && finalCardRoute !== undefined && finalCardRoute instanceof HTMLImageElement) {
        finalCardRoute.src = cardRoute;
    }
}

// Función para mostrar la carta de What if...
const printWhatIfCard = (cardRoute: string) => {
    const whatIfCardRoute = document.getElementById("what-if-card");

    if(whatIfCardRoute !== null && whatIfCardRoute !== undefined && whatIfCardRoute instanceof HTMLImageElement) {
        whatIfCardRoute.src = cardRoute;
    }
}

// Función para tomar el valor de carta
const getCardPoint = (card: number) => {
    if (card > 7) {
        return 0.5;
    } else {
        return card;
    }
}

// Función para sumar puntos
const addPoints = (points: number) => {
    return currentScore + points;
}

// Función para establecer nuevo marcador
const setCurrentScore = (newPoints: number) => {
    currentScore = newPoints;
}

// Función para establecer el marcador a 0
const resetScore = () => {
    currentScore = 0;
}

// Función para chequear la puntuación y poner fin de juego por pasarnos de puntuación
const checkGame = (score: number) => {
    if (score > limitScore) {
        lostGame();
    } else if (score === limitScore) {
        winGame();
    }
}

// Función para juego ganado
const winGame = () => {
    const winScore = currentScore;
    getMessage(winScore);    

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
}

// Función para juego perdido
const lostGame = () => {
    const lostScore = currentScore;
    getMessage(lostScore);

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
}

// Función para detener el juego en una mano cualquiera
const stopGame = () => {
    const totalScore = currentScore;
    getMessage(totalScore);

    disableButton("take-card");
    disableButton("stop-game");

    showButton("new-game");
    showButton("what-if");
}

// Función para mostrar mensaje de puntuación
const getMessage = (scoreValue: number) => {
    let stopMessage = gameMessage(scoreValue);
    const messageRoute = document.getElementById("game-message");

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = stopMessage;
    }
}

// Función para seleccionar mensaje según puntuación
const gameMessage = (scoreValue:  number) => {
    let message = "";

    if (scoreValue <= 4) {
        message = "Has sido muy conservador";
    } else if (scoreValue > 4 && scoreValue < 6) {
        message = "Te ha entrado el canguelo, eh?";
    } else if (scoreValue >= 6 && scoreValue < limitScore) {
        message = "Casi, casi...";
    } else if (scoreValue === limitScore) {
        message = "¡Lo has clavado!¡Enhorabuena!";
    } else if (scoreValue > limitScore) {
        message = "Has perdido";
    }

    return message;
}

// Función para botón de Nueva Partida
const newGame = () => {
    resetScore();
    showScore(0);
    printCard("src/img/back.jpg");
    
    hideButton("new-game");
    hideButton("what-if");
    resetMessages("game-message");
    resetMessages("resume-message");

    activateButton("take-card");
    activateButton("stop-game");

    const whatIfCard = document.getElementById("what-if-card");
    if (whatIfCard !== null && whatIfCard !== undefined && whatIfCard instanceof HTMLImageElement) {
        whatIfCard.setAttribute("src", "");
    }
}

// Función para botón de What If...?
const whatIf = () => {
    const randomNumber = getRandomNumber();
    const numCard = getRandomCard(randomNumber);
    const urlCard = asignRoute(numCard);
    printWhatIfCard(urlCard);

    const cardPoint = getCardPoint(numCard);
    const newPoints = addPoints(cardPoint);
    setCurrentScore(newPoints);
    showScore(currentScore);

    const newMessage = whatIfMessage(currentScore);
    getWhatIfMessage(cardPoint, currentScore, newMessage);
}

// Función para seleccionar mensajes de What if...?
const whatIfMessage = (newScore: number) => {
    let resumeMessage = "";

    if (newScore < limitScore) {
        resumeMessage = "Seguirias sin llegar a 7 y medio...";
    } else if (newScore > limitScore) {
        resumeMessage = "Te habrías pasado de puntuación...";
    } else if (newScore === limitScore) {
        resumeMessage = "¡Hubieras ganado la partida, melón!"
    }

    return resumeMessage;
}

// Función para imprimir mensaje de What If...
const getWhatIfMessage = (newCardPoint: number, newScore: number, resumeMessage: string) => {
    const messageRoute = document.getElementById("game-message");
    const resumeMessageRoute = document.getElementById("resume-message")

    if (messageRoute !== null && messageRoute !== undefined && messageRoute instanceof HTMLHeadingElement) {
        messageRoute.textContent = `En la siguiente mano hubieras sacado una carta con valor de ${newCardPoint} puntos y tu puntuación sería de ${newScore} puntos.`;
    }

    if (resumeMessageRoute !== null && resumeMessageRoute !== undefined && resumeMessageRoute instanceof HTMLHeadingElement) {
        resumeMessageRoute.textContent = resumeMessage;
    }
}

// Función del botón Dame Carta
const takeCard = () => {
    const randomNumber = getRandomNumber();
    const numCard = getRandomCard(randomNumber);
    const urlCard = asignRoute(numCard);
    printCard(urlCard);

    const cardPoint = getCardPoint(numCard);
    const newPoints = addPoints(cardPoint);
    setCurrentScore(newPoints);
    showScore(currentScore);
    checkGame(currentScore);
}

// Iniciar partida
startGame();

// EVENTS
const takeCardBtn = document.getElementById("take-card");
if (takeCardBtn !== null && takeCardBtn !== undefined && takeCardBtn instanceof HTMLInputElement) {
    takeCardBtn.addEventListener("click", takeCard);
}

const stopGameBtn = document.getElementById("stop-game");
if (stopGameBtn !== null && stopGameBtn !== undefined && stopGameBtn instanceof HTMLInputElement) {
    stopGameBtn.addEventListener("click", stopGame);
}

const newGameBtn = document.getElementById("new-game");
if (newGameBtn !== null && newGameBtn !== undefined && newGameBtn instanceof HTMLInputElement) {
    newGameBtn.addEventListener("click", newGame);
}

const whatIfBtn = document.getElementById("what-if");
if (whatIfBtn !== null && whatIfBtn !== undefined && whatIfBtn instanceof HTMLInputElement) {
    whatIfBtn.addEventListener("click", whatIf);
}
