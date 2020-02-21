'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const name = `${Faker.name.firstName()}`;
  // add variables to virtual user's context:
  userContext.vars.name = name;
  // continue with executing the scenario:
  return done();
}