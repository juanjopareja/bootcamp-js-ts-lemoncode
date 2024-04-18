import "./style.css";

const containerCarta = document.getElementsByClassName('cart');

const cambiaFondoCarta = (i: number) => {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].classList.add('turnCart');
    }
}

const cambiaImagenCarta = (i: number) => {
    const rutaCarta = document.getElementsByClassName('cartImage');
    const rutaImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/" + (i + 1) + ".png";
    
    if (rutaCarta[i] !== null && rutaCarta[i] !== undefined && rutaCarta[i] instanceof HTMLImageElement) {
        rutaCarta[i].setAttribute('src', rutaImagen);
    }
}


// EVENT
for (let i = 0; i < containerCarta.length; i++) {
    if (containerCarta[i] !== null && containerCarta[i] !== undefined && containerCarta[i] instanceof HTMLDivElement) {
        containerCarta[i].addEventListener('click', () => {
            cambiaFondoCarta(i);
            cambiaImagenCarta(i);
        })   
    }
}
