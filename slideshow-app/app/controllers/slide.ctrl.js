"use strict";

var app = angular.module('slideshow-app');

app.controller('slideCtrl', ['$scope', '$routeParams', 'slidesService', function($scope, $routeParams, slidesService) {

    slidesService.getSlide($routeParams.id).then(function(slide) {
        $scope.slide = slide;
    });

}]);