'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    //Extra features
    'ngAnimate', 
    'mgcrea.ngStrap',
    'ngRoute',
    //myApp
    'paywizard.route',
    'paywizard.directive',
    'paywizard.controller',
    
    'form.controller',
    'form.data.directive',
    'form.paymentMethod.directive',
    'form.sendData.directive',
    //App features
    'box.factory',
    'tag.service'
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/paymentw'});
            }]);
