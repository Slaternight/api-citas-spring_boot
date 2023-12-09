// routes/pacientes.ts
import express from 'express';
import * as doctorController from '../controllers/doctorsController';

const router = express.Router();

router.get('/', doctorController.getDoctor);
router.post('/', doctorController.createDoctor);

export default router;
