import axios from "axios";
import { Personaje } from "./personaje-listado.model";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
    try {
        const { data } = await axios.get("http://localhost:3000/personajes");
        return data;
    } catch (error) {
        throw new Error("Error al obtener los personajes");
    }
}

export const capturarTextoInput = async (): Promise<string> => {
    const input = document.querySelector('#filtra-personaje-texto') as HTMLInputElement;
    const texto = input.value.trim();

    return texto;
}

export const filtrarPersonajes = async (nombre: string): Promise<Personaje[]> => {
    const personajes = await obtenerPersonajes();
    const personajeFiltrado = personajes.filter(personaje => personaje.nombre.toLowerCase().includes(nombre.toLowerCase()));
    
    if (!personajeFiltrado) {
        throw new Error(`No se ha encontrado el personaje con nombre ${nombre}`);
    }

    return personajeFiltrado;
}

