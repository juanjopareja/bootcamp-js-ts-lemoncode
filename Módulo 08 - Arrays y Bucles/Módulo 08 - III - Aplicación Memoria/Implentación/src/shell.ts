import "./style.css";
import { iniciaPartida, hacerClickEnCarta } from './ui';
import { tablero } from "./modelo";

const comenzarPartidaBoton = document.getElementById("startGameBtn");

if (comenzarPartidaBoton && comenzarPartidaBoton instanceof HTMLButtonElement) {
    comenzarPartidaBoton.addEventListener("click", () => iniciaPartida(tablero));
}

const containerCarta = document.querySelectorAll('div[data-indice-id]');

for (let i = 0; i < containerCarta.length; i++) {
    if (containerCarta[i] && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].addEventListener('click', () => {
            hacerClickEnCarta(containerCarta[i] as HTMLDivElement, tablero);
        })   
    }
}