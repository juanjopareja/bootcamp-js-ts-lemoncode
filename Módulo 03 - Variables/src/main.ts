import "./style.css";

// Music Group Interface
interface MusicGroup {
    name: string,
    year: number,
    active: boolean,
    genre: string
}

// Genre Music Variables
const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const classic: string = "🎼 Classic";

// Music Groups
const group1: MusicGroup = {
    name: "The Beattles",
    year: 1960,
    active: false,
    genre: popRock
}

const group2: MusicGroup = {
    name: "Queen",
    year: 1970,
    active: false,
    genre: rock
}

const group3: MusicGroup = {
    name: "AC DC",
    year: 1973,
    active: true,
    genre: hardRock
}

const group4: MusicGroup = {
    name: "Ludwig van Beethoven",
    year: 1770,
    active: false,
    genre: classic
}

const group5: MusicGroup = {
    name: "The Rolling Stones",
    year: 1962,
    active: true,
    genre: rock
}

// Music Group Print Style
const groupNameStyle = "background-color: green; font-size: 16px; font-weight: bold";

// Print Console
console.log("%c" + group1.name, groupNameStyle);
console.log(`${group1.year} / Activo: ${group1.active} / ${group1.genre}`);
console.log("");

console.log("%c" + group2.name, groupNameStyle);
console.log(`${group2.year} / Activo: ${group2.active} / ${group2.genre}`);
console.log("");

console.log("%c" + group3.name, groupNameStyle);
console.log(`${group3.year} / Activo: ${group3.active} / ${group3.genre}`);
console.log("");

console.log("%c" + group4.name, groupNameStyle);
console.log(`${group4.year} / Activo: ${group4.active} / ${group4.genre}`);
console.log("");

console.log("%c" + group5.name, groupNameStyle);
console.log(`${group5.year} / Activo: ${group5.active} / ${group5.genre}`);
console.log("");