import "./style.css";

type Especialidad = "Médico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Médico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Médico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Médico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
]


// Apartado 1. Extraer los pacientes asignados a la especialidad de "Pediatría".
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes => {

}


// Apartado 2. Averiguar si hay pacientes con un ritmo cardiaco superior a 100
// pulsaciones por minuto y temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;

    return activarProtocolo;
}


// Apartado 3. Reasignar los pacientes asignados a "Pediatría"
// a la especialidad de "Médico de familia".
const reasignarPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes => {

}


// Apartado 4. Saber si hay pacientes asignados a "Pediatría".
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {

}


// Apartado 5. Calcular el número total de pacientes asignados a las
// especialidades de "Médico de familia", "Pediatría" y "Cardiología".
interface NumeroPacientesPorEspecialidad {
    medicoFamilia: number;
    padiatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {

}