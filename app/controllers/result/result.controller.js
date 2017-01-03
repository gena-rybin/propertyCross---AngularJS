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
    $scope.pageCounter = 1;

    if($stateParams.item){
        $scope.locationFromUser = $stateParams.item;
        sessionStorageService.update($stateParams.item, key);
        load($scope.pageCounter);

    } else if (sessionStorageService.get(key) !== null){
        $scope.locationFromUser = sessionStorageService.get(key);
        load($scope.pageCounter);

    } else  {
        console.log(77);
        $state.go('main');

    }



    function load (pages) {
        var latitudeSearch;
        var longitudeSearch;
        if ($scope.locationFromUser) {
            localStorageService.getList(pages, $scope.locationFromUser)
                .then(function(res){
                    request = res.data;
                    response = request.response;
                    if (response.application_response_code === '200') {
                        $rootScope.functionGoToMainPage(response.application_response_text);
                    }
                    if (response.locations["0"]) {
                        $scope.locationSimilar = response.locations["0"].title;
                    }
                    $scope.results = response.listings;
                    $scope.totalResults = response.total_results;
                    $scope.shownResult = response.listings.length;
                    latitudeSearch =  response.locations["0"].center_lat;
                    longitudeSearch = response.locations["0"].center_long;
                    localStorageService.update($scope.locationFromUser,
                                                $scope.locationSimilar,
                                                $scope.totalResults,
                                                latitudeSearch,
                                                longitudeSearch);

                    // button 'load more'
                    if (($scope.totalResults - $scope.shownResult) < 20) {
                        $scope.restResults = false;
                    } else {
                        $scope.restResults = true;
                    }

                }).catch(function(error) {
                    console.log(error);
                    alert("Sorry, but site doesn't work! It's not your faut)");
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

    $scope.functionShowFullData = function functionShowFullData(result) {
        $state.go('fullData', {item: result});
    }

});