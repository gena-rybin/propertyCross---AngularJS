
app.directive('mainNavBar', function () {
    return {
        replace: true,
        template: '<nav class="navbar navbar-default navbar-fixed-bottom"><div class="container"><button ui-sref="main" class="btn btn-info">main page</button>  <button ui-sref="result" class="btn btn-success">results page</button>  <button ui-sref="favourite" class="btn btn-warning">faves page</button></div></nav>',
        controller: function () {


        },
      //  controllerAs: 'nb',

    }

});