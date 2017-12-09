var express = require('express');
var router = express.Router();
var departmentCtrl = require('../controllers/departmentCtrl');

const routepath = '/departments';

router.get(routepath, departmentCtrl.getDepartments);
router.get(routepath + '/:id', departmentCtrl.getDepartment);
router.get(routepath + '/:id/products', departmentCtrl.getDepartmentProducts);
router.put(routepath, departmentCtrl.createDepartment);
router.post(routepath, departmentCtrl.updateDepartment);
router.delete(routepath + '/:id', departmentCtrl.deleteDepartment);

module.exports = router;
