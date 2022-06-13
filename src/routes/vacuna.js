import { Router } from 'express';
import { countVacunas, createVacuna, deleteVacuna, getVacuna, getVacunas, updateVacuna } from '../controllers/vacuna.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Vacuna
 *  description: Vacuna endpoint
 */

/**
 * @swagger
 * /Vacuna:
 *  post:
 *      summary: Get all Vacuna
 *      tags: [Vacuna]
 */
router.post('/vacuna', getVacunas)

/**
 * @swagger
 * /Vacuna/count:
 *  get:
 *      summary: Get total Vacuna count
 *      tags: [Vacuna]
 */
router.get('/vacuna/count', countVacunas)

/**
 * @swagger
 * /Vacuna/id:
 *  get:
 *      summary: Get a Vacuna
 *      tags: [Vacuna]
 */
router.get('/vacuna/:id', getVacuna)

/**
 * @swagger
 * /Vacuna:
 *  post:
 *      summary: Create a new Vacuna
 *      tags: [Vacuna]
 */
router.post('/vacuna/create', createVacuna)

/**
 * @swagger
 * /Vacuna/id:
 *  put:
 *      summary: Update a Vacuna
 *      tags: [Vacuna]
 */
router.put('/vacuna/:id', updateVacuna)

/**
 * @swagger
 * /Vacuna/id:
 *  delete:
 *      summary: Delete a Vacuna
 *      tags: [Vacuna]
 */
router.delete('/vacuna/:id', deleteVacuna)

export default router