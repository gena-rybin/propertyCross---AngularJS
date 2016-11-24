'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("main",{
            url: "/",
            controller: "phoneBookCtrl",
            templateUrl: "app/controllers/main/main.html"
        })
});
