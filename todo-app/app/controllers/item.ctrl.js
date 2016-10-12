"use strict";

var app = angular.module('todo-app');

app.controller('itemCtrl', ['$scope', '$routeParams', 'itemsService', function($scope, $routeParams, itemsService) {

    itemsService.getItem($routeParams.id).then(function(item) {
        $scope.item = item;
    });

}]);