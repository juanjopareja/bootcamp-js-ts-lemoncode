import "./style.css";

// Variable de marcador actual
let currentScore: number = 0;

// Rutas de Id's
const newScore = document.getElementById("score");
const messageRoute = document.getElementById("game-message");
const resumeMessageRoute = document.getElementById("resume-message");
const newGameBtn = document.getElementById("new-game");
const whatIfBtn = document.getElementById("what-if");
const takeCardBtn = document.getElementById("take-card");
const stopGameBtn = document.getElementById("stop-game");
const whatIfCard = document.getElementById("what-if-card");

// Mostrar puntuación inicial en el DOM
showScore(currentScore);

// Desactivar los botones de Nueva Partida y What if...? al inicio del juego
if (newGameBtn !== null) {
    newGameBtn.style.display = "none";
}

if (whatIfBtn !== null) {
    whatIfBtn.style.display = "none";
}


// FUNCIONES
// Función para mostrar el marcador
function showScore(score: number) {
    if (newScore !== null) {
        newScore.innerHTML = String(score);
    }
}

// Función para seleccionar una carta al azar
function randomCard() {
    let valueCard = Math.ceil(Math.random() * 12);

    if (valueCard > 7 && valueCard < 10) {
        valueCard = valueCard + 2;
    }

    return valueCard;
}

// Función para mostrar la carta elegida al azar en el DOM
function showCard(numCard: number, id: string) {
    let cardType = "";
    let newCardRoute = "";
    
    switch (numCard) {
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

    if (numCard >= 1) {
        newCardRoute = `src/img/${numCard}${cardType}-copas.jpg`;
        document.getElementById(id)?.setAttribute("src" , newCardRoute); 

    } else {
        newCardRoute = `src/img/${cardType}.jpg`;
        document.getElementById(id)?.setAttribute("src" , newCardRoute);
    }
}

// Función para sumar puntuación al marcador según valor de carta
function addScore(valueCard: number): number {
    if (valueCard < 8) {
        currentScore += valueCard;

    } else {
        currentScore += 0.5;
    }
    
    return currentScore;
}

// Función para fin de juego por pasarnos de puntuación
function gameOver(score: number) {
    if (score > 7.5 && messageRoute !== null && newGameBtn !== null && whatIfBtn !== null) {
        messageRoute.innerHTML = "Has perdido";
        takeCardBtn?.setAttribute("disabled", "");
        stopGameBtn?.setAttribute("disabled", "");
        newGameBtn.style.display = "inline";
    }
}

// Función para detener el juego en una mano cualquiera
function stopGame() {
    let stopMessage = gameMessage(currentScore);
    takeCardBtn?.setAttribute("disabled", "");
    stopGameBtn?.setAttribute("disabled", "");

    if (messageRoute !== null && newGameBtn!== null) {
        messageRoute.innerHTML = stopMessage;
        newGameBtn.style.display = "inline";
    }

    if (currentScore < 7.5 && whatIfBtn !== null) {
        whatIfBtn.style.display = "inline";
    }
}

// Función para seleccionar mensaje según puntuación
function gameMessage(scoreValue:  number) {
    let message = "";

    if (scoreValue <= 4) {
        message = "Has sido muy conservador";
    } else if (scoreValue > 4 && scoreValue < 6) {
        message = "Te ha entrado el canguelo, eh?";
    } else if (scoreValue >= 6 && scoreValue < 7.5) {
        message = "Casi, casi...";
    } else if (scoreValue === 7.5) {
        message = "¡Lo has clavado!¡Enhorabuena!";
    }

    return message;
}

// Función para botón de Nueva Partida
function newGame() {
    currentScore = 0;
    showScore(0);
    showCard(0, "card");
    takeCardBtn?.removeAttribute("disabled");
    stopGameBtn?.removeAttribute("disabled");
    whatIfCard?.setAttribute("src", "");

    if (newGameBtn !== null) {
        newGameBtn.style.display = "none";
    }

    if (whatIfBtn !== null) {
        whatIfBtn.style.display = "none";
    }

    if (messageRoute !== null && resumeMessageRoute !== null) {
        messageRoute.innerHTML = "";
        resumeMessageRoute.innerHTML = "";
    }
}

// Función para botón de What If...?
function whatIf() {
    let newCard = randomCard();

    showCard(newCard, "what-if-card");
    addScore(newCard);
    showScore(currentScore);
    whatIfMessage(newCard, currentScore);
}

// Función para seleccionar mensajes de What if...?
function whatIfMessage(newCardValue: number, newScore: number) {
    let resumeMessage = "";

    if (newCardValue <= 7) {
        newCardValue = newCardValue;
    } else {
        newCardValue = 0.5;
    }

    if (messageRoute !== null) {
        messageRoute.innerHTML = `En la siguiente mano hubieras sacado una carta con valor de ${newCardValue} puntos y tu puntuación sería de ${newScore} puntos.`;
    }

    if (newScore < 7.5) {
        resumeMessage = "Seguirias sin llegar a 7 y medio...";
    } else if (newScore > 7.5) {
        resumeMessage = "Te habrías pasado de puntuación...";
    } else if (newScore === 7.5) {
        resumeMessage = "¡Hubieras ganado la partida, melón!"
    }

    if (resumeMessageRoute !== null) {
        resumeMessageRoute.innerHTML = resumeMessage;
    }
}

// Función del botón Dame Carta
function takeCard() {
    let numCard = randomCard();

    showCard(numCard, "card");
    addScore(numCard);
    showScore(currentScore);
    gameOver(currentScore);
}
                

// EVENTS
takeCardBtn?.addEventListener("click", takeCard);
stopGameBtn?.addEventListener("click", stopGame);
newGameBtn?.addEventListener("click", newGame);
whatIfBtn?.addEventListener("click", whatIf);
