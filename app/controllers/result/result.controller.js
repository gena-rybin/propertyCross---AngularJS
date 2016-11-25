'use strict';

app.controller('resultCtrl', function ($scope,
                                       $rootScope,
                                       $state,
                                       localStorageService) {

    var request={};
    var response={};

    console.log(localStorageService.getList(2, "London"));

    localStorageService.getList(2, "London").then(function(res){
         request = res.data;
         response = request.response;
        $scope.results = response.listings;
        $scope.totalResults = response.total_results;
        $scope.shownResult = response.listings.length;


        console.log(response);
        //console.log($scope.detail);
    });



});