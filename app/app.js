'use strict';

var app = angular.module('app',[
    'ui.router'
]);

app.config(function ($urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
});
