'use strict';

app.controller('resultCtrl', function ($scope,
                                       $rootScope, $document,  $window,
                                       $state,
                                       localStorageService,
                                       sessionStorageService,
                                       favouritesService,
                                       $stateParams) {

  //  $scope.results = [];

    var key = "#09results"; // the name of our sessionStorage

    var request={};
    var response={};
    $scope.locationFromUser = $stateParams.item;
    $scope.pageCounter = 1;



    load($scope.pageCounter);
    function load (pages) {
        if ($scope.locationFromUser) {
            localStorageService.getList(pages, $scope.locationFromUser).then(function(res){
                request = res.data;
                response = request.response;
                // console.log(response);
                if (response.application_response_code === '200') {
                    $rootScope.functionGoToMainPage(response.application_response_text);
                }
                if (response.locations["0"]) {
                    $scope.locationSimilar = response.locations["0"].title;
                }
                $scope.results = response.listings;
                $scope.totalResults = response.total_results;
                $scope.shownResult = response.listings.length;
                localStorageService.update($scope.locationFromUser,
                                            $scope.locationSimilar,
                                            $scope.totalResults);

                sessionStorageService.update($scope.results, key);
                console.log($scope.results);

                // button 'load more'
                if (($scope.totalResults - $scope.shownResult) < 20) {
                    $scope.restResults = false;
                } else {
                    $scope.restResults = true;
                }

            });
        }

    }


    $scope.functionAddResultsToPage = functionAddResultsToPage;
    function functionAddResultsToPage() {
        $scope.pageCounter++;
        localStorageService.getList($scope.pageCounter, $scope.locationFromUser).then(function(res){
            request = res.data;
            response = request.response;
            // if (response.locations["0"]) {
            //     $scope.locationSimilar = response.locations["0"].title;
            // }
            $scope.results = $scope.results.concat(response.listings);
            $scope.shownResult += response.listings.length;
            if (($scope.totalResults - $scope.shownResult) < 20) {
                $scope.restResults = false;
            }
        });
    }



    if ($scope.results === null) {
        $scope.results = sessionStorageService.get(key);
    };

    if ($scope.results === null && sessionStorageService.get(key) === null) {
        $state.go('main');
    };
    console.log($scope.results);

});