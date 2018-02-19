import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResurce from 'angular-resource';
import routes from './routes';

import Init from './services/init';

import '../style/style.less';


angular.module('FALSY', [uiRouter, ngResurce])
  .service('Init', Init)
  .config(routes);