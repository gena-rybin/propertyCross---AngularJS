'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("favourite",{
            url: "/favourite",
            controller: "favouriteCtrl",
            templateUrl: "app/controllers/favourite/favourite.html"
        })
});
