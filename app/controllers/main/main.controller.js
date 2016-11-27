'use strict';

app.controller('mainCtrl', function ($scope,
                                     $rootScope,
                                        $state,
                                        localStorageService) {

    $scope.clearLS = localStorageService.clear;
    $scope.history = localStorageService.getHistory();

    $scope.functionSearch = functionSearch;
    function functionSearch () {
        console.log($scope.inpName);

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
