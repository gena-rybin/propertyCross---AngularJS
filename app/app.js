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

app.directive('mainNavBar', function () {
        return {
            replace: true,
            template: '<nav class="navbar navbar-default navbar-fixed-bottom"><div class="container"><button ng-click="functionGoToMainPage()" class="btn btn-info">main page</button><button ng-click="functionGoToResultPage()" class="btn btn-success">results page</button><button ng-click="functionGoToFavesPage()" class="btn btn-warning">faves page</button></div></nav>'
        }

});