import { 
    LineaTicket, 
    ResultadoTotalTicket,
    TicketFinal,
} from "./modelo";

import { 
    calcularTotalSinIva,
    calcularTotalConIva,
    calcularTotalIva,
    calcularDesgloseIva,
    calculaTicket,
} from "./motor";


const productos: LineaTicket[] = [
    {
        producto: {
            nombre: 'Legumbres',
            precio: 2,
            tipoIva: 'general'
        },
        cantidad: 2,
    },
    {
        producto: {
            nombre: 'Perfume',
            precio: 20,
            tipoIva: 'general'
        },
        cantidad: 3,
    },
    {
        producto: {
            nombre: 'Leche',
            precio: 1,
            tipoIva: 'superreducidoC'
        },
        cantidad: 6,
    },
    {
        producto: {
            nombre: 'Lasaña',
            precio: 5,
            tipoIva: 'superreducidoA'
        },
        cantidad: 1,
    },
    {
        producto: {
            nombre: 'Libro',
            precio: 21.95,
            tipoIva: 'superreducidoB'
        },
        cantidad: 1,
    },
    {
        producto: {
            nombre: 'Aceite de Oliva',
            precio: 11.20,
            tipoIva: 'reducido'
        },
        cantidad: 1,
    },
    
];

const calcularTotalesTicket = (lineasTicket: LineaTicket[]): ResultadoTotalTicket => {
    const totalSinIva = calcularTotalSinIva(lineasTicket);
    const totalConIva = calcularTotalConIva(lineasTicket);
    const totalIva = calcularTotalIva(lineasTicket);

    return {
        totalSinIva: totalSinIva,
        totalConIva: totalConIva,
        totalIva: totalIva,
    };
}

const mostrarTicketFinal = (lineasTicket: LineaTicket[]): void => {
    const resultados = calculaTicket(lineasTicket);
    const totales = calcularTotalesTicket(lineasTicket);
    const desgloseIva = calcularDesgloseIva(lineasTicket);

    const ticketFinal: TicketFinal = {
        lineas: resultados,
        total: totales,
        desgloseIva: desgloseIva,
    };

    console.log('PRODUCTOS:');

    for (let i = 0; i < ticketFinal.lineas.length; i++) {
        const linea = ticketFinal.lineas[i];

        console.log(`Producto: ${linea.nombre}`);
        console.log(`Cantidad: ${linea.cantidad}`);
        console.log(`Precio sin IVA: ${linea.precioSinIva}`);
        console.log(`Tipo de IVA: ${linea.tipoIva}`);
        console.log(`Precio con IVA: ${parseFloat(linea.precioConIva.toFixed(2))}`);
        console.log('------------');
    }
    
    console.log('TOTALES:');
    console.log(`Total sin IVA: ${ticketFinal.total.totalSinIva}`);
    console.log(`Total IVA: ${parseFloat(ticketFinal.total.totalIva.toFixed(2))}`);
    console.log(`Total con IVA: ${parseFloat(ticketFinal.total.totalConIva.toFixed(2))}`);
    console.log('------------');

    console.log('DESGLOSE SEGÚN TIPO DE IVA:');

    for (let i = 0; i < ticketFinal.desgloseIva.length; i++) {
        const ivaIndividual = ticketFinal.desgloseIva[i];
        console.log(`Tipo IVA: ${ivaIndividual.tipoIva} -> Cuantía total: ${parseFloat(ivaIndividual.cuantia.toFixed(2))}`);
    }
}

mostrarTicketFinal(productos);
