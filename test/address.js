const test = require('tape');
const furkotAddress = require('..');

test('furkot address must have at least one test', function (t) {
  furkotAddress();
  t.fail('Need to write tests.');
  t.end();
});
