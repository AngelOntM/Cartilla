import { Router } from 'express';
import { countEspecialidades, createEspecialidad, deleteEspecialidad, getEspecialidad, getEspecialidades, updateEspecialidad } from '../controllers/especialidad.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Especialidad
 *  description: Especialidad endpoint
 */

/**
 * @swagger
 * /Especialidad:
 *  post:
 *      summary: Get all Especialidad
 *      tags: [Especialidad]
 */
router.post('/especialidad', getEspecialidades)

/**
 * @swagger
 * /Especialidad/count:
 *  get:
 *      summary: Get total Especialidad count
 *      tags: [Especialidad]
 */
router.get('/especialidad/count', countEspecialidades)

/**
 * @swagger
 * /Especialidad/id:
 *  get:
 *      summary: Get a Especialidad
 *      tags: [Especialidad]
 */
router.get('/especialidad/:id', getEspecialidad)

/**
 * @swagger
 * /Especialidad:
 *  post:
 *      summary: Create a new Especialidad
 *      tags: [Especialidad]
 */
router.post('/especialidad/create', createEspecialidad)

/**
 * @swagger
 * /Especialidad/id:
 *  put:
 *      summary: Update a Especialidad
 *      tags: [Especialidad]
 */
router.put('/especialidad/:id', updateEspecialidad)

/**
 * @swagger
 * /Especialidad/id:
 *  delete:
 *      summary: Delete a Especialidad
 *      tags: [Especialidad]
 */
router.delete('/especialidad/:id', deleteEspecialidad)

export default router