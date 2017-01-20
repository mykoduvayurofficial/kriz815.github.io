/**
 * Created by kriz on 1/18/2017.
 */
// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the geography page
        .when('/geography', {
            templateUrl : 'pages/geography.html',
            controller  : 'geographyController'
        })
        // route for the culture page
        .when('/culture', {
            templateUrl : 'pages/culture.html',
            controller  : 'cultureController'
        })
        // route for the trending page
        .when('/trending', {
            templateUrl : 'pages/trending.html',
            controller  : 'trendingController'
        })
        // route for the services page
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
        // route for the emergency page
        .when('/emergency', {
            templateUrl : 'pages/emergency.html',
            controller  : 'emergencyController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!'
});

mykdrApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mykdrApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

mykdrApp.controller('servicesController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mykdrApp.controller('emergencyController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mykdrApp.controller('geographyController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mykdrApp.controller('cultureController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

mykdrApp.controller('trendingController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});



