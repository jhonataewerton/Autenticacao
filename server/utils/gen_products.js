var mongoose = require('mongoose');
var faker = require('@faker-js/faker');
var ProductModel = require('../models/ProductModel');

mongoose.connect('mongodb://localhost:27017/auth_test', {
  useNewUrlParser: true,
});


async function add(n) {
  try {
    for (let i = 0; i < n; i++) {
      const p = new ProductModel();
      p.name = faker.faker.commerce.productName();
      p.department = faker.faker.commerce.department();
      p.price = faker.faker.commerce.price();
      await p.save();
    }
  } catch (err) {
    console.log(err);
  }
}

add(100).then(() => {
  console.log('OK');
  mongoose.disconnect();
});
