import { Router } from 'express';
import { countSerxmass, createSerxmas, deleteSerxmas, getSerxmas, getSerxmass, updateSerxmas } from '../controllers/serxmas.js'

const router = Router()

router.post('/serxmas', getSerxmass)

router.get('/serxmas/count', countSerxmass)

router.get('/serxmas/:id', getSerxmas)

router.post('/serxmas/create', createSerxmas)

router.put('/serxmas/:id', updateSerxmas)

router.delete('/serxmas/:id', deleteSerxmas)

export default router