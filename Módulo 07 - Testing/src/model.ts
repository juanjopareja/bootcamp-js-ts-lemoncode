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

// Estado
export type State = | "WIN" | "LOSE";

