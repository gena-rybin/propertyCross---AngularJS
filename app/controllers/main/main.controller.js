'use strict';

app.controller('phoneBookCtrl', function ($scope,
                                          $state,
                                          localStorageService) {



    $scope.functionGoToResultPage = functionGoToResultPage;
    function functionGoToResultPage () {
        $state.go('result');
    }


});
