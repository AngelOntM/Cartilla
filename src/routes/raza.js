import { Router } from 'express';
import { countRazas, createRaza, deleteRaza, getRaza, getRazas, updateRaza } from '../controllers/raza.js'

const router = Router()

router.post('/raza', getRazas)

router.get('/raza/count', countRazas)

router.get('/raza/:id', getRaza)

router.post('/raza/create', createRaza)

router.put('/raza/:id', updateRaza)

router.delete('/raza/:id', deleteRaza)

export default router