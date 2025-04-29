import { Reserva } from "./modelo";
import { PRECIO_SERVICIOS, IVA } from "./constantes";

export class Reservas {
  reservas: Reserva[];
  precioStandard: number;
  precioSuite: number;
  precioNoche: number;
  precioDesayuno: number;
  precioIva: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.precioStandard = this.seleccionaPrecios("standard");
    this.precioSuite = this.seleccionaPrecios("suite");
    this.precioNoche = this.seleccionaPrecios("noches");
    this.precioDesayuno = this.seleccionaPrecios("desayuno");
    this.precioIva = this.seleccionaPrecios("iva");
  }

  seleccionaPrecios(tipoPrecio: string): number {
    switch (tipoPrecio) {
      case "standard":
        return PRECIO_SERVICIOS.standard;
      case "suite":
        return PRECIO_SERVICIOS.suite;
      case "touroperador":
        return PRECIO_SERVICIOS.touroperador;
      case "noches":
        return PRECIO_SERVICIOS.noches;
      case "desayuno":
        return PRECIO_SERVICIOS.desayuno;
      case "iva":
        return IVA;
      default:
        return 0;
    }
  }

  calcularSubtotal(): number {
    const subtotal = this.reservas.reduce((acumulador, reserva) => {
      const precioHabitacion =
        reserva.tipoHabitacion === "standard"
          ? this.precioStandard
          : this.precioSuite;
      const precioDesayuno = reserva.desayuno ? this.precioDesayuno : 0;

      return (
        acumulador +
        precioHabitacion * reserva.noches +
        this.precioNoche * (reserva.pax - 1) * reserva.noches +
        precioDesayuno * reserva.noches * reserva.pax
      );
    }, 0);

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
      console.log(
        `Tipo de habitación: ${reserva.tipoHabitacion}, Pax: ${
          reserva.pax
        }, Noches: ${reserva.noches}, Desayuno: ${
          reserva.desayuno ? "Sí" : "No"
        }`
      );
    });

    console.log(`Subtotal: ${this.calcularSubtotal()}`);
    console.log(`Total: ${this.calcularTotal()}`);
  }
}
