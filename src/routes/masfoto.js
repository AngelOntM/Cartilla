import { Router } from 'express';
import { countMasfotos, createMasfoto, deleteMasfoto, getMasfoto, getMasfotos, updateMasfoto } from '../controllers/masfoto.js'

const router = Router()

router.post('/masfoto', getMasfotos)

router.get('/masfoto/count', countMasfotos)

router.get('/masfoto/:id', getMasfoto)

router.post('/masfoto/create', createMasfoto)

router.put('/masfoto/:id', updateMasfoto)

router.delete('/masfoto/:id', deleteMasfoto)

export default router