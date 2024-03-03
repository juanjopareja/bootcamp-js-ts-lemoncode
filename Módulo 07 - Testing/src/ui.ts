import {
    gameMessage
} from './motor';

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