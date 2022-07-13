import { Router } from 'express';
import { countEspecialidades, createEspecialidad, deleteEspecialidad, getEspecialidad, getEspecialidades, updateEspecialidad } from '../controllers/especialidad.js'

const router = Router()

router.post('/especialidad', getEspecialidades)

router.get('/especialidad/count', countEspecialidades)

router.get('/especialidad/:id', getEspecialidad)

router.post('/especialidad/create', createEspecialidad)

router.put('/especialidad/:id', updateEspecialidad)

router.delete('/especialidad/:id', deleteEspecialidad)

export default router