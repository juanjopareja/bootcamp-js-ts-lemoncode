import { Carta, Tablero, tablero } from "./modelo";
import { IntentosIniciales } from "./constantes";

export let intentos: number = IntentosIniciales;

export const barajarCartas = (cartas: Carta[]): Carta[] => {
	for (let i = cartas.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [{...cartas[i]}, {...cartas[j]}] = [cartas[j], cartas[i]];
    }

	return cartas;
}

export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
	if (tablero.cartas[indice].estaVuelta === false && tablero.cartas[indice].encontrada === false && tablero.estadoPartida !== "DosCartasLevantadas") {
		return true;
	}

	return false;
}



export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
	tablero.cartas[indice].estaVuelta = true;
}

export const sonPareja = (tablero: Tablero, indiceA: number, indiceB: number): boolean => {
	return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
}

export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
	tablero.cartas[indiceA].encontrada = true;
	tablero.cartas[indiceB].encontrada = true;
	tablero.estadoPartida = 'CeroCartasLevantadas';
	tablero.indiceCartaVolteadaA = undefined;
	tablero.indiceCartaVolteadaB = undefined;
}

export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
	tablero.cartas[indiceA].estaVuelta = false;
	tablero.cartas[indiceB].estaVuelta = false;
	tablero.estadoPartida = 'CeroCartasLevantadas';
	tablero.indiceCartaVolteadaA = undefined;
	tablero.indiceCartaVolteadaB = undefined;
}

export const esPartidaCompleta = (tablero: Tablero): boolean => {
	const todasEncontradas: boolean = tablero.cartas.every((carta: Carta) => carta.encontrada === true);

	return todasEncontradas;
}

export const cambiarEstadoTableroGuardarIndice = (tablero: Tablero, indice: number) => {
	switch (tablero.estadoPartida) {
		case "CeroCartasLevantadas":
			tablero.estadoPartida = "UnaCartaLevantada";
			tablero.indiceCartaVolteadaA = indice;
			break;
		case "UnaCartaLevantada":
			tablero.estadoPartida = "DosCartasLevantadas";
			tablero.indiceCartaVolteadaB = indice;
			break;
	}
}

export const partidaIniciada = (tablero: Tablero): boolean => {
	return tablero.estadoPartida === "PartidaNoIniciada" ? false : true;
}

export const dosCartasLevantadas = (tablero: Tablero): boolean => {
	return tablero.estadoPartida === "DosCartasLevantadas" ? true : false;
}

export const obtenerIDImagen = (indice: number): string => {
	const imagenID = "data-indice-imagen-";
	return (`${imagenID}${indice}`);
}

export const obtenerSRCImagen = (tablero: Tablero, indice: number): string => {
	return tablero.cartas[indice].imagen;
}

export const cambiarEstadoTablero = (estado: Tablero['estadoPartida']): void => {
	tablero.estadoPartida = estado;
}

export const sumarIntentos = (): number => {
	intentos += 1;
	return intentos;
}

export const reiniciarIntentos = (): number => {
	intentos = 0;
	return intentos;
}

export const reiniciarEncontradaYVolteada = (): void => {
	for (let i = 0; i < tablero.cartas.length; i++) {
		tablero.cartas[i].encontrada = false;
		tablero.cartas[i].estaVuelta = false;
	}
}

