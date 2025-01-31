import { MensajesTexto } from "./constantes";

const containerCarta = document.querySelectorAll('div[data-indice-id]');

export const leerIndiceCarta = (div: HTMLDivElement): number => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    let indice: number = -1;
    
    if (dataIndiceID) {
        indice = parseInt(dataIndiceID);
    }
    
    return indice;
}

export const cambiaFondoCartaInicial = (): void => {
    const divList = document.getElementsByClassName("cart");

    for (let i = 0; i < divList.length; i++) {
        if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
            containerCarta[i].classList.add('backCart');
        }
    }
}

export const hoverFondoCarta = (): void => {
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

export const cambiarFondoCarta = (i: number) => {
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

export const quitaFondoCarta = (i: number) => {
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

export const reiniciarAnimaciones = (): void => {
    const elementoClaseImagen = document.getElementsByClassName('cartImage');

    for (let i = 0; i < elementoClaseImagen.length; i++) {
        if (elementoClaseImagen[i] !== null && elementoClaseImagen[i] !== undefined && elementoClaseImagen[i] instanceof HTMLImageElement) {
            elementoClaseImagen[i].classList.remove('animateImage');
        }
    }
}

export const reiniciarSRCImagen = (): void => {
    const listadoElementoImagen = document.getElementsByClassName("cartImage");

    for (let i = 0; i < listadoElementoImagen.length; i++) {
        (listadoElementoImagen[i] as HTMLImageElement).src = "";
        (listadoElementoImagen[i] as HTMLImageElement).classList.remove("turnCart");
    }
}

export const reiniciarFondoImagen = (): void => {
    const listadoElementoContenedor = document.getElementsByClassName("cart");
    
    for (let i = 0; i < listadoElementoContenedor.length; i++) {
        (listadoElementoContenedor[i] as HTMLImageElement).classList.remove("turnCart");
    }

}

export const mostrarMensaje = (mensaje: MensajesTexto): void => {
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

export const mostrarIntentos = (intentos: number): void => {
    const elementoIntentos = document.getElementById("attempts");
    
    if (elementoIntentos !== null && elementoIntentos !== undefined && elementoIntentos instanceof HTMLSpanElement) {
        elementoIntentos.innerText = String(intentos);
    }
}

export const cambiarBotonInicio = (): void => {
    const elementoBoton = document.getElementById("startGameBtn");

    if (elementoBoton !== null && elementoBoton !== undefined && elementoBoton instanceof HTMLButtonElement) {
        elementoBoton.innerHTML = "Reiniciar Partida";
    }
}

