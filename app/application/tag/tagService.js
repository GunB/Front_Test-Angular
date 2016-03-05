/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('tag.service', ['ngRoute'])
            .service('$tag', ["$http", "$rootScope", "$filter", function ($http, $rootScope, $filter) {
                    return {
                        get_needed_data : function(){
                            return ["data", "payment-method", "send-data"];
                        }
                    };
                }]);
})();