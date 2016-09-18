'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', ['ngAnimate','ngAria','ngSanitize','ui.router', 'ngMap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html',
        //controller: 'AboutCtrl'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome.html',
        controller: 'welcomeCtrl'
      })

      .state('contact', {
        url: '/contactUs',
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        // controller: 'aboutCtrl'
      })

      .state('partners', {
        url: '/partners',
        templateUrl: 'views/partners.html'
      })

      $urlRouterProvider.otherwise('/welcome');
  });
