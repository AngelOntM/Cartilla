import { Router } from 'express';
import { countVacunas, createVacuna, deleteVacuna, getVacuna, getVacunas, updateVacuna } from '../controllers/vacuna.js'

const router = Router()

router.post('/vacuna', getVacunas)

router.get('/vacuna/count', countVacunas)

router.get('/vacuna/:id', getVacuna)

router.post('/vacuna/create', createVacuna)

router.put('/vacuna/:id', updateVacuna)

router.delete('/vacuna/:id', deleteVacuna)

export default router