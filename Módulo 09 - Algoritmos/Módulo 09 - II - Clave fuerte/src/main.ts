import "./style.css";
import { validarClave } from "./motor";
import { commonPasswords } from "./constantes";


const mostrarValidacion = (nombreUsuario: string, clave: string): void => {
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    const resultadoValidacion = {
        nombreUsuario: nombreUsuario,
        clave: clave,
        mensaje: resultado.error
    }

    console.log("Nombre de usuario: " + resultadoValidacion.nombreUsuario);
    console.log("Clave: " + resultadoValidacion.clave);
    console.log("Mensaje: " + resultadoValidacion.mensaje);
}

const nombreIntroducido = "juanjo";
const claveIntroducida = "juanjo";

document.addEventListener("DOMContentLoaded", () => {
    mostrarValidacion(nombreIntroducido, claveIntroducida);
});



