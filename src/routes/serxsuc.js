import { Router } from 'express';
import { countSerxsucs, createSerxsuc, deleteSerxsuc, getSerxsuc, getSerxsucs, updateSerxsuc } from '../controllers/serxsuc.js'

const router = Router()

router.post('/Serxsuc', getSerxsucs)

router.get('/Serxsuc/count', countSerxsucs)

router.get('/Serxsuc/:id', getSerxsuc)

router.post('/Serxsuc/create', createSerxsuc)

router.put('/Serxsuc/:id', updateSerxsuc)

router.delete('/Serxsuc/:id', deleteSerxsuc)

export default router