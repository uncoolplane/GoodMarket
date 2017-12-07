const departments = require('../bootstrap/department.json');

module.exports = {
  loadDepartments : function (req, res, next) {
    var db = req.app.get('db');
    for (var i = 0; i < departments.length; i++) {
      let department = departments[i];

      db.insert_department([department.label], function (err, department) {
        if (err) {
          console.log('loadDepartments', err);
        } else {
          console.log('loading...', department);
        }
      })
    }

    res.send({isSuccessful: true})
  },
  getDepartments: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    db.get_departments(function (err, departments) {
      if(err) {
        console.log('getDepartments', err);
      }
      res.send(departments);
    })
  },
  getDepartment: function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_department([id], function (err, department) {
      if(err) {
        console.log('getDepartment', err);
      }
      res.send(department);
    })
  },
  getDepartmentProducts = function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id = req.params.id;
    db.get_department_products([id], function (err, products) {
      if (err) {
        console.log('getDepartmentProducts', err);
      }
      res.send(products);
    })

  }
  createDepartment : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var department = req.body;
    // if(!department) return;
    db.insert_department([department.label], function (err, department) {
      if (err) {
        console.log('createDepartment', err);
      }
      res.send(department);
    })
  },
  updateDepartment : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var department = req.body;
    // if (!department) return;
    db.update_department([department.label, department.id], function (err, department) {
      if(err) {
        console.log('updateDepartment', err);
      }
      res.send(department)
    })

  },
  deleteDepartment : function (req, res, next) {
    var db = req.app.get('db');
    // if !db return;
    var id=req.params.id;
    db.delete_department([id], function (err) {
      if(err) {
        console.log('deleteDepartment', err);
      }
      res.send({isSuccessful: !err});
    })

  }
}
