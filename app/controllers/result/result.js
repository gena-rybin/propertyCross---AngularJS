'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("result",{
            url: "/",
            controller: "resultCtrl",
            templateUrl: "app/controllers/result/result.html"
        })
});
