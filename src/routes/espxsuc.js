import { Router } from 'express';
import { countEspxsucs, createEspxsuc, deleteEspxsuc, getEspxsuc, getEspxsucs, updateEspxsuc } from '../controllers/espxsuc.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Espxsuc
 *  description: Espxsuc endpoint
 */

/**
 * @swagger
 * /Espxsuc:
 *  post:
 *      summary: Get all Espxsuc
 *      tags: [Espxsuc]
 */
router.post('/Espxsuc', getEspxsucs)

/**
 * @swagger
 * /Espxsuc/count:
 *  get:
 *      summary: Get total Espxsuc count
 *      tags: [Espxsuc]
 */
router.get('/Espxsuc/count', countEspxsucs)

/**
 * @swagger
 * /Espxsuc/id:
 *  get:
 *      summary: Get a Espxsuc
 *      tags: [Espxsuc]
 */
router.get('/Espxsuc/:id', getEspxsuc)

/**
 * @swagger
 * /Espxsuc:
 *  post:
 *      summary: Create a new Espxsuc
 *      tags: [Espxsuc]
 */
router.post('/Espxsuc/create', createEspxsuc)

/**
 * @swagger
 * /Espxsuc/id:
 *  put:
 *      summary: Update a Espxsuc
 *      tags: [Espxsuc]
 */
router.put('/Espxsuc/:id', updateEspxsuc)

/**
 * @swagger
 * /Espxsuc/id:
 *  delete:
 *      summary: Delete a Espxsuc
 *      tags: [Espxsuc]
 */
router.delete('/Espxsuc/:id', deleteEspxsuc)

export default router