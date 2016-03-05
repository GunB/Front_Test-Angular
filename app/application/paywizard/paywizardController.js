/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    angular.module('paywizard.controller', [])
            .controller('paywizardController',
                    function ($element, $tag, $boxFactory, $compile, $scope) {

                        var needed_data = [];

                        var get_forms = function () {
                            needed_data = $tag.get_needed_data();
                        };

                        var generate_form = function () {
                            get_forms();

                            $.each(needed_data, function (k, v) {

                                var objReder = {
                                    "list-icon": k + 1,
                                    class: "payment-form"
                                };
                                
                                objReder["my-app-form-" + v] = v;

                                var render = $("<section>", objReder);
                                $boxFactory.jQueryCompile(render, $element, $compile, $scope);
                            });
                        };

                        generate_form();
                    });
})();