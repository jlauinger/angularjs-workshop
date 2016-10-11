"use strict";

var app = angular.module('slideshow-app');

app.controller('slideCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.id = $routeParams.id;

}]);