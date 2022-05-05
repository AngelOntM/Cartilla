import { Router } from 'express';
import { countTipos, createTipo, deleteTipo, getTipo, getTipos, updateTipo } from '../controllers/Tipo'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tipos
 *  description: Tipos endpoint
 */

/**
 * @swagger
 * /Tipos:
 *  get:
 *      summary: Get all Tipos
 *      tags: [Tipos]
 */
router.get('/tipo', getTipos)

/**
 * @swagger
 * /Tipos/count:
 *  get:
 *      summary: Get total Tipos count
 *      tags: [Tipos]
 */
router.get('/tipo/count', countTipos)

/**
 * @swagger
 * /Tipos/id:
 *  get:
 *      summary: Get all Tipos
 *      tags: [Tipos]
 */
router.get('/tipo/:id', getTipo)

/**
 * @swagger
 * /Tipos:
 *  post:
 *      summary: Create a new Tipo
 *      tags: [Tipos]
 */
router.post('/tipo', createTipo)

/**
 * @swagger
 * /Tipos/id:
 *  put:
 *      summary: Update a Tipo
 *      tags: [Tipos]
 */
router.put('/tipo/:id', updateTipo)

/**
 * @swagger
 * /Tipos/id:
 *  delete:
 *      summary: Delete a Tipo
 *      tags: [Tipos]
 */
router.delete('/tipo/:id', deleteTipo)

export default router