(function () {

    angular.module('paywizard.route', ['ngRoute'])

            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.when('/paymentw', {
                        templateUrl: 'application/paywizard/paywizard.html'
                    });
                }]);
})();