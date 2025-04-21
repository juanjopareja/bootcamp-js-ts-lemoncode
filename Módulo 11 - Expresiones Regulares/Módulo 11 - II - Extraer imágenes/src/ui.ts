import { extraerEnlacesTexto } from "./motor";

const capturaTextoHTML = (): string => {
    const inputHTML = document.getElementById("html-paste") as any;
    const textoIntroducido = inputHTML.value;

    return textoIntroducido;
};

const crearElementoContenedor = (): HTMLDivElement => {
  	const contenedor = document.createElement("div");
  	return contenedor;
};

const crearElementoParrafo = (): HTMLParagraphElement => {
  	const parrafo = document.createElement("p");
  	return parrafo;
};

const crearElementoImagen = (): HTMLImageElement => {
  	const imagen = document.createElement("img");
  	return imagen
}

const resetearContenedor = (): HTMLDivElement => {
	const contenedor = document.getElementsByClassName("data-container")[0] as any;
	contenedor ? contenedor.remove() : null;

	return contenedor;
};

const pintarContenedorEnlacesImg = (): HTMLDivElement => {
  	const dataExtract = document.getElementById("data-extract") as any;
	const contenedor = crearElementoContenedor();
	contenedor.classList.add("data-container");
	contenedor.setAttribute("id", "data-container");
	dataExtract.appendChild(contenedor);

	return dataExtract;
};

const pintarContenedorImagenes = (): HTMLDivElement => {
	const dataExtract = document.getElementById("data-extract") as any;
	const contenedor = crearElementoContenedor();
	contenedor.classList.add("image-container");
	contenedor.setAttribute("id", "image-container");
	dataExtract.appendChild(contenedor);

	return dataExtract;
}

const pintarEnlaces = (enlaces: string[]): void => {
	enlaces.forEach((enlace) => {
		const parrafoImg = crearElementoParrafo();
		parrafoImg.classList.add("image-link");
		parrafoImg.textContent = enlace;

		const dataContainer = document.getElementById("data-container") as any;
		dataContainer.appendChild(parrafoImg);
	});
};

const pintarImagenes = (enlaces: string[]): void => {
    enlaces.forEach((enlace) => {
        const imagen = crearElementoImagen();
        imagen.classList.add("image");
        imagen.setAttribute("src", enlace);

        const imageContainer = document.getElementById("image-container") as any;
        imageContainer.appendChild(imagen);
    });
}

export const extraerEnlacesImg = () => {
	resetearContenedor();
	pintarContenedorEnlacesImg();
	pintarContenedorImagenes();

	const textoHTML = capturaTextoHTML();
	extraerEnlacesTexto(textoHTML);

	const enlaces = extraerEnlacesTexto(textoHTML);
	pintarEnlaces(enlaces);

	pintarImagenes(enlaces);
};
