import { Router } from 'express';
import { countEspxsucs, createEspxsuc, deleteEspxsuc, getEspxsuc, getEspxsucs, updateEspxsuc } from '../controllers/espxsuc.js'

const router = Router()

router.post('/Espxsuc', getEspxsucs)

router.get('/Espxsuc/count', countEspxsucs)

router.get('/Espxsuc/:id', getEspxsuc)

router.post('/Espxsuc/create', createEspxsuc)

router.put('/Espxsuc/:id', updateEspxsuc)

router.delete('/Espxsuc/:id', deleteEspxsuc)

export default router