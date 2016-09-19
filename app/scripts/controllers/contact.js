'use strict';
/* global $ */

angular.module('websiteApp')
  .controller('contactCtrl', ['$scope', '$interval', function ($scope, $interval) {
  	$(document).ready(function(){
      $('.modal-trigger').leanModal({
      	opacity: .5,
      	starting_top: '40%'
      });
      $('.tooltipped').tooltip({delay: 50});
    });

    $scope.contactSky = function(){
    	$('#contactModal').openModal({
    			dismissible: false,
				opacity: '.5'
    	});

    	for(var i = 0; i < 1000000; i++){
    		var count = i  + 1;
    	}

    	var interval = $interval(function() {
  			console.log("wow")
    		$('#contactModal').openModal({
    			dismissible: false,
				opacity: '.5'
    		});
		}, 10000);

		$interval.cancel($scope.interval);

    	if($scope.firstName && $scope.lastName && $scope.email && $scope.subject){
    		if($scope.description.length > 12){
    			console.info("Success");
    			$scope.clearForm();
    			$('#contactModal').closeModal();
    			$('.lean-overlay').remove();
    			Materialize.toast('Your request has been received. We will get back to you shortly', 5000, 'rounded');
    		} else {
    			$('#contactModal').closeModal();
    			$('.lean-overlay').remove();
    			Materialize.toast('Your description is not clear enough please.', 6000, 'rounded')
    		}
    	} else {
    		$('#contactModal').closeModal();
    		$('.lean-overlay').remove();
    		Materialize.toast('Please all of this information is needed for us to help you.', 6000, 'rounded')
    	}
    }

    $scope.clearForm = function(){
    	$scope.firstName = "";
    	$scope.lastName = ""; 
    	$scope.email = ""; 
    	$scope.subject = "";
    	$scope.email = "";
    	$scope.description = "";
    }
  }]);
