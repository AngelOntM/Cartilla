import { Router } from 'express';
import { countVacxmass, createVacxmas, deleteVacxmas, getVacxmas, getVacxmass, updateVacxmas } from '../controllers/vacxmas.js'

const router = Router()

router.post('/Vacxmas', getVacxmass)

router.get('/Vacxmas/count', countVacxmass)

router.get('/Vacxmas/:id', getVacxmas)

router.post('/Vacxmas/create', createVacxmas)

router.put('/Vacxmas/:id', updateVacxmas)

router.delete('/Vacxmas/:id', deleteVacxmas)

export default router