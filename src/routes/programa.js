import { Router } from 'express';
import { countProgramas, createPrograma, deletePrograma, getPrograma, getProgramas, updatePrograma } from '../controllers/programa'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Programas
 *  description: Programas endpoint
 */

/**
 * @swagger
 * /Programas:
 *  get:
 *      summary: Get all Programas
 *      tags: [Programas]
 */
router.get('/programa', getProgramas)

/**
 * @swagger
 * /Programas/count:
 *  get:
 *      summary: Get total Programas count
 *      tags: [Programas]
 */
router.get('/programa/count', countProgramas)

/**
 * @swagger
 * /Programas/id:
 *  get:
 *      summary: Get a Programas
 *      tags: [Programas]
 */
router.get('/programa/:id', getPrograma)

/**
 * @swagger
 * /Programas:
 *  post:
 *      summary: Create a new Programa
 *      tags: [Programas]
 */
router.post('/programa', createPrograma)

/**
 * @swagger
 * /Programas/id:
 *  put:
 *      summary: Update a Programa
 *      tags: [Programas]
 */
router.put('/programa/:id', updatePrograma)

/**
 * @swagger
 * /Programas/id:
 *  delete:
 *      summary: Delete a Programa
 *      tags: [Programas]
 */
router.delete('/programa/:id', deletePrograma)

export default router