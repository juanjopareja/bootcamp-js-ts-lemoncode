import { MensajesTexto } from "./constantes";
import { Tablero, tablero } from "./modelo";
import { barajarCartas, reiniciarIntentos, reiniciarIndices, reiniciarEncontradaYVolteada, intentos, partidaIniciada, sePuedeVoltearLaCarta, voltearLaCarta, cambiarEstadoTableroGuardarIndice, dosCartasLevantadas, obtenerIDImagen,sonPareja, esPartidaCompleta, cambiarEstadoTablero, sumarIntentos, obtenerSRCImagen } from "./motor";

const containerCarta = document.querySelectorAll('div[data-indice-id]');

const leerIndiceCarta = (div: HTMLDivElement): number => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    let indice: number = -1;
    
    if (dataIndiceID) {
        indice = parseInt(dataIndiceID);
    }
    
    return indice;
}

const cambiaFondoCartaInicial = (): void => {
    const divList = document.getElementsByClassName("cart");

    for (let i = 0; i < divList.length; i++) {
        if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
            containerCarta[i].classList.add('backCart');
        }
    }
}

const hoverFondoCarta = (): void => {
    const divList = document.getElementsByClassName("cart");

    for (let i = 0; i < divList.length; i++) {
        if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
            containerCarta[i].classList.add('hoverCart');
        }
    }
}

export const quitarHoverFondoCarta = (i: number) => {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].classList.remove('hoverCart');
    }
}

const cambiarFondoCarta = (i: number) => {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].classList.add('turnCart');
    }
}

export const establecerSRCImagen = (src: string, elementoID: string): void => {
    const elementoImagenCarta = document.getElementById(elementoID);

    if (elementoImagenCarta && elementoImagenCarta instanceof HTMLImageElement) {
        elementoImagenCarta.src = src;
    }
}

const quitaFondoCarta = (i: number) => {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].classList.remove('turnCart');
    }
}

export const animarImagen = (i: number): void => {
    const elementoClaseImagen = document.getElementsByClassName('cartImage');

    if (elementoClaseImagen[i] !== null && elementoClaseImagen[i] !== undefined && elementoClaseImagen[i] instanceof HTMLImageElement) {
        elementoClaseImagen[i].classList.add('animateImage');
    }
}

export const reiniciarAnimacion = (i: number): void => {
    const elementoClaseImagen = document.getElementsByClassName('cartImage');

    if (elementoClaseImagen[i] !== null && elementoClaseImagen[i] !== undefined && elementoClaseImagen[i] instanceof HTMLImageElement) {
        elementoClaseImagen[i].classList.remove('animateImage');
    }
}

const reiniciarAnimaciones = (): void => {
    const elementoClaseImagen = document.getElementsByClassName('cartImage');

    for (let i = 0; i < elementoClaseImagen.length; i++) {
        if (elementoClaseImagen[i] !== null && elementoClaseImagen[i] !== undefined && elementoClaseImagen[i] instanceof HTMLImageElement) {
            elementoClaseImagen[i].classList.remove('animateImage');
        }
    }
}

const reiniciarSRCImagen = (): void => {
    const listadoElementoImagen = document.getElementsByClassName("cartImage");

    for (let i = 0; i < listadoElementoImagen.length; i++) {
        (listadoElementoImagen[i] as HTMLImageElement).src = "";
        (listadoElementoImagen[i] as HTMLImageElement).classList.remove("turnCart");
    }
}

const reiniciarFondoImagen = (): void => {
    const listadoElementoContenedor = document.getElementsByClassName("cart");
    
    for (let i = 0; i < listadoElementoContenedor.length; i++) {
        (listadoElementoContenedor[i] as HTMLImageElement).classList.remove("turnCart");
    }

}

const mostrarMensaje = (mensaje: MensajesTexto): void => {
    const elementoMensaje = document.getElementById("textMessage");

    if (elementoMensaje && elementoMensaje instanceof HTMLParagraphElement) {
        switch (mensaje) {
            case "ReiniciarMensaje":
                elementoMensaje.innerHTML = ""
                break;
            case "PulsarBotonInicio":
                elementoMensaje.innerHTML = "Pulsa en Iniciar Partida"
                break;
            case "CartaVolteada":
                elementoMensaje.innerHTML = "Ya has volteado esta carta"
                break;
            case "PartidaCompleta":
                elementoMensaje.innerHTML = "¡Partida Completada!"
                break;
        }
    }
}

const mostrarImagenCarta = (tablero: Tablero, indice: number): void => {
    const elementoImagenID = obtenerIDImagen(indice);
    const srcImagen = obtenerSRCImagen(tablero, indice);

    establecerSRCImagen(srcImagen, elementoImagenID);
}

const mostrarIntentos = (intentos: number): void => {
    const elementoIntentos = document.getElementById("attempts");
    
    if (elementoIntentos !== null && elementoIntentos !== undefined && elementoIntentos instanceof HTMLSpanElement) {
        elementoIntentos.innerText = String(intentos);
    }
}

const cambiarBotonInicio = (): void => {
    const elementoBoton = document.getElementById("startGameBtn");

    if (elementoBoton !== null && elementoBoton !== undefined && elementoBoton instanceof HTMLButtonElement) {
        elementoBoton.innerHTML = "Reiniciar Partida";
    }
}

const comprobarVictoria = (): void => {
    if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
        mostrarMensaje("PartidaCompleta");
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

const comprobarParejaLevantada = (tablero: Tablero): void => {
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

export const iniciaPartida = (tablero:Tablero): void => {
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

const reiniciarTablero = (): void => {
    reiniciarSRCImagen();
    reiniciarFondoImagen();
    reiniciarIntentos();
    reiniciarIndices();
    reiniciarEncontradaYVolteada();
    reiniciarAnimaciones();
    tablero.estadoPartida = "CeroCartasLevantadas";
}
