'use strict';

var eventApp = angular.module('eventApp', ['ngRoute', 'ngFileSaver'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    
        $locationProvider.html5Mode(true);

        $routeProvider.when('/newEvent/:eventId',
        {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        });
        
        $routeProvider.when('/testScoping',
        {
            templateUrl: 'templates/ScopedTemplate.html',
            controller: 'ScopedController'
        });
        
        $routeProvider.otherwise({
            redirect: '/index.html'
        });
    }]);