const departments = require('../bootstrap/department.json');
const products = require('../bootstrap/product.json');

module.exports = {

  loadDepartments : function () {
    return departments;
  },

  loadProducts : function () {
    return products;
  }
}
