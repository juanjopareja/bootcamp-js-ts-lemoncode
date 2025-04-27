import { Reserva } from "./modelo";

export class Reservas {
    reservas: Reserva[];
    precioStandard: number;
    precioSuite: number;
    precioNoche: number;
    precioDesayuno: number;
    precioIva: number;

    constructor(reservas: Reserva[], precioStandard: number, precioSuite: number, precioNoche: number, precioDesayuno: number, precioIva: number) {
        this.reservas = reservas;
        this.precioStandard = precioStandard;
        this.precioSuite = precioSuite;
        this.precioNoche = precioNoche;
        this.precioDesayuno = precioDesayuno;
        this.precioIva = precioIva;
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
        });

        console.log(`Subtotal: ${this.calcularSubtotal()}`);
        console.log(`Total: ${this.calcularTotal()}`);
    }
}
