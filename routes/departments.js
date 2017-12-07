var express = require('express');
var router = express.Router();
var departmentCtrl = require('../controllers/departmentCtrl');

const routepath = '/departments';

/* GET departments listing. */
router.get(routepath, departmentCtrl.getDepartments);
router.put(routepath + '/load', departmentCtrl.loadDepartments)

module.exports = router;
