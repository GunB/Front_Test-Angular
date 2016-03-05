'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    //Extra features
    'ngAnimate', 
    'mgcrea.ngStrap',
    'ngRoute',
    //myApp
    'paywizard.route',
    'paywizard.controller'
    
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/paymentw'});
            }]);
