import { Router } from 'express';
import { countTipousus, createTipousu, deleteTipousu, getTipousu, getTipousus, updateTipousu } from '../controllers/tipousu.js'

const router = Router()

router.post('/tipousu', getTipousus)

router.get('/tipousu/count', countTipousus)

router.get('/tipousu/:id', getTipousu)

router.post('/tipousu/create', createTipousu)

router.put('/tipousu/:id', updateTipousu)

router.delete('/tipousu/:id', deleteTipousu)

export default router