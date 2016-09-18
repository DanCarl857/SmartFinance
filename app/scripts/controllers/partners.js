'use strict';
/* global $ */

angular.module('websiteApp')
  .controller('partnerCtrl', [function () {
    $(document).ready(function(){
      $('.modal-trigger').leanModal({
      	opacity: .5,
      	starting_top: '40%'
      });
    });

  }]);
