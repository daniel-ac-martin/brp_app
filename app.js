'use strict';

var foundation = require('hod-foundation');
var path = require('path');

// Initialise
foundation.init(require('./config'));

// Journeys
foundation.journey('/collection/',
  path.resolve(__dirname, './apps/collection/'));
foundation.journey('/correct-mistakes/',
  path.resolve(__dirname, './apps/correct-mistakes/'));
foundation.journey('/someone-else/',
  path.resolve(__dirname, './apps/someone-else/'));
foundation.journey('/not-arrived/',
  path.resolve(__dirname, './apps/not-arrived/'));
foundation.journey('/lost-stolen-damaged/',
  path.resolve(__dirname, './apps/lost-stolen-damaged/'));

// Start the app
foundation.start();
