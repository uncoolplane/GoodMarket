var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/productCtrl');

const routepath = '/products';

router.get(routepath, productsCtrl.getProducts);
router.get(routepath + '/:id', productsCtrl.getProduct);
router.put(routepath, productsCtrl.createProduct);
router.post(routepath, productsCtrl.updateProduct);
router.delete(routepath + '/:id', productsCtrl.deleteProduct);

module.exports = router;
