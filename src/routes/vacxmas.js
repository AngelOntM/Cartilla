import { Router } from 'express';
import { countVacxmass, createVacxmas, deleteVacxmas, getVacxmas, getVacxmass, updateVacxmas } from '../controllers/vacxmas.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Vacxmas
 *  description: Vacxmas endpoint
 */

/**
 * @swagger
 * /Vacxmas:
 *  post:
 *      summary: Get all Vacxmas
 *      tags: [Vacxmas]
 */
router.post('/Vacxmas', getVacxmass)

/**
 * @swagger
 * /Vacxmas/count:
 *  get:
 *      summary: Get total Vacxmas count
 *      tags: [Vacxmas]
 */
router.get('/Vacxmas/count', countVacxmass)

/**
 * @swagger
 * /Vacxmas/id:
 *  get:
 *      summary: Get a Vacxmas
 *      tags: [Vacxmas]
 */
router.get('/Vacxmas/:id', getVacxmas)

/**
 * @swagger
 * /Vacxmas:
 *  post:
 *      summary: Create a new Vacxmas
 *      tags: [Vacxmas]
 */
router.post('/Vacxmas/create', createVacxmas)

/**
 * @swagger
 * /Vacxmas/id:
 *  put:
 *      summary: Update a Vacxmas
 *      tags: [Vacxmas]
 */
router.put('/Vacxmas/:id', updateVacxmas)

/**
 * @swagger
 * /Vacxmas/id:
 *  delete:
 *      summary: Delete a Vacxmas
 *      tags: [Vacxmas]
 */
router.delete('/Vacxmas/:id', deleteVacxmas)

export default router