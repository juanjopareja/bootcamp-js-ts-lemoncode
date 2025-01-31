import { SRC_CARTAS } from "./constantes";

export interface Carta {
    idFoto: number;
    imagen: string;
    estaVuelta: boolean;
    encontrada: boolean;
}

interface InfoCarta {
    idFoto: number;
    imagen: string;
}

export const infoCartas: InfoCarta[] = [
    {
        idFoto: 1,
        imagen: SRC_CARTAS.srcCartaId1,
    },
    {
        idFoto: 2,
        imagen: SRC_CARTAS.srcCartaId2,
    },
    {
        idFoto: 3,
        imagen: SRC_CARTAS.srcCartaId3,
    },
    {
        idFoto: 4,
        imagen: SRC_CARTAS.srcCartaId4,
    },
    {
        idFoto: 5,
        imagen: SRC_CARTAS.srcCartaId5,
    },
    {
        idFoto: 6,
        imagen: SRC_CARTAS.srcCartaId6,
    }
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartasTransformadas: Carta[] = infoCartas.map((infoCarta) => {
        return crearCartaInicial(infoCarta.idFoto, infoCarta.imagen);
    });

    return [...cartasTransformadas, ...cartasTransformadas];
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida = 
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompleta";

export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
