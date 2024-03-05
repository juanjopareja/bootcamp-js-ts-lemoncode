import { vi } from "vitest";
import { addPoints, getCardPoint, getRandomCard, stateGame } from "./motor";
import { gameMessage } from "./ui";
import { game } from "./model";

// Pruebas unitarias función sumar puntos
describe("addPoints", () => {
    it("Debería devolver la puntuación actual más el valor sumado", () => {
        //Arrange
        const addValue: number = 3;
        vi.spyOn(game, "currentScore", "get").mockReturnValue(5);

        //Act
        const result = addPoints(addValue);

        //Assert
        expect(result).toBe(8);
    });
});

// Pruebas unitarias función obtener mensaje según puntuación
describe("gameMessage", () => {
    it("Debería devolver 'Has sido muy conservador' si el resultado es menor o igual a 4", () => {
        //Arrange
        const gameScore: number = 4;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);
        
        //Act
        const result = gameMessage(gameScore);

        //Assert
        expect(result).toBe("Has sido muy conservador");
    });

    it("Debería devolver 'Te ha entrado el canguelo, eh?' si el resultado es superior a 4 e inferior a 6", () => {
        //Arrange
        const gameScore: number = 5;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = gameMessage(gameScore);

        //Assert
        expect(result).toBe("Te ha entrado el canguelo, eh?");
    });

    it("Debería devolver 'Casi, casi...' si el resultado es superior a 6 e inferior al valor límite", () => {
        //Arrange
        const gameScore: number = 6.5;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = gameMessage(gameScore);

        //Assert
        expect(result).toBe("Casi, casi...");
    });

    it("Debería devolver '¡Lo has clavado!¡Enhorabuena!' si el resultado es igual al valor límite", () => {
        //Arrange
        const gameScore: number = 7.5;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = gameMessage(gameScore);

        //Assert
        expect(result).toBe("¡Lo has clavado!¡Enhorabuena!");
    });

    it("Debería devolver 'Has perdido' si el resultado es superior al valor límite", () => {
        //Arrange
        const gameScore: number = 9.5;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = gameMessage(gameScore);

        //Assert
        expect(result).toBe("Has perdido");
    });
});

// Pruebas unitarias obtener estado partida
describe("stateGame", () => {
    it("Debería devolver LOSE si la partida ha tenido una puntuación diferente a 7.5", () => {
        //Arrange
        const gameScore: number = 8;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = stateGame(gameScore);

        //Assert
        expect(result).toBe("LOSE");
    });

    it("Debería devolver WIN si la partida ha tenido una puntuación igual a 7.5", () => {
        //Arrange
        const gameScore: number = 7.5;
        vi.spyOn(game, "limitScore", "get").mockReturnValue(7.5);

        //Act
        const result = stateGame(gameScore);

        //Assert
        expect(result).toBe("WIN");
    });
})

// Pruebas unitarias función obtener número de carta
describe("getRandomCard", () => {
    it("Debería devolver la puntuación del número aleatorio generado: entre 1 y 7 devuelve ese mismo valor", () => {
        //Arrange
        const randomValue: number = 7;
        
        //Act
        const result = getRandomCard(randomValue);
        
        //Assert
        expect(result).toBe(7);
    });
    
    it("Debería devolver la puntuación del número aleatorio generado: superior a 7 suma 2 a dicho valor", () => {
        //Arrange
        const randomValue: number = 8;
        
        //Act
        const result = getRandomCard(randomValue);
        
        //Assert
        expect(result).toBe(10);
    });
});

// Pruebas unitarias función obtener valor de carta
describe("getCardPoint", () => {
    it("Debería devolver el valor de la carta. Si el número de carta es entre 1 y 7, devuelve ese mismo valor", () => {
        //Arrange
        const valueCard: number = 4;

        //Act
        const result = getCardPoint(valueCard);

        //Assert
        expect(result).toBe(valueCard);
    });

    it("Debería devolver el valor de la carta. Si el número de carta es superior a 7, devuelve el valor 0.5", () => {
        //Arrange
        const valueCard: number = 8;

        //Act
        const result = getCardPoint(valueCard);

        //Assert
        expect(result).toBe(0.5);
    });
});