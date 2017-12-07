module.exports = {
  getUsers: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    db.get_users(function (err, users) {
      if(err) {
        console.log('getUsers', err);
      }
      res.send(users);
    })
  },
  getUser: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_user([id], function (err, user) {
      if(err) {
        console.log('getUser', err);
      }
      res.send(user);
    })

  },
  getUserOrders: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_user_orders([id], function (err, orders) {
      if(err) {
        console.log('getUserOrders', err);
      }
      res.send(orders);
    })

  }
  createUser : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var user = req.body;
    db.insert_user([user.name, user.email, user.password], function(err, user) {
      if(err) {
        console.log('createUser', err);
      }
      res.send(user);
    })
  },
  updateUser : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;

    var user = req.body;
    db.update_user([user.name, user.email, user.password, user.id], function(err, user) {
      if(err) {
        console.log('updateUser', err);
      }
      res.send(user);
    })

  },
  deleteUser : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id=req.params.id;
    db.delete_user([id], function (err) {
      if(err) {
        console.log('deleteUser', err);
      }
      res.send({isSuccessful: !err});
    })

  }
}
