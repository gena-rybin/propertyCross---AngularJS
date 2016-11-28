'use strict';

app.controller('resultCtrl', function ($scope,
                                       $rootScope, $document,  $window,
                                       $state,
                                       localStorageService,
                                       $stateParams) {

    $scope.results = [];
    var request={};
    var response={};
    var inp = $scope.inpName;
    $scope.locationFromUser = $stateParams.item;
    $scope.pageCounter = 1;

    load($scope.pageCounter);
    //console.log(localStorageService.getList(2, "London"));
    function load (pages) {
        if ($scope.locationFromUser) {
            localStorageService.getList(pages, $scope.locationFromUser).then(function(res){
                request = res.data;
                response = request.response;
                if (response.application_response_code === '200') {
                    // $document.find("#inpSearch").setAttribute('placeholder', 'this location doesnt exist!');
                    $rootScope.functionGoToMainPage();
                    // return;
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

                console.log(request);
                //console.log($scope.detail);
            });
        }

    }


    $scope.functionAddResultsToPage = functionAddResultsToPage;
    function functionAddResultsToPage() {
        $scope.pageCounter++;
        console.log($scope.pageCounter);
        //load($scope.pageCounter);

        localStorageService.getList($scope.pageCounter, $scope.locationFromUser).then(function(res){
            request = res.data;
            response = request.response;
            // if (response.locations["0"]) {
            //     $scope.locationSimilar = response.locations["0"].title;
            // }
            $scope.results = $scope.results.concat(response.listings);
            //$scope.totalResults = response.total_results;
            $scope.shownResult += response.listings.length;
            // localStorageService.update($scope.locationFromUser,
            //     $scope.locationSimilar,
            //     $scope.totalResults);
console.log(45);
            console.log(response);
            //console.log($scope.detail);
        });
    }




});