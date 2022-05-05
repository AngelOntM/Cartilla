import { Router } from 'express';
import { countVacunas, createVacuna, deleteVacuna, getVacuna, getVacunas, updateVacuna } from '../controllers/vacuna'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Vacunas
 *  description: Vacunas endpoint
 */

/**
 * @swagger
 * /Vacunas:
 *  get:
 *      summary: Get all Vacunas
 *      tags: [Vacunas]
 */
router.get('/vacuna', getVacunas)

/**
 * @swagger
 * /Vacunas/count:
 *  get:
 *      summary: Get total Vacunas count
 *      tags: [Vacunas]
 */
router.get('/vacuna/count', countVacunas)

/**
 * @swagger
 * /Vacunas/id:
 *  get:
 *      summary: Get all Vacunas
 *      tags: [Vacunas]
 */
router.get('/vacuna/:id', getVacuna)

/**
 * @swagger
 * /Vacunas:
 *  post:
 *      summary: Create a new Vacuna
 *      tags: [Vacunas]
 */
router.post('/vacuna', createVacuna)

/**
 * @swagger
 * /Vacunas/id:
 *  put:
 *      summary: Update a Vacuna
 *      tags: [Vacunas]
 */
router.put('/vacuna/:id', updateVacuna)

/**
 * @swagger
 * /Vacunas/id:
 *  delete:
 *      summary: Delete a Vacuna
 *      tags: [Vacunas]
 */
router.delete('/vacuna/:id', deleteVacuna)

export default router