"use strict";

var app = angular.module('slideshow-app', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/:id', {
            controller: 'slideCtrl',
            templateUrl: 'templates/slide.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
