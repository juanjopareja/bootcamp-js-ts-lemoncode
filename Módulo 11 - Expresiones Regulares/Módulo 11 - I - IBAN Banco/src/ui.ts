import { TEXT_IBAN } from "./constantes";
import { compruebaFormato, validaFormato, extraeDatosIban } from "./motor";

const capturarIBAN = (): string => {
    const inputIBAN = document.getElementById("iban") as any;
    const ibanIntroducido = inputIBAN.value;

    return ibanIntroducido;
}

const crearElementoContenedor = (): HTMLDivElement => {
    const contenedor = document.createElement("div");

    return contenedor;
};

const crearElementoParrafo = (): HTMLParagraphElement => {
    const parrafo = document.createElement("p");

    return parrafo;
};

const crearContenedorIban = (): HTMLDivElement => {
    const contenedor = crearElementoContenedor();
    contenedor.classList.add("data-container");

    const parrafoForm = crearElementoParrafo();
    parrafoForm.classList.add("data-label");
    parrafoForm.setAttribute("id", "formatted-iban");
    contenedor.appendChild(parrafoForm);

    const parrafoVal = crearElementoParrafo();
    parrafoVal.classList.add("data-label");
    parrafoVal.setAttribute("id", "validated-iban");
    contenedor.appendChild(parrafoVal);

    const parrafoBanco = crearElementoParrafo();
    parrafoBanco.classList.add("data-label");
    parrafoBanco.setAttribute("id", "banco-iban");
    contenedor.appendChild(parrafoBanco);

    const parrafoSucursal = crearElementoParrafo();
    parrafoSucursal.classList.add("data-label");
    parrafoSucursal.setAttribute("id", "sucursal-iban");
    contenedor.appendChild(parrafoSucursal);

    const parrafoCC = crearElementoParrafo();
    parrafoCC.classList.add("data-label");
    parrafoCC.setAttribute("id", "cc-iban");
    contenedor.appendChild(parrafoCC);

    const parrafoCuenta = crearElementoParrafo();
    parrafoCuenta.classList.add("data-label");
    parrafoCuenta.setAttribute("id", "cuenta-iban");
    contenedor.appendChild(parrafoCuenta);

    return contenedor;
};

const resetearContenedor = (): HTMLDivElement => {
    const contenedor = document.getElementsByClassName("data-container")[0] as any;
    contenedor ? contenedor.remove() : null;

    return contenedor;
}

const pintarMensajeFormato = (iban: string): void => {
    const parrafoForm = document.getElementById("formatted-iban") as any;
    const mensajeFormado = devuelveMensajeFormado(compruebaFormato(iban));
    parrafoForm.innerHTML = mensajeFormado;
};

const pintarMensajeValido = (iban: string): void => {
    const parrafoVal = document.getElementById("validated-iban") as any;
    const mensajeValido = devuelveMensajeValido(validaFormato(iban));
    parrafoVal.innerHTML = mensajeValido;
};

const pintarContenedorIBAN = (): void => {
    const dataExtract = document.getElementById("data-extract") as any;
    const contenedor = crearContenedorIban();

    dataExtract.appendChild(contenedor);
};

const pintarDatosValidacion = (iban: string): void => {
    pintarMensajeFormato(iban);
    pintarMensajeValido(iban);
}

const pintarDatosExtraccion = (iban: string): void => {
    const datos = extraeDatosIban(iban);
    const banco = document.getElementById("banco-iban") as any;
    banco.innerHTML = "Banco: " + datos.nombreBanco;

    const sucursal = document.getElementById("sucursal-iban") as any;
    sucursal.innerHTML = "Código sucursal: " + datos.sucursal;

    const cControl = document.getElementById("cc-iban") as any;
    cControl.innerHTML = "Dígito de control: " + datos.cControl;

    const cuenta = document.getElementById("cuenta-iban") as any;
    cuenta.innerHTML = "Número de cuenta: " + datos.cuenta;
}

const obtenerMensaje = (mensaje: TEXT_IBAN) => {
    switch (mensaje) {
        case "BienFormado":
        return "El IBAN está bien formado";
        case "MalFormado":
        return "El IBAN no está bien formado";
        case "Valido":
        return "El IBAN es válido";
        case "NoValido":
        return "El IBAN no es válido";
    }
};

const devuelveMensajeFormado = (result: boolean): string => {
    return result ? obtenerMensaje("BienFormado") : obtenerMensaje("MalFormado");
};

const devuelveMensajeValido = (result: boolean): string => {
    return result ? obtenerMensaje("Valido") : obtenerMensaje("NoValido");
};

export const comprobarIBAN = (): void => {
    const iban = capturarIBAN();

    resetearContenedor();
    pintarContenedorIBAN();
    pintarDatosValidacion(iban);
    pintarDatosExtraccion(iban);
};
