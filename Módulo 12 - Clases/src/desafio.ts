import { Reserva } from "./modelo";

class ReservasDesafio {
    reservas: Reserva[];
    precioStandard: number;
    precioSuite: number;
    precioNoche: number;
    precioDesayuno: number;
    precioIva: number;

    constructor(reservas: Reserva[]) {
        this.reservas = reservas;
        this.precioStandard = 100;
        this.precioSuite = 150;
        this.precioNoche = 40;
        this.precioDesayuno = 15;
        this.precioIva = 0.21;
    }

    calcularSubtotal(): number {
        let subtotal = 0;
        for (const reserva of this.reservas) {
            let precioHabitacion = reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite;
            let precioDesayuno = reserva.desayuno ? this.precioDesayuno : 0;
            subtotal += precioHabitacion * reserva.noches + this.precioNoche * (reserva.pax - 1) * reserva.noches + precioDesayuno * reserva.noches * reserva.pax;
        }
        return subtotal;
    }

    calcularTotal(): number {
        const subtotal = this.calcularSubtotal();
        const iva = subtotal * this.precioIva;
        return subtotal + iva;
    }

    resumenReservas(): void {
        console.log("Resumen de reservas:");

        this.reservas.forEach((reserva) => {
            console.log(`Tipo de habitación: ${reserva.tipoHabitacion}, Pax: ${reserva.pax}, Noches: ${reserva.noches}, Desayuno: ${reserva.desayuno ? "Sí" : "No"}`);
        })

        console.log(`Subtotal: ${this.calcularSubtotal()}`);    
        console.log(`Total: ${this.calcularTotal()}`);
    }
}

export class ReservasParticular extends ReservasDesafio {
    constructor(reservas: Reserva[]) {
        super(reservas);
    }
}

export class ReservasTouroperador extends ReservasDesafio {
    percentDescuento: number;
    precioHabitacion = 100;

    constructor(reservas: Reserva[], cantDescuento: number) {
        super(reservas);
        this.percentDescuento = cantDescuento;
        this.precioStandard = this.precioHabitacion * (1 - this.percentDescuento);
        this.precioSuite = this.precioHabitacion * (1 - this.percentDescuento);
        this.precioNoche = this.precioNoche * (1 - this.percentDescuento);
        this.precioDesayuno = this.precioDesayuno * (1 - this.percentDescuento);
    }
}
