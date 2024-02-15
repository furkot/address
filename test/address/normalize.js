const test = require('node:test');
const assert = require('node:assert');

const normalize = require('../../lib/address/normalize');

test('normalize address', () => {
  assert.strictEqual(
    normalize(),
    undefined,
    'undefined address'
  );
  assert.strictEqual(
    normalize(''),
    undefined,
    'empty address'
  );
  assert.strictEqual(
    normalize(',,,'),
    undefined,
    'all empty parts'
  );
  assert.strictEqual(
    normalize('France'),
    'FR',
    'only country'
  );
  assert.strictEqual(
    normalize('United States'),
    'US',
    'only country with known states'
  );
  assert.strictEqual(
    normalize('CA'),
    'CA',
    'can be country or state'
  );
  assert.strictEqual(
    normalize('NB'),
    'NB,CA',
    'only state code'
  );
  assert.strictEqual(
    normalize('Ontario'),
    'ON,CA',
    'only state name'
  );
  assert.strictEqual(
    normalize('California, USA'),
    'CA,US',
    'american state'
  );
  assert.strictEqual(
    normalize('123 Main St,New York,NY'),
    '123 Main St,New York,NY,US',
    'missing country'
  );
  assert.strictEqual(
    normalize('Paris, France'),
    'Paris,,FR',
    'town and country'
  );
  assert.strictEqual(
    normalize('Via Manzoni 255, Bari, Italy'),
    'Via Manzoni 255,Bari,,IT',
    'european address'
  );
  assert.strictEqual(
    normalize('123 Main St, New York, New York, USA'),
    '123 Main St,New York,NY,US',
    'full address'
  );
  assert.strictEqual(
    normalize('123 Main St,New York,NY,US'),
    '123 Main St,New York,NY,US',
    'already normalized'
  );
  assert.strictEqual(
    normalize('819 Failing Dr, Enid, OK 73701, USA'),
    '819 Failing Dr,Enid,OK,US',
    'us address with zip and country'
  );
  assert.strictEqual(
    normalize('US-183, Elm Creek, NE 68836-9763'),
    'US-183,Elm Creek,NE,US',
    'us address with zip'
  );
});
