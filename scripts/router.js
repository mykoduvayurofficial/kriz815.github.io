/**
 * Created by krishna on 10/23/2016.
 */

var DevRoute = angular.module('DevRoute',['ui.bootstrap','ngCookies','ngRoute','ngDialog','commonfunction',"chart.js"]);
DevRoute.config(function($provide,$locationProvider,$routeProvider,$logProvider,ChartJsProvider) {
    $provide.decorator("$route", routeDecorator);

    function routeDecorator ( $delegate ) {

        var $route = $delegate;
        $route.remove = function( path ) {
            path = path.replace(/\/$/i, "");
            delete ( this.routes[ path ]);
            delete ( this.routes[ path + "/" ]);
            return ( this );
        };

        $route.removeAll = function() {
            for (var path in this.routes) {
                this.remove(path);
            }
            return( this );
        };

        // This Provides a Short-Hand to removing the Current Route
        // Without having to access the current route in the calling context.
        $route.removeCurrent = function() {
            return( this.remove( this.current.originalPath ));
        };

        // I Allow the Routes to be defined after the application has been Bootstrapped.
        // These go into a shared "routes" collection.
        $route.when = function( path,route ) {
            $routeProvider.when ( path, route );
            return( this );
        };
        $route.otherwise = function( route ) {
            $routeProvider.otherwise( route );
            return( this );
        };
        // return the decorated service.
        // alert(JSON.stringify($route);

        return( $route );
    }

    $locationProvider.html5Mode('true');

    $logProvider.debugEnabled(true); // Directive Error

});

DevRoute.run(function($route,$rootscope,$location,$http,$cookies,base64,logger,appvariables,filterfunction,utilities) {

    $rootScope.title = 'desired title';

    var nowDate =  new Date();
    $rootScope.currentDate = utilities.date2Format(nowDate, 'yyyy-mm-dd');

    $rootScope.loadMenu = function() {

        $route.when('/', {
            templateUrl: 'desired html file path',
            controller: 'corresponding controller path'
        }).when('/another_link', {
            templateUrl: 'desired html file path',
            controller: 'corresponding controller path'
        });

        $route.reload();

    };

    $rootScope.loadMenu();
})