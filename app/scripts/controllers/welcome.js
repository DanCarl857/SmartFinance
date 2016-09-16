'use strict';
/* global $ */

angular.module('websiteApp')
  .controller('welcomeCtrl', function () {
    $(document).ready(function(){
      $('.modal-trigger').leanModal({
      	opacity: .5,
      	starting_top: '40%'
      });
      $('.slider').slider({
      	full_width: true,
      	indicators: false
      });
    });

  });
