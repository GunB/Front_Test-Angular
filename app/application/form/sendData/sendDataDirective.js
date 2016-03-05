/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {

    angular.module('form.sendData.directive', ['ngRoute'])
            .directive("myAppFormSendData", function () {
                return{
                    templateUrl: 'application/form/paymentMethod/paymentMethod.html',
                    controller: "formController",
                    controllerAs: "formCtrl",
                    restrict: "A",
                    scope: {
                        'listIcon': '='
                    }
                };
            });
})();