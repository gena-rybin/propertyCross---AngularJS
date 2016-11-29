'use strict';

app.controller('fullDataCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         localStorageService,
                                         favouritesService,
                                         $stateParams) {

    $scope.result = $stateParams.item;
   // console.log($scope.item.lister_url);

    $scope.favourite = true;

    localStorageService.getList().then(function(res){
      //  $scope.detail = res.request.response;
        // $scope.totalResults = response.total_results;
        // $scope.shownResult = response.listings.length;
        //console.log($scope.detail);
    });


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
