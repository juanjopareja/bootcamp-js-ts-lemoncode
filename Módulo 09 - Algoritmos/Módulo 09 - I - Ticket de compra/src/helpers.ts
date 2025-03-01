import { LineaTicket, ResultadoLineaTicket } from "./modelo";
import { TIPO_IVA, CANTIDAD_IVA } from "./constantes";

export const cantidadTipoIva = (precio: number, tipoIva: TIPO_IVA): number => {
    let ivaAplicado: number;

    switch (tipoIva) {
        case 'general':
            ivaAplicado = CANTIDAD_IVA.general;
            break;
        case 'reducido':
            ivaAplicado = CANTIDAD_IVA.reducido;
            break;
        case 'superreducidoA':
            ivaAplicado = CANTIDAD_IVA.superreducidoA;
            break;
        case 'superreducidoB':
            ivaAplicado = CANTIDAD_IVA.superreducidoB;
            break;
        case 'superreducidoC':
            ivaAplicado = CANTIDAD_IVA.superreducidoC;
            break;
        case 'sinIva':
            ivaAplicado = CANTIDAD_IVA.sinIva;
            break;
        default:
            ivaAplicado = CANTIDAD_IVA.sinIva;
            break;
    }

    return precio * ivaAplicado;
}

export const calcularPrecioConIva = (precioSinIva: number, tipoIva: TIPO_IVA): number => {
    const iva = cantidadTipoIva(precioSinIva, tipoIva);
    return precioSinIva + iva;
}

export const extraerDatosLineaTicket = (lineaTicket: LineaTicket) => {
    const nombreProducto = lineaTicket.producto.nombre;
    const cantidad = lineaTicket.cantidad;
    const precioSinIva = lineaTicket.producto.precio * lineaTicket.cantidad;
    const tipoIva = lineaTicket.producto.tipoIva;

    return { nombreProducto, cantidad, precioSinIva, tipoIva };
}

export const procesarLineaTicket = (lineaTicket: LineaTicket): ResultadoLineaTicket => {
    const { nombreProducto, cantidad, precioSinIva, tipoIva } = extraerDatosLineaTicket(lineaTicket);
    const precioConIva = calcularPrecioConIva(precioSinIva, tipoIva);

    return {
        nombre: nombreProducto,
        cantidad: cantidad,
        precioSinIva: precioSinIva,
        tipoIva: tipoIva,
        precioConIva: precioConIva,
    };
}
