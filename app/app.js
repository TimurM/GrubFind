(function() {

    var app = angular.module('grubFind', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'StoresController',
                templateUrl: 'app/views/stores.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
