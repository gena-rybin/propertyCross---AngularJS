'use strict';

app.config(function($stateProvider) {
    $stateProvider
        .state("fullData",{
            url: "/fullInfo",
            controller: "fullDataCtrl",
            templateUrl: "app/controllers/fullData/fullData.html",
            params: {item: null}
        })
});
