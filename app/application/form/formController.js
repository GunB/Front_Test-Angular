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
                        var that = this;

                        this.submitForm = {
                            submit: function (formName) {
                                /*if ($scope[formName].$invalid){
                                 return false;
                                 }*/
                                that.finish = $scope[formName].$valid;

                                angular.forEach($scope[formName].$error, function (error) {
                                    angular.forEach(error, function (field) {
                                        field.$setTouched();
                                    });
                                });
                                $scope[formName].$setSubmitted();
                            }
                        };

                        this.mutate = function () {
                            that.finish = false;
                        };

                        $.extend(this,
                                {listIcon: $scope.listIcon},
                                $tag.get_information(type));

                    });
})();