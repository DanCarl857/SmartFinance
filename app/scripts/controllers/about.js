'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('aboutCtrl', function () {
    $(document).ready(function(){
      $('.modal-trigger').leanModal({
      	opacity: .5,
      	starting_top: '40%'
      });
    });
  });
