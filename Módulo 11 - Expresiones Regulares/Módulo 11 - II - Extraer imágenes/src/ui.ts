import { extraerEnlacesTexto } from "./motor";

const capturaTextoHTML = (): string => {
    const inputHTML = document.getElementById("html-paste") as any;

	if (inputHTML !== null && inputHTML !== undefined && inputHTML instanceof HTMLTextAreaElement) {
		const textoIntroducido = inputHTML.value;
		return textoIntroducido;
	}

	return "";
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

const crearContenedorDatos = (): HTMLDivElement => {
	const contenedorPrincipal = document.getElementsByClassName("data-extract")[0];

	if (contenedorPrincipal !== null && contenedorPrincipal !== undefined && contenedorPrincipal instanceof HTMLDivElement) {
		const contenedorDatos = crearElementoContenedor();
		contenedorDatos.classList.add("data-container");
		contenedorDatos.setAttribute("id", "data-container");
		contenedorPrincipal.appendChild(contenedorDatos);
		
		return contenedorDatos;
	}

	throw new Error("No se ha encontrado el contenedor principal.");

}
// MIRAR EL RESET
const resetearContenedorDatos = (): void => {
	const contenedorDatos = document.getElementsByClassName("data-container")[0];
	if (contenedorDatos !== null && contenedorDatos !== undefined && contenedorDatos instanceof HTMLDivElement) {
		contenedorDatos ? contenedorDatos.remove() : null;
	}
};

const pintarContenedorEnlacesImg = (): HTMLDivElement => {
  	const dataContainer = document.getElementById("data-container");

	if (dataContainer !== null && dataContainer !== undefined && dataContainer instanceof HTMLDivElement) {
		const contenedor = crearElementoContenedor();
		contenedor.classList.add("link-container");
		contenedor.setAttribute("id", "link-container");
		dataContainer.appendChild(contenedor);
		return dataContainer;
	}

	throw new Error("No se ha encontrado el contenedor de datos.");
};

const pintarContenedorImagenes = (): HTMLDivElement => {
	const dataContainer = document.getElementById("data-container");

	if (dataContainer !== null && dataContainer !== undefined && dataContainer instanceof HTMLDivElement) {
		const contenedor = crearElementoContenedor();
		contenedor.classList.add("image-container");
		contenedor.setAttribute("id", "image-container");
		dataContainer.appendChild(contenedor);
	
		return dataContainer;
	}

	throw new Error("No se ha encontrado el contenedor de datos.");
}

const pintarEnlaces = (enlaces: string[]): void => {
	enlaces.forEach((enlace) => {
		const parrafoImg = crearElementoParrafo();
		parrafoImg.classList.add("image-link");
		parrafoImg.textContent = enlace;

		const dataContainer = document.getElementById("link-container");

		if (dataContainer !== null && dataContainer !== undefined && dataContainer instanceof HTMLDivElement) {
			dataContainer.appendChild(parrafoImg);
		}
	});
};

const pintarImagenes = (enlaces: string[]): void => {
    enlaces.forEach((enlace) => {
        const imagen = crearElementoImagen();
        imagen.classList.add("image");
        imagen.setAttribute("src", enlace);

        const imageContainer = document.getElementById("image-container");
		if (imageContainer !== null && imageContainer !== undefined && imageContainer instanceof HTMLDivElement) {
			imageContainer.appendChild(imagen);
		}
    });
}

export const extraerEnlacesImg = () => {
	resetearContenedorDatos();
	crearContenedorDatos();
	pintarContenedorEnlacesImg();
	pintarContenedorImagenes();

	const textoHTML = capturaTextoHTML();
	extraerEnlacesTexto(textoHTML);

	const enlaces = extraerEnlacesTexto(textoHTML);
	pintarEnlaces(enlaces);

	pintarImagenes(enlaces);
};
