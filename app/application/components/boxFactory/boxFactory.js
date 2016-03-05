/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module("box.factory", [])
            .factory("$boxFactory", function ($log) {
                var compile = function (render, jQueryContainer, $compile, $scope) {
                    var compiledeHTML = $compile(render)($scope);
                    //$("#content_container")
                    jQueryContainer.append(compiledeHTML);
                };

                return {
                    jQueryCompile: function (render, jQueryContainer, $compile, $scope) {
                        compile(render, jQueryContainer, $compile, $scope);
                    }
                };
            });
})();