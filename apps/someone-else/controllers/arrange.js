'use strict';

var util = require('util');
var DateController = require('hod-foundation').controllers.DateController;

var ArrangeController = function ArrangeController() {
  DateController.apply(this, arguments);
};

util.inherits(ArrangeController, DateController);

ArrangeController.prototype.process = function process(req) {
  if (req.form.values['arrange-collection-radio'] === 'someone-else') {
    this.dateKey = 'someone-else-date';
    delete req.form.values['no-reason'];
    req.form.values.nominating = 'Nominate';
    this.options.next = '/reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'change-person') {
    this.dateKey = 'change-person-date';
    req.form.values['no-reason'] = true;
    req.form.values.nominating = 'Change';
    this.options.next = '/personal-details-no-reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'cancel-request') {
    this.dateKey = '';
    req.form.values['no-reason'] = true;
    req.form.values.nominating = 'Cancel';
    this.options.next = '/personal-details-no-reason';
  }

  DateController.prototype.process.apply(this, arguments);
};

ArrangeController.prototype.validateField = function validateField(key, req) {
  var required = false;

  if (key.indexOf('someone-else') !== -1 && this.dateKey === 'someone-else-date') {
    required = true;
  }
  if (key.indexOf('change-person') !== -1 && this.dateKey === 'change-person-date') {
    required = true;
  }

  return DateController.prototype.validateField.call(this, key, req, required);
};

module.exports = ArrangeController;
