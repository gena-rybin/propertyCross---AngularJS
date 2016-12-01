'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("result",{
            url: "/results",
            controller: "resultCtrl",
            templateUrl: "app/controllers/result/result.html",
            params: {item:  null}
        })
});
