'use strict';
/* global $ */

angular.module('websiteApp')
  .controller('serviceCtrl', ['$scope', function ($scope) {
  	$(document).ready(function(){
      $('.modal-trigger').leanModal({
      	opacity: .5,
      	starting_top: '40%'
      });
    });
  }]);
