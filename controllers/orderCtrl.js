module.exports = {
  getOrders: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    db.get_orders(function (err, orders) {
      if(err) {
        console.log('getOrders', err);
      }
      res.send(orders);
    })
  },
  getOrder: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_order([id], function (err, order) {
      if(err) {
        console.log('getOrder', err);
      }

      res.send(order);
    })

  },
  getOrderProducts : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_order_products([id], function (err, products) {
      if(err) {
        console.log('getOrderProducts', err);
      }
      res.send(products);
    })

  }
  createOrder : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var order = req.body;
    db.insert_order([order.orderdate, order.userid, order.total], function (err, order) {
      if(err) {
        console.log('createOrder', err);
      }
      res.send(order);
    })

  },
  updateOrder : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var order = req.body;
    db.update_order([order.orderdate, order.userid, order.total, order.id], function (err, order) {
      if(err) {
        console.log('updateOrder', err);
      }
      res.send(order);
    })
  },
  deleteOrder : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id=req.params.id;
    db.delete_order([id], function (err) {
      if(err) {
        console.log('deleteOrder', err);
      }
      res.send({isSuccessful: !err});
    })
  }
}
