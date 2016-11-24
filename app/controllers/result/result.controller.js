'use strict';

app.controller('resultCtrl', function ($scope,
                                       $state,
                                       localStorageService) {

    var request={};
    var response={};

    localStorageService.getList().then(function(res){
        request = res;
        response = request.response;
        $scope.results = response.listings;
        $scope.totalResults = response.total_results;
        $scope.shownResult = response.listings.length;
        console.log(request);
        console.log($scope.results);
    });


    $scope.functionGoToMainPage = functionGoToMainPage;
    function functionGoToMainPage () {
        $state.go('main');
    }

});
