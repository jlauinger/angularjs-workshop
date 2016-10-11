"use strict";

app.factory('slidesService', ['$http', '$q', function($http, $q) {

    var slides = [], loaded = false;

    function loadSlides() {
        var promise = $http.get('data/slides.json');
        promise.then(function success(res) {
            slides = res.data;
            loaded = true;
        }, function error(res) {
            console.log("Error loading slides. Server said:"); console.log(res);
        });
        return promise;
    }

    function getSlides() {
        return $q(function (resolve, reject) {
            if (loaded) {
                resolve(slides);
            } else {
                loadSlides().then(function success() {
                    resolve(slides);
                }, function error() {
                    console.log("Unable to load slides.");
                });
            }
        });
    }

    function getSlide(id) {
        return $q(function (resolve, reject) {
            getSlides().then(function(slides) {
                resolve(slides[id]);
            });
        });
    }

    return {
        getSlide: getSlide,
        getSlides: getSlides
    };

}]);