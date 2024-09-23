import addDepRoutes from './addDepRoutes.js';
import addEmpRoutes from './addEmpRoutes.js';
import addroleRoutes from './addroleRoutes.js';
import getAllDepRoutes from './getAllDepRoutes.js';
import getAllEmpRoutes from './getAllEmpRoutes.js';
import getAllRolesRoutes from './getAllRolesRoutes.js';
import getEmpRoutes from './getEmpRoutes.js';
import updateRoleRoute from './updateRoleRoute.js';
import express from 'express';
const router = express.Router();

router.use('/addDepartment', addDepRoutes);
router.use('/addEomployee', addEmpRoutes);
router.use('/addrole', addroleRoutes);
router.use('/getAllDepartments', getAllDepRoutes);
router.use('/getAllEmployees', getAllEmpRoutes);
router.use('/getAllroles', getAllRolesRoutes);
router.use('/getEmployee', getEmpRoutes);
router.use('/updateRole', updateRoleRoute);

export default router;