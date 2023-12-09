// controllers/pacientesController.ts
import { Request, Response } from 'express';
import { Doctor } from '../models/doctor';

const doctor: Doctor[] = [];

export const getDoctor = (req: Request, res: Response) => {
  res.json(doctor);
};

export const createDoctor = (req: Request, res: Response) => {
  const newDoctor: Doctor = req.body;
  doctor.push(newDoctor);
  res.json(newDoctor);
};
