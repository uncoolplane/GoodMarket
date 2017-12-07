module.exports {
  addProductToOrder : function (req, res, next) {
    var db = req.app.get('db');
    var id=req.params.id;
    var product = req.body;
    db.insert_order_product([id, product.id, product.quantity], function (err, productorder) {
      if(err) {
        console.log('addProductToOrder', err);
      }

      res.send(productorder);
    })
  },
  updateProductInOrder : function (req, res, next) {
    var db = req.app.get('db');
    var id=req.params.id;
    var product = req.body;
    db.insert_order_product([id, productorder.productid, productorder.quantity, productorder.id], function (err, productorder) {
      if(err) {
        console.log('addProductToOrder', err);
      }

      res.send(productorder);
    })
  },
  deleteProductFromOrder : function (req, res, next) {
    var db = req.app.get('db');
    var id=req.params.id;
    db.delete_order_product([id], function (err) {
      if(err) {
        console.log('deleteProductFromOrder', err);
      }
      res.send({isSuccessful: !err});
    })
  }
}
