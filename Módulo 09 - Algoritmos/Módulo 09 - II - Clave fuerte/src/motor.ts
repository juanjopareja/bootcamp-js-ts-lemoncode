import { ValidacionClave } from "./modelo";

const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {
    // ...
};

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    // ...
};

const tieneNumeros = (clave: string): ValidacionClave => {
    // ...
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    // ...
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
    // ...
};

const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
   // ...
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    // ...
};