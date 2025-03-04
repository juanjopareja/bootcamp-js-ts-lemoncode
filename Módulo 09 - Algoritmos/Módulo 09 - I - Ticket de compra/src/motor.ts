import { TIPO_IVA } from "./constantes";

import { 
    LineaTicket,
    ResultadoLineaTicket,
    ResultadoTotalTicket,
    TotalPorTipoIva,
} from "./modelo";

import { 
    procesarLineaTicket,
    cantidadTipoIva,
    calcularPrecioConIva,
} from "./helpers";


export const calcularTotalSinIva = (lineasTicket: LineaTicket[]): number => {
    return lineasTicket.reduce((total, linea) => {
        const precioSinIva = linea.producto.precio * linea.cantidad;

        return total + precioSinIva;
    }, 0);
}

export const calcularTotalConIva = (lineasTicket: LineaTicket[]): number => {
    return lineasTicket.reduce((totalConIva, linea) => {
        const precioSinIva = linea.producto.precio * linea.cantidad;
        const precioConIva = calcularPrecioConIva(precioSinIva, linea.producto.tipoIva);

        return totalConIva + precioConIva;
    }, 0);
}

export const calcularTotalIva = (lineasTicket: LineaTicket[]): number => {
    return lineasTicket.reduce((totalIva, linea) => {
        const precioSinIva = linea.producto.precio * linea.cantidad;
        const precioConIva = calcularPrecioConIva(precioSinIva, linea.producto.tipoIva);
        const iva = precioConIva - precioSinIva;

        return totalIva + iva;
    }, 0);
}

export const calcularDesgloseIva = (lineasTicket: LineaTicket[]): TotalPorTipoIva[] => {
    const desglose = lineasTicket.reduce((acc, linea) => {
        const iva = cantidadTipoIva(linea.producto.precio * linea.cantidad, linea.producto.tipoIva);
        acc[linea.producto.tipoIva] = (acc[linea.producto.tipoIva] || 0) + iva;
        
        return acc;
    }, {} as { [tipoIva in TIPO_IVA]: number });

    const lineaIva = Object.entries(desglose);

    return lineaIva.map(([tipoIva, cuantia]) => ({
        tipoIva: tipoIva as TIPO_IVA,
        cuantia,
    }));
}

export const calculaTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
    return lineasTicket.map(linea => procesarLineaTicket(linea));
}

export const calcularTotalesTicket = (lineasTicket: LineaTicket[]): ResultadoTotalTicket => {
    const totalSinIva = calcularTotalSinIva(lineasTicket);
    const totalConIva = calcularTotalConIva(lineasTicket);
    const totalIva = calcularTotalIva(lineasTicket);

    return {
        totalSinIva: totalSinIva,
        totalConIva: totalConIva,
        totalIva: totalIva,
    };
}