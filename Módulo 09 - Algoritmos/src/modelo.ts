import { TIPO_IVA } from './constantes';

interface Producto {
    nombre: string;
    precio: number;
    tipoIva: TIPO_IVA;
}

export interface LineaTicket {
    producto: Producto;
    cantidad: number;
}

export interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precioSinIva: number;
    tipoIva: TIPO_IVA;
    precioConIva: number;
}

export interface ResultadoTotalTicket {
    totalSinIva: number;
    totalConIva: number;
    totalIva: number;
}
  
export interface TotalPorTipoIva {
    tipoIva: TIPO_IVA;
    cuantia : number;
}
  
export interface TicketFinal {
    lineas: ResultadoLineaTicket[];
    total: ResultadoTotalTicket;
    desgloseIva: TotalPorTipoIva[];
}