// controllers/pacientesController.ts
import { Request, Response } from 'express';
import { Paciente } from '../models/paciente';

const pacientes: Paciente[] = [];

export const getPacientes = (req: Request, res: Response) => {
  res.json(pacientes);
};

export const createPaciente = (req: Request, res: Response) => {
  const newPaciente: Paciente = req.body;
  pacientes.push(newPaciente);
  res.json(newPaciente);
};
