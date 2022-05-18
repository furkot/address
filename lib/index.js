const address = require('./address');
const country = require('./country');
const state = require('./state');

module.exports = {
  ...address,
  ...country,
  ...state
};
