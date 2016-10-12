"use strict";

var app = angular.module('todo-app', [
    'ngRoute', 'ngSanitize'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'listCtrl',
            templateUrl: 'templates/list.html'
        })
        .when('/:id', {
            controller: 'itemCtrl',
            templateUrl: 'templates/item.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
