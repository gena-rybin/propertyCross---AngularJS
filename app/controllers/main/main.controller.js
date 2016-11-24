'use strict';

app.controller('phoneBookCtrl', function ($scope,
                                          $state) {


    $scope.functionGoToResultPage = functionGoToResultPage;

    function functionGoToResultPage () {

        $state.go('result');
    }


});
