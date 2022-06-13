import { Router } from 'express';
import { countSerxsucs, createSerxsuc, deleteSerxsuc, getSerxsuc, getSerxsucs, updateSerxsuc } from '../controllers/Serxsuc.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Serxsuc
 *  description: Serxsuc endpoint
 */

/**
 * @swagger
 * /Serxsuc:
 *  post:
 *      summary: Get all Serxsuc
 *      tags: [Serxsuc]
 */
router.post('/Serxsuc', getSerxsucs)

/**
 * @swagger
 * /Serxsuc/count:
 *  get:
 *      summary: Get total Serxsuc count
 *      tags: [Serxsuc]
 */
router.get('/Serxsuc/count', countSerxsucs)

/**
 * @swagger
 * /Serxsuc/id:
 *  get:
 *      summary: Get a Serxsuc
 *      tags: [Serxsuc]
 */
router.get('/Serxsuc/:id', getSerxsuc)

/**
 * @swagger
 * /Serxsuc:
 *  post:
 *      summary: Create a new Serxsuc
 *      tags: [Serxsuc]
 */
router.post('/Serxsuc/create', createSerxsuc)

/**
 * @swagger
 * /Serxsuc/id:
 *  put:
 *      summary: Update a Serxsuc
 *      tags: [Serxsuc]
 */
router.put('/Serxsuc/:id', updateSerxsuc)

/**
 * @swagger
 * /Serxsuc/id:
 *  delete:
 *      summary: Delete a Serxsuc
 *      tags: [Serxsuc]
 */
router.delete('/Serxsuc/:id', deleteSerxsuc)

export default router