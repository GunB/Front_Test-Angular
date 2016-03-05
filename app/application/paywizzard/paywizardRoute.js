(function () {

    angular.module('paywizard.route', ['ngRoute'])

            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.when('/paymentw', {
                        controller: 'paywizardController',
                        controllerAs: 'paywizardCtrl'
                    });
                }]);
})();