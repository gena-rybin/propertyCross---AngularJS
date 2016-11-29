'use strict';

app.service('favouritesService', function($q, $http) {

    var key = "#09faves"; // the name of our localStorage
    var data;
    return {
        write: function(value) {
            localStorage.setItem(key, angular.toJson(value)); //JSON.stringify
        },
        update: function(result) {
            var obj = JSON.parse(localStorage.getItem(key));
            if(obj){
                data = obj;
                //deferred.resolve(obj);
            } else {
                data = [];
            }
            data.push(result);
            this.write(data);
            console.log('added');
        },
        remove: function(result) {
            data = this.get();
            data.forEach(function(item, i) {
                if(item.img_url === result.img_url){
                    data.splice(i, 1);
                }
            });
            this.write(data);
            console.log('removed');
        },
        exist: function(result) {
            data = this.get();
            if (data.length === null) return false;
            return data.some(function(item) {
                return item.img_url === result.img_url;
            });
        },
        get: function () {
            var obj = JSON.parse(localStorage.getItem(key));
            if(obj){
                data = obj;
            } else {
                data = [];
            }
            return data;
        },
        clear: function() {
            delete localStorage[key];
            //location.reload();
            //return false;
        }
    }
})

