"use strict";

var app = angular.module('todo-app');

app.factory('itemsService', ['$http', '$q', function($http, $q) {

    var items = [], loaded = false;

    function loadItems() {
        var promise = $http.get('data/items.json');
        promise.then(function success(res) {
            items = res.data;
            loaded = true;
        }, function error(res) {
            console.log("Error loading items. Server said:"); console.log(res);
        });
        return promise;
    }

    function getItems() {
        return $q(function (resolve, reject) {
            if (loaded) {
                resolve(items);
            } else {
                loadItems().then(function success() {
                    resolve(items);
                }, function error() {
                    console.log("Unable to load items.");
                });
            }
        });
    }

    function getItem(id) {
        return $q(function (resolve, reject) {
            getItems().then(function(items) {
                resolve(items[id]);
            });
        });
    }

    return {
        getItem: getItem,
        getItems: getItems
    };

}]);