'use strict';

var app = angular.module('app',[
    'ui.router'
]);

app.config(function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
});

angular.module('ngmkdev', ['restangular', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('transactions', {
                url: "/",
                templateUrl: "app/main/transactions.html"
            });
        $urlRouterProvider.otherwise('/');
    });

