
// models/Paciente.ts
export interface Paciente {
    nombre: string;
    cedula: string;
    apellido: string;
    edad: number;
    telefono: string;
  }
  
  // models/Doctor.ts
  export interface Doctor {
    nombre: string;
    apellido: string;
    especialidad: string;
    consultorio: number;
    correo: string;
  }
  
  // models/Cita.ts
  export interface Cita {
    pacienteId: number;
    especialidad: string;
    doctorId: number;
  }
