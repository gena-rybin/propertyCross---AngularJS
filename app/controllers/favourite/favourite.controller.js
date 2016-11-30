'use strict';

app.controller('favouriteCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         favouritesService,
                                         $stateParams) {

    var key = "#09faves"; // the name of our sessionStorage

    $scope.results = favouritesService.get();

    $scope.functionClearFaves = functionClearFaves;
    function functionClearFaves() {
        favouritesService.clear();
        $scope.results = [];
    }


});
