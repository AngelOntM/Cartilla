import { Router } from 'express';
import { countModulos, createModulo, deleteModulo, getModulo, getModulos, updateModulo } from '../controllers/Modulo.js'

const router = Router()

router.post('/modulo', getModulos)

router.get('/modulo/count', countModulos)

router.get('/modulo/:id', getModulo)

router.post('/modulo/create', createModulo)

router.put('/modulo/:id', updateModulo)

router.delete('/modulo/:id', deleteModulo)

export default router