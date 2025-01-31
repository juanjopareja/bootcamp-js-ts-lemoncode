import { Carta, Tablero, tablero } from "./modelo";
import { mostrarMensaje, cambiaFondoCartaInicial, mostrarIntentos, quitaFondoCarta, cambiarFondoCarta, leerIndiceCarta, reiniciarSRCImagen, reiniciarFondoImagen, cambiarBotonInicio, establecerSRCImagen, hoverFondoCarta, quitarHoverFondoCarta, animarImagen, reiniciarAnimacion, reiniciarAnimaciones } from "./ui";
import { IntentosIniciales } from "./constantes";

export let intentos: number = IntentosIniciales;

const barajarCartas = (cartas: Carta[]): Carta[] => {
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
	if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
		parejaEncontrada(tablero, indiceA, indiceB);
		return true;
	} else {
		parejaNoEncontrada(tablero, indiceA, indiceB);
		return false;
	}
}

const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
	tablero.cartas[indiceA].encontrada = true;
	tablero.cartas[indiceB].encontrada = true;
}

const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
	tablero.cartas[indiceA].estaVuelta = false;
	tablero.cartas[indiceB].estaVuelta = false;
}

export const esPartidaCompleta = (tablero: Tablero): boolean => {
	const todasEncontradas: boolean = tablero.cartas.every((carta: Carta) => carta.encontrada === true);

	return todasEncontradas;
}

export const iniciaPartida = (tablero: Tablero): void => {
	mostrarMensaje("ReiniciarMensaje");
	barajarCartas(tablero.cartas);
	cambiaFondoCartaInicial();
	hoverFondoCarta();
	reiniciarTablero();
	mostrarIntentos(intentos);
	cambiarBotonInicio();
}

export const hacerClickEnCarta = (div: HTMLDivElement, tablero: Tablero): void => {

	const indice = leerIndiceCarta(div);
	mostrarMensaje("ReiniciarMensaje");

	if (!partidaIniciada(tablero)) {
		mostrarMensaje("PulsarBotonInicio");

	} else if (sePuedeVoltearLaCarta(tablero, indice)) {

		animarImagen(indice);
		voltearLaCarta(tablero, indice);
		cambiarFondoCarta(indice);
		mostrarImagenCarta(tablero, indice);
		cambiarEstadoTableroGuardarIndice(tablero, indice);

		if (dosCartasLevantadas(tablero)) {
			comprobarParejaLevantada(tablero);
		}
		
	} else {
		mostrarMensaje("CartaVolteada");
	}
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

export const comprobarParejaLevantada = (tablero: Tablero): void => {
	const indiceA = tablero.indiceCartaVolteadaA;
	const indiceB = tablero.indiceCartaVolteadaB;

	if (indiceA !== null && indiceA !== undefined && indiceB !== null && indiceB !== undefined) {
		if (sonPareja(tablero, indiceA, indiceB)){
			comprobarVictoria();
			quitarHoverFondoCarta(indiceA);
			quitarHoverFondoCarta(indiceB);
			reiniciarAnimacion(indiceA);
			
		} else {
			setTimeout(() => {
				ponerCartaBocaAbajo(indiceA, indiceB);
				reiniciarAnimacion(indiceB);
			}, 1000);
		}
	}
	
	cambiarEstadoTablero("CeroCartasLevantadas");
	sumarIntentos();
	mostrarIntentos(intentos);
}

const comprobarVictoria = (): void => {
	if (esPartidaCompleta(tablero)) {
		tablero.estadoPartida = "PartidaCompleta";
		mostrarMensaje("PartidaCompleta");
	}
}

const mostrarImagenCarta = (tablero: Tablero, indice: number): void => {
    const elementoImagenID = obtenerIDImagen(indice);
    const srcImagen = obtenerSRCImagen(tablero, indice);

    establecerSRCImagen(srcImagen, elementoImagenID);
}

export const obtenerIDImagen = (indice: number): string => {
	const imagenID = "data-indice-imagen-";
	return (`${imagenID}${indice}`);
}

export const obtenerSRCImagen = (tablero: Tablero, indice: number): string => {
	return tablero.cartas[indice].imagen;
}

const cambiarEstadoTablero = (estado: Tablero['estadoPartida']): void => {
	tablero.estadoPartida = estado;
}

export const sumarIntentos = (): number => {
	intentos += 1;
	return intentos;
}

const reiniciarTablero = (): void => {
	reiniciarSRCImagen();
	reiniciarFondoImagen();
	reiniciarIntentos();
	reiniciarIndices();
	reiniciarEncontradaYVolteada();
	reiniciarAnimaciones();
	tablero.estadoPartida = "CeroCartasLevantadas";
}

const reiniciarIntentos = (): number => {
	intentos = 0;
	return intentos;
}

const reiniciarIndices = (): void => {
	tablero.indiceCartaVolteadaA = -1;
	tablero.indiceCartaVolteadaB = -1;
}

const reiniciarEncontradaYVolteada = (): void => {
	for (let i = 0; i < tablero.cartas.length; i++) {
		tablero.cartas[i].encontrada = false;
		tablero.cartas[i].estaVuelta = false;
	}
}

const ponerCartaBocaAbajo = (indiceA: number, indiceB: number): void => {
	const imagenIDA = obtenerIDImagen(indiceA);
	const imagenIDB = obtenerIDImagen(indiceB);
	const srcNulo = "";

	quitaFondoCarta(indiceA);
	quitaFondoCarta(indiceB);
	establecerSRCImagen(srcNulo, imagenIDA);
	establecerSRCImagen(srcNulo, imagenIDB);
	reiniciarAnimacion(indiceA);
	reiniciarAnimacion(indiceB);
}
