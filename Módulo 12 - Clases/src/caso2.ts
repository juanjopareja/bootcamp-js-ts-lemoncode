import { Reserva } from "./modelo";
import { Reservas } from "./caso1";

export class Touroperador extends Reservas {
    percentDescuento: number;

    constructor(reservas: Reserva[], precioStandard: number, precioSuite: number, precioNoche: number, precioDesayuno: number, precioIva: number, cantDescuento: number) {
        super(reservas, precioStandard, precioSuite, precioNoche, precioDesayuno, precioIva);
        this.percentDescuento = cantDescuento;
        this.precioStandard = precioStandard * (1 - this.percentDescuento);
        this.precioSuite = precioSuite * (1 - this.percentDescuento);
        this.precioNoche = precioNoche * (1 - this.percentDescuento);
        this.precioDesayuno = precioDesayuno * (1 - this.percentDescuento);
    }
}
