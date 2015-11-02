'use strict';

var util = require('util');
var DateController = require('hod-foundation').controllers.DateController;

var PersonalDetailsController = function PersonalDetailsController() {
  this.dateKey = 'date-of-birth';
  DateController.apply(this, arguments);
};

util.inherits(PersonalDetailsController, DateController);

module.exports = PersonalDetailsController;
