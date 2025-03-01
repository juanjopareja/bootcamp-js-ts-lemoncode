import { 
    LineaTicket,
    ResultadoLineaTicket,
    TotalPorTipoIva,
} from "./modelo";

import { 
    procesarLineaTicket,
    cantidadTipoIva,
    calcularPrecioConIva,
} from "./helpers";


export const calcularTotalSinIva = (lineasTicket: LineaTicket[]): number => {
    let totalSinIva = 0;

    for (let i = 0; i < lineasTicket.length; i++) {
        const precioSinIva = lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
        totalSinIva += precioSinIva;
    }

    return totalSinIva;
}

export const calcularTotalConIva = (lineasTicket: LineaTicket[]): number => {
    let totalConIva = 0;

    for (let i = 0; i < lineasTicket.length; i++) {
        const precioSinIva = lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
        const precioConIva = calcularPrecioConIva(precioSinIva, lineasTicket[i].producto.tipoIva);
        totalConIva += precioConIva;
    }

    return totalConIva;
}

export const calcularTotalIva = (lineasTicket: LineaTicket[]): number => {
    let totalIva = 0;

    for (let i = 0; i < lineasTicket.length; i++) {
        const precioSinIva = lineasTicket[i].producto.precio * lineasTicket[i].cantidad;
        const precioConIva = calcularPrecioConIva(precioSinIva, lineasTicket[i].producto.tipoIva);
        const iva = precioConIva - precioSinIva;
        totalIva += iva;
    }

    return totalIva;
}

export const calcularDesgloseIva = (lineasTicket: LineaTicket[]): TotalPorTipoIva[] => {
    const desglose = {
        general: 0,
        reducido: 0,
        superreducidoA: 0,
        superreducidoB: 0,
        superreducidoC: 0,
        sinIva: 0,
    };

    for (let i = 0; i < lineasTicket.length; i++) {
        const linea = lineasTicket[i];
        const iva = cantidadTipoIva(linea.producto.precio * linea.cantidad, linea.producto.tipoIva);
        desglose[linea.producto.tipoIva] += iva;
    }

    return [
        { tipoIva: 'general', cuantia: desglose.general },
        { tipoIva: 'reducido', cuantia: desglose.reducido },
        { tipoIva: 'superreducidoA', cuantia: desglose.superreducidoA },
        { tipoIva: 'superreducidoB', cuantia: desglose.superreducidoB },
        { tipoIva: 'superreducidoC', cuantia: desglose.superreducidoC },
        { tipoIva: 'sinIva', cuantia: desglose.sinIva },
    ];
}

export const calculaTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
    const resultadoLineaTicket: ResultadoLineaTicket[] = [];

    for (let i = 0; i < lineasTicket.length; i++) {
        const resultadoLinea = procesarLineaTicket(lineasTicket[i]);
        resultadoLineaTicket.push(resultadoLinea);
    }

    return resultadoLineaTicket;
}