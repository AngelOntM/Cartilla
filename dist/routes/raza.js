import { Router } from 'express';
import { countRazas, createRaza, deleteRaza, getRaza, getRazas, updateRaza } from '../controllers/raza.js';
const router = Router();
/**
 * @swagger
 * tags:
 *  name: Razas
 *  description: Razas endpoint
 */

/**
 * @swagger
 * /Razas:
 *  post:
 *      summary: Get all Razas
 *      tags: [Razas]
 */

router.post('/raza', getRazas);
/**
 * @swagger
 * /Razas/count:
 *  get:
 *      summary: Get total Razas count
 *      tags: [Razas]
 */

router.get('/raza/count', countRazas);
/**
 * @swagger
 * /Razas/id:
 *  get:
 *      summary: Get a Razas
 *      tags: [Razas]
 */

router.get('/raza/:id', getRaza);
/**
 * @swagger
 * /Razas:
 *  post:
 *      summary: Create a new Raza
 *      tags: [Razas]
 */

router.post('/raza/create', createRaza);
/**
 * @swagger
 * /Razas/id:
 *  put:
 *      summary: Update a Raza
 *      tags: [Razas]
 */

router.put('/raza/:id', updateRaza);
/**
 * @swagger
 * /Razas/id:
 *  delete:
 *      summary: Delete a Raza
 *      tags: [Razas]
 */

router.delete('/raza/:id', deleteRaza);
export default router;