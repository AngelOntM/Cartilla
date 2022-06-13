import { Router } from 'express';
import { countSucxprvs, createSucxprv, deleteSucxprv, getSucxprv, getSucxprvs, updateSucxprv } from '../controllers/sucxprv.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Sucxprv
 *  description: Sucxprv endpoint
 */

/**
 * @swagger
 * /Sucxprv:
 *  post:
 *      summary: Get all Sucxprv
 *      tags: [Sucxprv]
 */
router.post('/sucxprv', getSucxprvs)

/**
 * @swagger
 * /Sucxprv/count:
 *  get:
 *      summary: Get total Sucxprv count
 *      tags: [Sucxprv]
 */
router.get('/sucxprv/count', countSucxprvs)

/**
 * @swagger
 * /Sucxprv/id:
 *  get:
 *      summary: Get a Sucxprv
 *      tags: [Sucxprv]
 */
router.get('/sucxprv/:id', getSucxprv)

/**
 * @swagger
 * /Sucxprv:
 *  post:
 *      summary: Create a new Sucxprv
 *      tags: [Sucxprv]
 */
router.post('/sucxprv/create', createSucxprv)

/**
 * @swagger
 * /Sucxprv/id:
 *  put:
 *      summary: Update a Sucxprv
 *      tags: [Sucxprv]
 */
router.put('/sucxprv/:id', updateSucxprv)

/**
 * @swagger
 * /Sucxprv/id:
 *  delete:
 *      summary: Delete a Sucxprv
 *      tags: [Sucxprv]
 */
router.delete('/sucxprv/:id', deleteSucxprv)

export default router