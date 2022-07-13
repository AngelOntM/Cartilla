import { Router } from 'express';
import { createPropietario, createProveedor, createSupervisor, deletePropietario, deleteProveedor, deleteSupervisor, getPropietario, getPropietarios, getProveedor, getProveedores, getSupervisor, getSupervisores, loginUsuario, updatePropietario, updateProveedor, updateSupervisor } from '../controllers/usuario.js'

const router = Router()

router.get('/usuario/propietario', getPropietarios)

router.get('/usuario/proveedor', getProveedores)

router.get('/usuario/supervisor', getSupervisores)

router.get('/usuario/proveedor/:id', getProveedor)

router.get('/usuario/propietario/:id', getPropietario)

router.get('/usuario/supervisor/:id', getSupervisor)

router.post('/usuario/proveedor/register', createProveedor)

router.post('/usuario/propietario/register', createPropietario)

router.post('/usuario/supervisor/register', createSupervisor)

router.post('/usuario/login', loginUsuario)

router.put('/usuario/propietario/:id', updatePropietario)

router.put('/usuario/proveedor/:id', updateProveedor)

router.put('/usuario/supervisor/:id', updateSupervisor)

router.delete('/usuario/proveedor/:id', deleteProveedor)

router.delete('/usuario/propietario/:id', deletePropietario)

router.delete('/usuario/supervisor/:id', deleteSupervisor)

export default router