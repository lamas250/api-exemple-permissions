const express = require("express");
const CompanyController = require("../app/controller/CompanyController");
const InsuranceController = require("../app/controller/InsurerController");
const RoleController = require("../app/controller/RoleController");
const UserController = require("../app/controller/UserController");
const { setComeFrom } = require("../helpers/middlewares");
const router = express.Router();



// Roles
router.get('/role', RoleController.index);
router.post('/role', RoleController.store);

// Empresas
router.get('/insurer/:id/company', CompanyController.index);
router.post('/insurer/:id/company', CompanyController.store);

// Seguradoras
router.post('/insurer', InsuranceController.store);

// Usuarios
router.get('/user', UserController.index);
router.post('/insurer/:id/user',setComeFrom, UserController.store);
router.post('/company/:id/user',setComeFrom, UserController.store);

module.exports = router;