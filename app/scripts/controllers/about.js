'use strict';

/**
 * @ngdoc function
 * @name mytodoGitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoGitApp
 */
angular.module('mytodoGitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
