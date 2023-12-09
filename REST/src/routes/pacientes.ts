// routes/pacientes.ts
import express from 'express';
import * as pacientesController from '../controllers/pacientesController';

const router = express.Router();

router.get('/', pacientesController.getPacientes);
router.post('/', pacientesController.createPaciente);

export default router;
