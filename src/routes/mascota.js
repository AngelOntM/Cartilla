import { Router } from 'express';
import { countMascotas, createMascota, deleteMascota, getMascota, getMascotas, updateMascota } from '../controllers/mascota.js'

const router = Router()

router.post('/mascota', getMascotas)

router.get('/mascota/count', countMascotas)

router.get('/mascota/:id', getMascota)

router.post('/mascota/create', createMascota)

router.put('/mascota/:id', updateMascota)

router.delete('/mascota/:id', deleteMascota)

export default router