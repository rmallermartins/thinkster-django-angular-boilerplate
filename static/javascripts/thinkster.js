(function functionName() {
  'use strict';

  angular.module('thinkster', [
    'thinkster.routes',
    'thinkster.config',
    'thinkster.authentication'
  ]);

  angular.module('thinkster.routes', ['ngRoute']);

  angular.module('thinkster.config', []);

  // CSRF Protection
  angular.module('thinkster').run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
