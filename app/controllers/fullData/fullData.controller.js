'use strict';

app.controller('fullDataCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         localStorageService,
                                         sessionStorageService,
                                         favouritesService,
                                         $stateParams) {

    $scope.result = $stateParams.item;

    if ($scope.result === null) {
        $scope.result = sessionStorageService.get();

        console.log($scope.result);
    };
    $scope.favourite = true;

    sessionStorageService.update($scope.result);

    functionCheckInFaves($scope.result);

    $scope.functionCheckInFaves = functionCheckInFaves;
    function functionCheckInFaves(result) {
        if (favouritesService.exist(result)) {
            $scope.favesAction = '-';
            console.log("exist");
        } else {
            $scope.favesAction = '+';
            console.log("DOESN'T exist");
        }
    }


    $scope.functionMoveFaves = functionMoveFaves;
    function functionMoveFaves(result) {
        functionCheckInFaves($scope.result);
        if ($scope.favesAction === '+') {
            favouritesService.update(result);

        }
        if ($scope.favesAction === '-') {
            favouritesService.remove(result);

        }
        functionCheckInFaves($scope.result);
    }



});
