/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    angular.module('tag.service', ['ngRoute'])
            .service('$tag', ["$http", "$rootScope", "$filter", function ($http, $rootScope, $filter) {
                    var get_information = function (type) {
                        var info = {};
                        switch (type) {
                            case 'data':
                                info["user_name"] = "Angela María Bohorquez Beltran";
                                info["user_email"] = "correo@ejemplo.com";
                                break;
                        }
                        
                        return info;
                    };

                    return {
                        get_needed_data: function () {
                            return ["data", "payment-method", "send-data"];
                        },
                        get_information: function (type) {
                            return get_information(type);
                        }
                    };
                }]);
})();