/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {

    angular.module('paywizard.directive', ['ngRoute'])
            .directive("myAppPayment", function () {
                return{
                    controller: "paywizardController",
                    controllerAs: "paywizardCtrl",
                    restrict: "A"
                };
            });
})();