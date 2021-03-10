const express = require("express");
const CompanyController = require("../app/controller/CompanyController");
const InsuranceController = require("../app/controller/InsurerController");
const RoleController = require("../app/controller/RoleController");
const UserController = require("../app/controller/UserController");
const { setComeFrom, hasPermission } = require("../helpers/middlewares");
const router = express.Router();



// Roles
router.get('/role',  RoleController.index);
router.post('/role', RoleController.store);

router.get('/permissions',  RoleController.showAllPermisison);

// Empresas
router.get('/company/:id', CompanyController.index);
router.post('/insurer/:id/company', CompanyController.store);


// hasPermission('company:read'),
// Seguradoras
router.get('/insurer/:id',  InsuranceController.index);
router.post('/insurer', InsuranceController.store);


// Usuarios
router.get('/user', UserController.index);
router.post('/insurer/:id/user',setComeFrom, UserController.store);
router.post('/company/:id/user',setComeFrom, UserController.store);

module.exports = router;