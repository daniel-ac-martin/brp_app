'use strict';

var util = require('util');
var DateController = require('hod-foundation').controllers.DateController;

var WhereController = function WhereController() {
  this.dateKey = 'collection-date';
  DateController.apply(this, arguments);
};

util.inherits(WhereController, DateController);

WhereController.prototype.validateField = function validateField(keyToValidate, req) {
  return DateController.prototype.validateField.call(this, keyToValidate, req, false);
};

module.exports = WhereController;
