import { RUTA_IMAGEN, TIPO_ETIQUETA } from "./personaje-listado.constantes";
import { Personaje } from "./personaje-listado.model";
import { obtenerPersonajes, capturarTextoInput, filtrarPersonajes } from "./personaje-listado-api";

const crearElementoContenedor = (): HTMLDivElement => {
    const contenedor = document.createElement('div');
    return contenedor;
}

const crearElementoImagen = (caricatura: string, titulo: string): HTMLImageElement => {
    const imagen = document.createElement('img');
    imagen.src = RUTA_IMAGEN + caricatura;
    imagen.alt = titulo;
    return imagen;
}

const crearElementoEtiqueta = (tipo: TIPO_ETIQUETA): HTMLParagraphElement => {
    const etiqueta = document.createElement('p');
    etiqueta.textContent = tipo;
    return etiqueta;
}

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    return parrafo;
}

const crearElementoParrafoHabilidades = (texto: string[]): HTMLParagraphElement => {
    const parrafo = document.createElement('p');
    parrafo.textContent = texto.join(', ');
    return parrafo;
}

const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
    const elementoPersonaje = document.createElement('div');
    elementoPersonaje.classList.add('personaje-contenedor');

    const contenedorImagen = crearElementoContenedor();
    contenedorImagen.classList.add('contenedor-imagen');
    elementoPersonaje.appendChild(contenedorImagen);

    const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
    contenedorImagen.appendChild(imagen);

    const contenedorDatos = crearElementoContenedor();
    contenedorDatos.classList.add('contenedor-datos');
    elementoPersonaje.appendChild(contenedorDatos);

    const etiquetaNombre = crearElementoEtiqueta("Nombre: ");
    etiquetaNombre.classList.add('etiqueta');
    contenedorDatos.appendChild(etiquetaNombre);
    
    const nombre = crearElementoParrafo(personaje.nombre);
    contenedorDatos.appendChild(nombre);
    
    const etiquetaEspecialidad = crearElementoEtiqueta("Especialidad: ");
    etiquetaEspecialidad.classList.add('etiqueta');
    contenedorDatos.appendChild(etiquetaEspecialidad);

    const especialidad = crearElementoParrafo(personaje.especialidad);
    contenedorDatos.appendChild(especialidad);

    const etiquetaHabilidades = crearElementoEtiqueta("Habilidades: ");
    etiquetaHabilidades.classList.add('etiqueta');
    contenedorDatos.appendChild(etiquetaHabilidades);
    
    const habilidades = crearElementoParrafoHabilidades(personaje.habilidades);
    contenedorDatos.appendChild(habilidades);

    return elementoPersonaje;
}

const pintarPersonajes = async (): Promise<void> => {
    const personajes = await obtenerPersonajes();
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
        personajes.forEach((personaje) => {
            const contenedorPersonaje = crearContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        });
    } else {
        throw new Error('No se ha encontrado el contenedor del listado');
    }
}

const pintarPersonajeFiltrado = (personaje: Personaje): void => {
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
        const contenedorPersonaje = crearContenedorPersonaje(personaje);
        listado.appendChild(contenedorPersonaje);
    } else {
        throw new Error('No se ha encontrado el contenedor del listado');
    }
}

const reiniciarListadoPersonajes = (): void => {
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
        listado.innerHTML = '';
    } else {
        throw new Error('No se ha encontrado el contenedor del listado');
    }
}

const filtraPersonajes = async () => {
    try {
        const nombrePersonajeFiltrado: string = await capturarTextoInput();
        const personajeFiltrado: Personaje[] = await filtrarPersonajes(nombrePersonajeFiltrado);

        reiniciarListadoPersonajes();
        personajeFiltrado.forEach(personaje => pintarPersonajeFiltrado(personaje));
        
    } catch (error) {
        console.error("Error al filtrar personajes:", error);
    }
}


document.addEventListener('DOMContentLoaded', pintarPersonajes);
document.addEventListener('click', (event) => {
    const elemento = event.target;
    if (elemento && elemento instanceof HTMLInputElement && elemento.id === 'filtra-personaje-boton') {
        filtraPersonajes();
    }
});