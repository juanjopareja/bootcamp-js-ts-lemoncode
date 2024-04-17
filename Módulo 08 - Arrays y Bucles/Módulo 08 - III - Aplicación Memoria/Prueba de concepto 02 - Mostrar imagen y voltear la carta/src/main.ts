import "./style.css";

const rutaImagen = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";

const estableceImagen = (ejemploCarta: string) => {
    const rutaCarta = document.getElementById('cartImage');
    
    if (rutaCarta !== null && rutaCarta !== undefined && rutaCarta instanceof HTMLImageElement) {
        rutaCarta.setAttribute('src', ejemploCarta);
    }
}

const cambiaFondoCarta = ()=> {
    if (containerCarta !== null && containerCarta !== undefined && containerCarta instanceof HTMLDivElement) {
        containerCarta.classList.add('turnCart');
    }
}

const girarCarta = () => {
    cambiaFondoCarta();
    estableceImagen(rutaImagen);
}


// EVENT    
const containerCarta = document.getElementById('cart');
if (containerCarta !== null && containerCarta !== undefined && containerCarta instanceof HTMLDivElement) {
    containerCarta.addEventListener('click', girarCarta);
}
