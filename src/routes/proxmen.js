import { Router } from 'express';
import { countProxmens, createProxmen, deleteProxmen, getProxmen, getProxmens, updateProxmen } from '../controllers/Proxmen'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Proxmens
 *  description: Proxmens endpoint
 */

/**
 * @swagger
 * /Proxmens:
 *  get:
 *      summary: Get all Proxmens
 *      tags: [Proxmens]
 */
router.get('/proxmen', getProxmens)

/**
 * @swagger
 * /Proxmens/count:
 *  get:
 *      summary: Get total Proxmens count
 *      tags: [Proxmens]
 */
router.get('/proxmen/count', countProxmens)

/**
 * @swagger
 * /Proxmens/id:
 *  get:
 *      summary: Get a Proxmens
 *      tags: [Proxmens]
 */
router.get('/proxmen/:id', getProxmen)

/**
 * @swagger
 * /Proxmens:
 *  post:
 *      summary: Create a new Proxmen
 *      tags: [Proxmens]
 */
router.post('/proxmen', createProxmen)

/**
 * @swagger
 * /Proxmens/id:
 *  put:
 *      summary: Update a Proxmen
 *      tags: [Proxmens]
 */
router.put('/proxmen/:id', updateProxmen)

/**
 * @swagger
 * /Proxmens/id:
 *  delete:
 *      summary: Delete a Proxmen
 *      tags: [Proxmens]
 */
router.delete('/proxmen/:id', deleteProxmen)

export default router