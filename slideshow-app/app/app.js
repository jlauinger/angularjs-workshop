"use strict";

var app = angular.module('slideshow-app', [
    'ngRoute', 'ngSanitize'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'overviewCtrl',
            templateUrl: 'templates/overview.html'
        })
        .when('/:id', {
            controller: 'slideCtrl',
            templateUrl: 'templates/slide.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
