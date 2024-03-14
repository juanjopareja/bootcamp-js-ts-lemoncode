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
];

// Apartado 1a. Extraer los pacientes asignados a la especialidad de "Pediatría".
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }

  return pacientesPediatria;
};

console.log("Apartado 1a. Pacientes en Pediatría:");
console.log(obtenPacientesAsignadosAPediatria(pacientes));

// Apartado 1b. Extraer los pacientes asignados a la especialidad de "Pediatría"
// con una edad menor a 10 años.
const obtenPacientesAsignadosAPediatriaMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatriaDiezAnios: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaDiezAnios.push(pacientes[i]);
    }
  }

  return pacientesPediatriaDiezAnios;
};

console.log("Apartado 1b. Pacientes en Pediatría menores de 10 años:");
console.log(obtenPacientesAsignadosAPediatriaMenorDeDiezAnios(pacientes));

// Apartado 2. Averiguar si hay pacientes con un ritmo cardiaco superior a 100
// pulsaciones por minuto y temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      return true;
    }
  }

  return false;
};
console.log("Apartado 2. Pacientes en protocolo:");
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3. Reasignar los pacientes asignados a "Pediatría"
// a la especialidad de "Médico de familia".
const reasignarPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Médico de familia";
    }
  }

  return pacientes;
};

console.log(
  "Apartado 3. Reasignar pacientes de Pediatría a Médico de familia:"
);
console.log(reasignarPacientesAMedicoFamilia(pacientes));

// Apartado 4. Saber si hay pacientes asignados a "Pediatría".
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }

  return false;
};

console.log("Apartado 4. ¿Hay pacientes en Padiatría?:");
console.log(hayPacientesDePediatria(pacientes));

// Apartado 5. Calcular el número total de pacientes asignados a las
// especialidades de "Médico de familia", "Pediatría" y "Cardiología".
interface NumeroPacientesPorEspecialidad {
  medicoFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoFamilia: 0,
    pediatria: 0,
    cardiologia: 0
}

const devuelvePacientesPorEspecialidad = (pacientes: Pacientes[], especialidad: string): number => {
    let numPacientesEspecialidad = 0;
    
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === especialidad) {
            numPacientesEspecialidad += 1;
        }
    }
    
    return numPacientesEspecialidad;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {      
    numeroPacientes.medicoFamilia = devuelvePacientesPorEspecialidad(pacientes, "Médico de familia");
    numeroPacientes.pediatria = devuelvePacientesPorEspecialidad(pacientes, "Pediatra");
    numeroPacientes.cardiologia = devuelvePacientesPorEspecialidad(pacientes, "Cardiólogo");

    return numeroPacientes;
}

console.log("Apartado 5. Número de pacientes por especialidad:");
console.log(cuentaPacientesPorEspecialidad(pacientes));