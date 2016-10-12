"use strict";

var app = angular.module('todo-app');

app.controller('listCtrl', ['$scope', 'itemsService', function($scope, itemsService) {

    itemsService.getItems().then(function(items) {
        $scope.items = items;
    });

}]);