// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
<<<<<<< HEAD

const context = require.context('./app', true, /\.js$/);

context.keys().forEach(context);

=======
import forEach from 'lodash/forEach';

const context = require.context('./app', true, /\.js$/);

forEach(context.keys(), context);
>>>>>>> temp2
