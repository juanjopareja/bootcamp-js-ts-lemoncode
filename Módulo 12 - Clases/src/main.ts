import "./style.css";
import { Reservas } from "./caso1";
import { Touroperador } from "./caso2";
import { ReservasParticular, ReservasTouroperador } from "./desafio";

const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

console.log("CASO 1: Reservas Particular");
const reservasParticular = new Reservas(reservas, 100, 150, 40, 15, 0.21);
reservasParticular.resumenReservas();
console.log("--------------------");

console.log("CASO 2: Reservas Touroperador");
const reservasTouroperador = new Touroperador(reservas, 100, 100, 40, 15, 0.21, 0.15);
reservasTouroperador.resumenReservas();
console.log("--------------------");

console.log("DESAFIO: Reservas Particular");
const reservasDesafioParticular = new ReservasParticular(reservas);
reservasDesafioParticular.resumenReservas();
console.log("--------------------");

console.log("DESAFIO: Reservas Touroperador");
const reservasDesafioTouroperador = new ReservasTouroperador(reservas, 0.15);
reservasDesafioTouroperador.resumenReservas();
console.log("--------------------");

