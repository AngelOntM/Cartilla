import { Router } from 'express';
import { countMasfotos, createMasfoto, deleteMasfoto, getMasfoto, getMasfotos, updateMasfoto } from '../controllers/masfoto.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Masfoto
 *  description: Masfoto endpoint
 */

/**
 * @swagger
 * /Masfoto:
 *  post:
 *      summary: Get all Masfoto
 *      tags: [Masfoto]
 */
router.post('/masfoto', getMasfotos)

/**
 * @swagger
 * /Masfoto/count:
 *  get:
 *      summary: Get total Masfoto count
 *      tags: [Masfoto]
 */
router.get('/masfoto/count', countMasfotos)

/**
 * @swagger
 * /Masfoto/id:
 *  get:
 *      summary: Get a Masfoto
 *      tags: [Masfoto]
 */
router.get('/masfoto/:id', getMasfoto)

/**
 * @swagger
 * /Masfoto:
 *  post:
 *      summary: Create a new Masfoto
 *      tags: [Masfoto]
 */
router.post('/masfoto/create', createMasfoto)

/**
 * @swagger
 * /Masfoto/id:
 *  put:
 *      summary: Update a Masfoto
 *      tags: [Masfoto]
 */
router.put('/masfoto/:id', updateMasfoto)

/**
 * @swagger
 * /Masfoto/id:
 *  delete:
 *      summary: Delete a Masfoto
 *      tags: [Masfoto]
 */
router.delete('/masfoto/:id', deleteMasfoto)

export default router