import "./style.css";

// Importar funciones de motor
import {
    startGame,
    takeCard,
    stopGame,
    newGame,
    whatIf
} from './motor';

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
