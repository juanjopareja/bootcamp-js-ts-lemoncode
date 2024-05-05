import "./style.css";

interface InfoCarta {
    idFoto: number;
    imagen: string;
}

const arrayCartas: InfoCarta[] = [
    {
        idFoto: 1,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
        idFoto: 1,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
        idFoto: 2,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
        idFoto: 2,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
        idFoto: 3,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
    {
        idFoto: 3,
        imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
]

const containerCarta = document.querySelectorAll('div[data-indice-id]');

// FUNCTIONS
const cambiaFondoCarta = (i: number) => {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].classList.add('turnCart');
    }
}

const muestraImagenCarta = (array: InfoCarta[], indice: number) => {
    const rutaCarta = document.querySelector('img[data-indice-id="' + indice + '"]');

    if (rutaCarta !== null && rutaCarta !== undefined && rutaCarta instanceof HTMLImageElement) {      
        rutaCarta.setAttribute('src', array[indice].imagen);
    }
}

// EVENTS
for (let i = 0; i < containerCarta.length; i++) {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].addEventListener('click', () => {
            cambiaFondoCarta(i);
            muestraImagenCarta(arrayCartas, i);
        })   
    }
}
