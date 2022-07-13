import { Router } from 'express';
import { countProxmens, createProxmen, deleteProxmen, getProxmen, getProxmens, updateProxmen } from '../controllers/proxmen.js'

const router = Router()

router.post('/proxmen', getProxmens)

router.get('/proxmen/count', countProxmens)

router.get('/proxmen/:id', getProxmen)

router.post('/proxmen/create', createProxmen)

router.put('/proxmen/:id', updateProxmen)

router.delete('/proxmen/:id', deleteProxmen)

export default router