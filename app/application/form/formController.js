/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module('form.controller', [])
            .controller('formController',
                    function ($tag, $scope, $element) {
                        var type = $element.attr("app-form");
                        
                        console.log($tag.get_information(type), type);

                        $.extend(this,
                                {listIcon: $scope.listIcon},
                                $tag.get_information(type));

                    });
})();