import { Router } from 'express';
import { countUsuarios, createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from '../controllers/Usuario'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Usuarios endpoint
 */

/**
 * @swagger
 * /Usuarios:
 *  get:
 *      summary: Get all Usuarios
 *      tags: [Usuarios]
 */
router.get('/usuario', getUsuarios)

/**
 * @swagger
 * /Usuarios/count:
 *  get:
 *      summary: Get total Usuarios count
 *      tags: [Usuarios]
 */
router.get('/usuario/count', countUsuarios)

/**
 * @swagger
 * /Usuarios/id:
 *  get:
 *      summary: Get all Usuarios
 *      tags: [Usuarios]
 */
router.get('/usuario/:id', getUsuario)

/**
 * @swagger
 * /Usuarios:
 *  post:
 *      summary: Create a new Usuario
 *      tags: [Usuarios]
 */
router.post('/usuario', createUsuario)

/**
 * @swagger
 * /Usuarios/id:
 *  put:
 *      summary: Update a Usuario
 *      tags: [Usuarios]
 */
router.put('/usuario/:id', updateUsuario)

/**
 * @swagger
 * /Usuarios/id:
 *  delete:
 *      summary: Delete a Usuario
 *      tags: [Usuarios]
 */
router.delete('/usuario/:id', deleteUsuario)

export default router