"use strict";

var app = angular.module('todo-app');

app.controller('itemCtrl', ['$scope', '$routeParams', '$location', 'itemsService', function($scope, $routeParams, $location, itemsService) {

    $scope.editing = false;

    itemsService.getItem(+$routeParams.id).then(function(item) {
        $scope.item = item;
    });

    $scope.startEdit = function() {
        $scope.editing = true;
    };

    $scope.finishEdit = function() {
        $scope.editing = false;
    };

    $scope.removeItem = function() {
        itemsService.removeItem($scope.item.id);
        $location.path('/');
    };

}]);