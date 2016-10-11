"use strict";

var app = angular.module('slideshow-app');

app.controller('overviewCtrl', ['$scope', 'slidesService', function($scope, slidesService) {

    slidesService.getSlides().then(function(slides) {
        $scope.slides = slides;
    });

}]);