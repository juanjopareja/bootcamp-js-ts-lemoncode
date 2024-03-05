// Interfaz Game
interface Game {
    currentScore: number,
    limitScore: number
}

// Objeto que guarda información de partida
export const game: Game = {
    currentScore: 0,
    limitScore: 7.5
}

// Estado de partida
export type State = | "WIN" | "LOSE";

// Función para establecer nuevo marcador
export const setCurrentScore = (newPoints: number) => {
    game.currentScore = newPoints;
}

// Función para establecer el marcador a 0
export const resetScore = () => {
    game.currentScore = 0;
}

