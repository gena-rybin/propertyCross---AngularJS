'use strict';

app.controller('mainCtrl', function ($scope,
                                     $rootScope,
                                        $state,
                                        localStorageService) {



    $rootScope.functionGoToMainPage = functionGoToMainPage;
    function functionGoToMainPage () {
        $state.go('main');
    }

    $rootScope.functionGoToResultPage = functionGoToResultPage;
    function functionGoToResultPage () {
        $state.go('result');
    }

    $rootScope.functionGoToFullDataPage = functionGoToFullDataPage;
    function functionGoToFullDataPage (result) {
        $state.go('fullData', {item: result});
    }


});
