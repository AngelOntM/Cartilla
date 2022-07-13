import { Router } from 'express';
import { countModxtipus, createModxtipu, deleteModxtipu, getModxtipu, getModxtipus, updateModxtipu } from '../controllers/modxtipu.js'

const router = Router()

router.post('/modxtipu', getModxtipus)

router.get('/modxtipu/count', countModxtipus)

router.get('/modxtipu/:id', getModxtipu)

router.post('/modxtipu/create', createModxtipu)

router.put('/modxtipu/:id', updateModxtipu)

router.delete('/modxtipu/:id', deleteModxtipu)

export default router