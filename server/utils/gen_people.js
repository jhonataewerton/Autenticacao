var mongoose = require('mongoose');
var faker = require('@faker-js/faker');
var PersonModel = require('../models/PersonModel');

mongoose.connect('mongodb://localhost:27017/auth_test', {
  useNewUrlParser: true,
});

async function add(n) {
  try {
    for (let i = 0; i < n; i++) {
      const p = new PersonModel();
      p.name = faker.faker.person.firstName();
      p.country = faker.faker.location.streetAddress();
      p.email = faker.faker.internet.email();
      p.company = faker.faker.company.name();
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
