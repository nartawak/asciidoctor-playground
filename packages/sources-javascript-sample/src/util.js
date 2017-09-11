const _ = require('lodash');


function isEmpty(value) {
  return _.isEmpty(value);
}

module.exports = {
  isEmpty
}