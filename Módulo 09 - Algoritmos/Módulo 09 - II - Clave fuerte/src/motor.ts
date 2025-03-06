import { ValidacionClave } from "./modelo";

const mensajeDeError = (error: string): string => {
    switch (error) {
        case "errorMayusculasMinusculas":
            return "La clave debe de tener mayúsculas y minúsculas";
        
        case "errorNumeros":
            return "La clave debe de tener números";
        
        case "errorCaracterEspecial":
            return "La clave debe de tener caracteres especiales";
        
        case "errorLongitud":
            return "La clave debe de tener una longitud mínima de 8 caracteres";
        
        case "errorNombreUsuario":
            return "La clave no debe contener el nombre del usuario";
        
        case "errorPalabrasComunes":
            return "La clave no debe de contener palabras comunes";
        
        default:
            return "Formato de clave válido";
    }
}

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const tieneMayusculas = /[A-Z]/.test(clave);
    const tieneMinusculas = /[a-z]/.test(clave);

    return (!tieneMayusculas || !tieneMinusculas) ? 
        { esValida: false, error: mensajeDeError("errorMayusculasMinusculas") } :
        { esValida: true, error: "" };
};

const tieneNumeros = (clave: string): ValidacionClave => {
    const tieneNumeros = /[0-9]/.test(clave);

    return !tieneNumeros ? 
        { esValida: false, error: mensajeDeError("errorNumeros") } :
        { esValida: true, error: "" };
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const tieneCaracteresEspeciales = /[!¡@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¿]+/.test(clave);

    return !tieneCaracteresEspeciales ?
        { esValida: false, error: mensajeDeError("errorCaracterEspecial") } :
        { esValida: true, error: "" };
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
    const longitudMinima = clave.length >= 8;

    return !longitudMinima ?
        { esValida: false, error: mensajeDeError("errorLongitud") } :
        { esValida: true, error: "" };
};

const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const tieneNombreUsuario = clave.includes(nombreUsuario);

    return tieneNombreUsuario ?
        { esValida: false, error: mensajeDeError("errorNombreUsuario") } :
        { esValida: true, error: "" };
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const tienePalabrasComunes = commonPasswords.includes(clave);

    return tienePalabrasComunes ?
        { esValida: false, error: mensajeDeError("errorPalabrasComunes") } :
        { esValida: true, error: "" };
};

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    const validaciones = [
        tieneNombreUsuario(nombreUsuario, clave),
        tienePalabrasComunes(clave, commonPasswords),
        tieneMayusculasYMinusculas(clave),
        tieneNumeros(clave),
        tieneCaracteresEspeciales(clave),
        tieneLongitudMinima(clave)
    ];

    const validacionIncorrecta = validaciones.find(validacion => !validacion.esValida);

    return validacionIncorrecta ? validacionIncorrecta : { esValida: true, error: mensajeDeError("") };
};
