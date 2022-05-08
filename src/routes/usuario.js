import { Router } from 'express';
import { createPropietario, createProveedor, deletePropietario, deleteProveedor, getPropietario, getPropietarios, getProveedor, getProveedores, loginUsuario, updatePropietario, updateProveedor } from '../controllers/Usuario'

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Usuarios endpoint
 */

/**
 * @swagger
 * /usuario/propietario:
 *  get:
 *      summary: Get all Propietarios
 *      tags: [Usuarios]
 */
router.get('/usuario/propietario', getPropietarios)

/**
 * @swagger
 * /usuario/proveedor:
 *  get:
 *      summary: Get all Proveedores
 *      tags: [Usuarios]
 */
router.get('/usuario/proveedor', getProveedores)

/**
 * @swagger
 * /usuario/proveedor/id:
 *  get:
 *      summary: Get a Proveedor
 *      tags: [Usuarios]
 */
router.get('/usuario/proveedor/:id', getProveedor)

/**
 * @swagger
 * /usuario/propietario/id:
 *  get:
 *      summary: Get a Propietario
 *      tags: [Usuarios]
 */
router.get('/usuario/propietario/:id', getPropietario)

/**
 * @swagger
 * /usuario/proveedor/register:
 *  post:
 *      summary: Register a new Proveedor
 *      tags: [Usuarios]
 */
router.post('/usuario/proveedor/register', createProveedor)

/**
 * @swagger
 * /usuario/propietario/register:
 *  post:
 *      summary: Register a new Propietario
 *      tags: [Usuarios]
 */
router.post('/usuario/propietario/register', createPropietario)

/**
 * @swagger
 * /usuarios/login:
 *  post:
 *      summary: Login a Usuario
 *      tags: [Usuarios]
 */
router.post('/usuario/login', loginUsuario)

/**
 * @swagger
 * /usuario/propietario/id:
 *  put:
 *      summary: Update a Propietario
 *      tags: [Usuarios]
 */
router.put('/usuario/propietario/:id', updatePropietario)

/**
 * @swagger
 * /usuario/proveedor/id:
 *  put:
 *      summary: Update a Proveedor
 *      tags: [Usuarios]
 */
router.put('/usuario/proveedor/:id', updateProveedor)

/**
 * @swagger
 * /usuario/proveedor/id:
 *  delete:
 *      summary: Delete a Proveedor
 *      tags: [Usuarios]
 */
router.delete('/usuario/proveedor/:id', deleteProveedor)

/**
 * @swagger
 * /usuario/propietario/id:
 *  delete:
 *      summary: Delete a Propietario
 *      tags: [Usuarios]
 */
router.delete('/usuario/propietario/:id', deletePropietario)


export default router