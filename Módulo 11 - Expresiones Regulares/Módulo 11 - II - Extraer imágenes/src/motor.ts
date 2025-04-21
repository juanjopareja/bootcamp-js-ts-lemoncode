import { PATTERN_IMG } from "./constantes";

export const extraerEnlacesTexto = (html: string): string[] => {
    const enlaces = [];
    let enlace;

    while ((enlace = PATTERN_IMG.exec(html)) !== null) {
        enlaces.push(enlace[1]);
    }

    return enlaces;
};
