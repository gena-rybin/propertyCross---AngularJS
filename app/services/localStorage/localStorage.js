'use strict';

app.service('localStorageService', function($q, $http) {

    var key = "#09searches"; // the name of our localStorage
    var data;
    return {
        write: function(value) {
            localStorage.setItem(key, angular.toJson(value)); //JSON.stringify
        },
        update: function(userInput, town, results) {
            var obj = this.getHistory();
            if(obj){
                data = obj;
                //deferred.resolve(obj);
            } else {
                data = [];
            }
            data.forEach(function(item, i) {
                if(item.userInput === userInput && item.town === town){
                    data.splice(i, 1);
                }
            });
            data.unshift({});
            data[0].userInput = userInput;
            data[0].town = town;
            data[0].results = results;
            if (data.length > 5) {
                data.length = 5;
            }




            this.write(data);
        },
        getHistory: function () {
            return JSON.parse(localStorage.getItem(key));
        },
        getList: function(page, location) {
            var link = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=';
            var deferred = $q.defer();
                $http({
                    method: 'GET',
                    //url: link+page+'&place_name='+location
                    url: link+page+'&place_name='+location
                }).then(function (response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    deferred.resolve(response);
                }).catch(function (response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    deferred.reject(response)
                });
            return deferred.promise;
        },
        clear: function() {
            delete localStorage[key];
            //location.reload();
            //return false;
        }
    }
});