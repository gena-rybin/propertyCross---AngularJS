'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("main",{
            url: "/",
            controller: "mainCtrl",
            templateUrl: "app/controllers/main/main.html",
            params: {item: null}
        })
});
