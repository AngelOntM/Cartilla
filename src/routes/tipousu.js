import { Router } from 'express';
import { countTipousus, createTipousu, deleteTipousu, getTipousu, getTipousus, updateTipousu } from '../controllers/Tipousu'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tipousus
 *  description: Tipousus endpoint
 */

/**
 * @swagger
 * /Tipousus:
 *  post:
 *      summary: Get all Tipousus
 *      tags: [Tipousus]
 */
router.post('/tipousu', getTipousus)

/**
 * @swagger
 * /Tipousus/count:
 *  get:
 *      summary: Get total Tipousus count
 *      tags: [Tipousus]
 */
router.get('/tipousu/count', countTipousus)

/**
 * @swagger
 * /Tipousus/id:
 *  get:
 *      summary: Get a Tipousus
 *      tags: [Tipousus]
 */
router.get('/tipousu/:id', getTipousu)

/**
 * @swagger
 * /Tipousus:
 *  post:
 *      summary: Create a new Tipousu
 *      tags: [Tipousus]
 */
router.post('/tipousu/create', createTipousu)

/**
 * @swagger
 * /Tipousus/id:
 *  put:
 *      summary: Update a Tipousu
 *      tags: [Tipousus]
 */
router.put('/tipousu/:id', updateTipousu)

/**
 * @swagger
 * /Tipousus/id:
 *  delete:
 *      summary: Delete a Tipousu
 *      tags: [Tipousus]
 */
router.delete('/tipousu/:id', deleteTipousu)

export default router