import { Router } from 'express';
import { countMenus, createMenu, deleteMenu, getMenu, getMenus, updateMenu } from '../controllers/menu.js';
const router = Router();
/**
 * @swagger
 * tags:
 *  name: Menu
 *  description: Menu endpoint
 */

/**
 * @swagger
 * /menu:
 *  post:
 *      summary: Get all menu
 *      tags: [Menu]
 */

router.post('/menu', getMenus);
/**
 * @swagger
 * /menu/count:
 *  get:
 *      summary: Get total menu count
 *      tags: [Menu]
 */

router.get('/menu/count', countMenus);
/**
 * @swagger
 * /menu/id:
 *  get:
 *      summary: Get a menu
 *      tags: [Menu]
 */

router.get('/menu/:id', getMenu);
/**
 * @swagger
 * /menu:
 *  post:
 *      summary: Create a new menu
 *      tags: [Menu]
 */

router.post('/menu/create', createMenu);
/**
 * @swagger
 * /menu/id:
 *  put:
 *      summary: Update a menu
 *      tags: [Menu]
 */

router.put('/menu/:id', updateMenu);
/**
 * @swagger
 * /menu/id:
 *  delete:
 *      summary: Delete a menu
 *      tags: [Menu]
 */

router.delete('/menu/:id', deleteMenu);
export default router;