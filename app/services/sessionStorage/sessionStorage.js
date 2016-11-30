'use strict';

app.service('sessionStorageService', function($q, $http) {

    var data;
    return {

        update: function(result, key) {
            data = result;
            sessionStorage.setItem(key, angular.toJson(data)); //JSON.stringify
        },
        get: function (key) {
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