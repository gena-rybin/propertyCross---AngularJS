'use strict';

app.controller('mainCtrl', function ($scope,
                                     $rootScope, $document,  $window,
                                     $state,
                                     localStorageService,
                                     favouritesService,
                                     $stateParams) {


    $scope.functionClearSearches = functionClearSearches;
    function functionClearSearches() {
        localStorageService.clear();
        $scope.history = [];
    }

    $scope.functionClearErr = functionClearErr;
    function functionClearErr() {
        $scope.errorMessage = '';
        $scope.inpName = '';
    }


    $scope.inp = $scope.inpName;
    $scope.history = localStorageService.getHistory();

    //$scope.errorMessage = $stateParams.item;

    $scope.functionNewSearch = functionNewSearch;
    function functionNewSearch (location) {
        $scope.inpName = location;
        $state.go('result', {item: $scope.inpName});
    }


    $scope.functionSearch = functionSearch;
    function functionSearch () {
        console.log($scope.inpName);
        //=================
        if ($scope.inpName) {
            localStorageService.getList(1, $scope.inpName).then(function(res){
                //localStorageService.update($scope.locationFromUser, $scope.totalResults);
                if (res.data.response.listings.length === 0) {
                    //$scope.inpName = res.data.response.application_response_text;
                    $scope.errorMessage = res.data.response.application_response_text;
                    return;
                    console.log('doesn"t have to see!');
                }

                $state.go('result', {item: $scope.inpName});
            });
        }

        //===================
    }

    // $rootScope.functionGoToMainPage = functionGoToMainPage;
    // function functionGoToMainPage (err) {
    //     $state.go('main', {item: err});
    // }

    // $rootScope.functionGoToResultPage = functionGoToResultPage;
    // function functionGoToResultPage () {
    //     $state.go('result', {item: $scope.inpName});
    // }
    //
    // $rootScope.functionGoToFullDataPage = functionGoToFullDataPage;
    // function functionGoToFullDataPage (result) {
    //     $state.go('fullData', {item: result});
    // }
    //
    $scope.functionGoToFavesPage = functionGoToFavesPage;
    function functionGoToFavesPage() {
        $state.go('favourite');
    }

});
