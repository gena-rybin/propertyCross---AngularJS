'use strict';

app.controller('fullDataCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         localStorageService,
                                         sessionStorageService,
                                         favouritesService,
                                         $stateParams) {

    var key = "#09fullInfo"; // the name of our sessionStorage
    var arr = [];
    $scope.result = $stateParams.item;


    if ($scope.result === null && sessionStorageService.get(key) === null) {
        $state.go('main');
    };

    if ($scope.result === null) {
        $scope.result = sessionStorageService.get(key)[0];
    };


    arr.push($scope.result);
    sessionStorageService.update(arr, key);


    $scope.favourite = true;


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
