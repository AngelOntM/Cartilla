import { Router } from 'express';
import { countMascotas, createMascota, deleteMascota, getMascota, getMascotas, updateMascota } from '../controllers/mascota.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Mascota
 *  description: Mascota endpoint
 */

/**
 * @swagger
 * /Mascota:
 *  post:
 *      summary: Get all Mascota
 *      tags: [Mascota]
 */
router.post('/mascota', getMascotas)

/**
 * @swagger
 * /Mascota/count:
 *  get:
 *      summary: Get total Mascota count
 *      tags: [Mascota]
 */
router.get('/mascota/count', countMascotas)

/**
 * @swagger
 * /Mascota/id:
 *  get:
 *      summary: Get a Mascota
 *      tags: [Mascota]
 */
router.get('/mascota/:id', getMascota)

/**
 * @swagger
 * /Mascota:
 *  post:
 *      summary: Create a new Mascota
 *      tags: [Mascota]
 */
router.post('/mascota/create', createMascota)

/**
 * @swagger
 * /Mascota/id:
 *  put:
 *      summary: Update a Mascota
 *      tags: [Mascota]
 */
router.put('/mascota/:id', updateMascota)

/**
 * @swagger
 * /Mascota/id:
 *  delete:
 *      summary: Delete a Mascota
 *      tags: [Mascota]
 */
router.delete('/mascota/:id', deleteMascota)

export default router