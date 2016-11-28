'use strict';

app.controller('fullDataCtrl', function ($scope,
                                         $rootScope,
                                         $state,
                                         localStorageService,
                                         $stateParams) {

    $scope.item = $stateParams.item;
   // console.log($scope.item.lister_url);

    $scope.favourite = true;

    localStorageService.getList().then(function(res){
      //  $scope.detail = res.request.response;
        // $scope.totalResults = response.total_results;
        // $scope.shownResult = response.listings.length;
        //console.log($scope.detail);
    });



});
