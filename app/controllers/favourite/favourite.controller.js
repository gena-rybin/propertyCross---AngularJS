'use strict';

app.controller('favouriteCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         favouritesService,
                                         $stateParams) {

    $scope.results = favouritesService.get();


});
