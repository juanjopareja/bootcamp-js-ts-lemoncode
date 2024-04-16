import "./style.css";

const cartas = ['🐹', '🐶', '🐱', '🐰', '🐸'];

const barajarCartas = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5);
}

const cartasBarajadas = barajarCartas(cartas);
console.log(cartasBarajadas);