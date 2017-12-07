module.exports = {
  getProducts: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    db.get_products(function (err, products) {
      if(err) {
        console.log('getProducts', err);
      }
      res.send(products);
    })
  },
  getProduct: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_product([id], function (err, product) {
      if(err) {
        console.log('getProduct', err);
      }
      res.send(product);
    })

  },
  createProduct : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var product = req.body;
    db.insert_product([product.name, product.description, product.unitprice, product.departmentid], function (err, product) {
      if(err) {
        console.log('createProduct', err);
      }

      res.send(product);
    })

  },
  updateProduct : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var product = req.body;
    db.update_product([product.name, product.description, product.unitprice, product.departmentid, product.id], function (err, product) {
      if(err) {
        console.log('createProduct', err);
      }

      res.send(product);
    })

  },
  deleteProduct : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id=req.params.id;
    db.delete_product([id], function (err) {
      if(err) {
        console.log('deleteProduct', err);
      }
      res.send({isSuccessful: !err});
    })

  }
}
