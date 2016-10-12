"use strict";

var app = angular.module('todo-app');

app.controller('listCtrl', ['$scope', 'itemsService', function($scope, itemsService) {

    $scope.newSubject = "";

    itemsService.getItems().then(function(items) {
        $scope.items = items;
    });

    $scope.addItem = function() {
        if ($scope.newSubject === "") return;
        itemsService.addItem({
            id: itemsService.generateId(),
            done: false,
            subject: $scope.newSubject,
            details: ""
        });
        $scope.newSubject = "";
    };

}]);