import { Router } from 'express';
import { countProxusus, createProxusu, deleteProxusu, getProxusu, getProxusus, updateProxusu } from '../controllers/Proxusu'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Proxusus
 *  description: Proxusus endpoint
 */

/**
 * @swagger
 * /Proxusus:
 *  get:
 *      summary: Get all Proxusus
 *      tags: [Proxusus]
 */
router.get('/proxusu', getProxusus)

/**
 * @swagger
 * /Proxusus/count:
 *  get:
 *      summary: Get total Proxusus count
 *      tags: [Proxusus]
 */
router.get('/proxusu/count', countProxusus)

/**
 * @swagger
 * /Proxusus/id:
 *  get:
 *      summary: Get a Proxusus
 *      tags: [Proxusus]
 */
router.get('/proxusu/:id', getProxusu)

/**
 * @swagger
 * /Proxusus:
 *  post:
 *      summary: Create a new Proxusu
 *      tags: [Proxusus]
 */
router.post('/proxusu', createProxusu)

/**
 * @swagger
 * /Proxusus/id:
 *  put:
 *      summary: Update a Proxusu
 *      tags: [Proxusus]
 */
router.put('/proxusu/:id', updateProxusu)

/**
 * @swagger
 * /Proxusus/id:
 *  delete:
 *      summary: Delete a Proxusu
 *      tags: [Proxusus]
 */
router.delete('/proxusu/:id', deleteProxusu)

export default router