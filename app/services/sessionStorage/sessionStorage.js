'use strict';

app.service('sessionStorageService', function($q, $http) {

    var key = "#09fullData"; // the name of our localStorage
    var data;
    return {
        update: function(result) {
            data = result;
            sessionStorage.setItem(key, angular.toJson(data)); //JSON.stringify
        },
        get: function () {
            data = JSON.parse(sessionStorage.getItem(key));
            return data;
        },
        clear: function() {
            delete sessionStorage[key];
            //location.reload();
            //return false;
        }
    }
});