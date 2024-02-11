const test = require('node:test');
const assert = require('node:assert');

const stringify = require('../../lib/address/stringify');

test('string representation of the address', () => {
  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    city: 'New York',
    province: 'NY',
    country: 'USA'
  }), '123 Main St,New York,NY,US', 'all fields present');

  assert.strictEqual(stringify({
    city: 'Los Angeles',
    province: 'CA',
    country: 'USA'
  }), ',Los Angeles,CA,US', 'missing house and street fields');

  assert.strictEqual(stringify({
    street: 'Elm St',
    province: 'California'
  }), 'Elm St,,CA,US', 'missing house, city, and country fields');

  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    country: 'USA'
  }), '123 Main St,,,US', 'missing city and state fields');

  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    city: 'Toronto',
    province: 'ON',
    country: 'Canada'
  }), '123 Main St,Toronto,ON,CA', 'canadian address with all fields present');

  assert.strictEqual(stringify({
    house: 10,
    street: 'Rue Tournefort',
    city: 'Paris',
    country: 'France'
  }), '10 Rue Tournefort,Paris,,FR', 'european address without state');

  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    city: 'New York',
    province: 'XX',
    country: 'USA'
  }), '123 Main St,New York,,US', 'unknown state with country present');
});

test('return unknown', () => {
  assert.strictEqual(stringify(), undefined, 'undefined address');

  assert.strictEqual(stringify({}), undefined, 'empty object');

  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    city: 'New York',
    province: 'XX'
  }), undefined, 'unknown state and missing country');

  assert.strictEqual(stringify({
    house: 123,
    street: 'Main St',
    city: 'New York'
  }), undefined, 'missing state and country');
});
