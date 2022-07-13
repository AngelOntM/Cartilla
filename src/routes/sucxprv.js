import { Router } from 'express';
import { countSucxprvs, createSucxprv, deleteSucxprv, getSucxprv, getSucxprvs, updateSucxprv } from '../controllers/sucxprv.js'

const router = Router()

router.post('/sucxprv', getSucxprvs)

router.get('/sucxprv/count', countSucxprvs)

router.get('/sucxprv/:id', getSucxprv)

router.post('/sucxprv/create', createSucxprv)

router.put('/sucxprv/:id', updateSucxprv)

router.delete('/sucxprv/:id', deleteSucxprv)

export default router