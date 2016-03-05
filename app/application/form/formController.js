/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module('form.controller', [])
            .controller('formController',
                    function ($element, $tag, $boxFactory, $compile, $scope) {
                        this.listIcon = $scope.listIcon;
                        //$element.html(this.listIcon);
                    });
})();