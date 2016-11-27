'use strict';

app.controller('resultCtrl', function ($scope,
                                       $rootScope,
                                       $state,
                                       localStorageService,
                                       $stateParams) {


    var request={};
    var response={};
    var inp = $scope.inpName;
    $scope.locationFromUser = $stateParams.item;
    $scope.pageCounter = 1;

    //console.log(localStorageService.getList(2, "London"));
    if ($scope.locationFromUser) {
        localStorageService.getList($scope.pageCounter, $scope.locationFromUser).then(function(res){
            request = res.data;
            response = request.response;
            $scope.locationSimilar = response.locations["0"].title;
            $scope.results = response.listings;
            $scope.totalResults = response.total_results;
            $scope.shownResult = response.listings.length;

            console.log(response);
            //console.log($scope.detail);
            localStorageService.update($scope.locationFromUser, $scope.totalResults);
        });

    }



});