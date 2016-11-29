'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("result",{
            url: "/search-result",
            controller: "resultCtrl",
            templateUrl: "app/controllers/result/result.html",
            params: {item:  null}
        })
});
