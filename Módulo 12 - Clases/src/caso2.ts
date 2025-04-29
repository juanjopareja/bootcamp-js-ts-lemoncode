import { Reserva } from "./modelo";
import { DESCUENTO_TOUROPERADOR } from "./constantes";
import { Reservas } from "./caso1";

export class Touroperador extends Reservas {
    percentDescuento: number;

    constructor(reservas: Reserva[]) {
        super(reservas);
        this.percentDescuento = DESCUENTO_TOUROPERADOR;
        this.precioStandard = this.seleccionaPrecios("touroperador") * (1 - this.percentDescuento);
        this.precioSuite = this.seleccionaPrecios("touroperador") * (1 - this.percentDescuento);
        this.precioNoche = this.seleccionaPrecios("noches") * (1 - this.percentDescuento);
        this.precioDesayuno = this.seleccionaPrecios("desayuno") * (1 - this.percentDescuento);
    }
}
