import { Router } from 'express';
import { countSubmenus, createSubmenu, deleteSubmenu, getSubmenu, getSubmenus, updateSubmenu } from '../controllers/submenu.js'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Submenu
 *  description: Submenu endpoint
 */

/**
 * @swagger
 * /Submenu:
 *  post:
 *      summary: Get all Submenu
 *      tags: [Submenu]
 */
router.post('/submenu', getSubmenus)

/**
 * @swagger
 * /Submenu/count:
 *  get:
 *      summary: Get total Submenu count
 *      tags: [Submenu]
 */
router.get('/submenu/count', countSubmenus)

/**
 * @swagger
 * /Submenu/id:
 *  get:
 *      summary: Get a Submenu
 *      tags: [Submenu]
 */
router.get('/submenu/:id', getSubmenu)

/**
 * @swagger
 * /Submenu:
 *  post:
 *      summary: Create a new Submenu
 *      tags: [Submenu]
 */
router.post('/submenu/create', createSubmenu)

/**
 * @swagger
 * /Submenu/id:
 *  put:
 *      summary: Update a Submenu
 *      tags: [Submenu]
 */
router.put('/submenu/:id', updateSubmenu)

/**
 * @swagger
 * /Submenu/id:
 *  delete:
 *      summary: Delete a Submenu
 *      tags: [Submenu]
 */
router.delete('/submenu/:id', deleteSubmenu)

export default router