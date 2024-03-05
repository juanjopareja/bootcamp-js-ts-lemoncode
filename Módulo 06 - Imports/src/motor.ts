// Importar partida con variables de modelo
import {
    game
} from './model';


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

// Función para devolver estado de partida
export const stateGame = (score: number) => {
    if (score === game.limitScore) {
        return "WIN";
    }

    return "LOSE";
}

