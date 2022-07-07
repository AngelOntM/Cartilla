import { Router } from 'express';
import { countSerxmass, createSerxmas, deleteSerxmas, getSerxmas, getSerxmass, updateSerxmas } from '../controllers/serxmas.js';
const router = Router();
/**
 * @swagger
 * tags:
 *  name: Serxmas
 *  description: Serxmas endpoint
 */

/**
 * @swagger
 * /Serxmas:
 *  post:
 *      summary: Get all Serxmas
 *      tags: [Serxmas]
 */

router.post('/serxmas', getSerxmass);
/**
 * @swagger
 * /Serxmas/count:
 *  get:
 *      summary: Get total Serxmas count
 *      tags: [Serxmas]
 */

router.get('/serxmas/count', countSerxmass);
/**
 * @swagger
 * /Serxmas/id:
 *  get:
 *      summary: Get a Serxmas
 *      tags: [Serxmas]
 */

router.get('/serxmas/:id', getSerxmas);
/**
 * @swagger
 * /Serxmas:
 *  post:
 *      summary: Create a new Serxmas
 *      tags: [Serxmas]
 */

router.post('/serxmas/create', createSerxmas);
/**
 * @swagger
 * /Serxmas/id:
 *  put:
 *      summary: Update a Serxmas
 *      tags: [Serxmas]
 */

router.put('/serxmas/:id', updateSerxmas);
/**
 * @swagger
 * /Serxmas/id:
 *  delete:
 *      summary: Delete a Serxmas
 *      tags: [Serxmas]
 */

router.delete('/serxmas/:id', deleteSerxmas);
export default router;