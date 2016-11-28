'use strict';

app.controller('mainCtrl', function ($scope,
                                     $rootScope, $document,  $window,
                                        $state,
                                        localStorageService) {

    //$scope.data={visible : true};
    $scope.functionClearLS = functionClearLS;
    function functionClearLS() {
        localStorageService.clear();
    }

    $scope.history = localStorageService.getHistory();



    $scope.functionNewSearch = functionNewSearch;
    function functionNewSearch (location) {
        $scope.inpName = location;
        $rootScope.functionGoToResultPage();
    }


    $scope.functionSearch = functionSearch;
    function functionSearch () {
        console.log($scope.inpName);
        //=================
        if ($scope.inpName) {
            localStorageService.getList(1, $scope.inpName).then(function(res){
                //localStorageService.update($scope.locationFromUser, $scope.totalResults);
                if (res.data.response.application_response_code === '200') {
                    $scope.inpName = 'err';
                }
            });
        }

        //===================
        $rootScope.functionGoToResultPage();
    }

    $rootScope.functionGoToMainPage = functionGoToMainPage;
    function functionGoToMainPage () {
        $state.go('main');
    }

    $rootScope.functionGoToResultPage = functionGoToResultPage;
    function functionGoToResultPage () {
        $state.go('result', {item: $scope.inpName});
    }

    $rootScope.functionGoToFullDataPage = functionGoToFullDataPage;
    function functionGoToFullDataPage (result) {
        $state.go('fullData', {item: result});
    }


});
