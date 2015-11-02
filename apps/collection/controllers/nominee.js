'use strict';

var util = require('util');
var DateController = require('hod-foundation').controllers.DateController;

var NominatedPersonController = function NominatedPersonController() {
  this.dateKey = 'nominated-date';
  DateController.apply(this, arguments);
};

util.inherits(NominatedPersonController, DateController);

module.exports = NominatedPersonController;
