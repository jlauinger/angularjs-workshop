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
                    console.log("Unable to load sitems.");
                });
            }
        });
    }

    function getItem(id) {
        return $q(function (resolve, reject) {
            getItems().then(function(items) {
                resolve(items.find(function(item) { return item.id === id; }));
            });
        });
    }

    function addItem(item) {
        items.push(item);
    }

    function removeItem(id) {
        var index = items.map(function(item) { return item.id }).indexOf(id);
        items.splice(index, 1);
    }

    function generateId() {
        if (items.length === 0) return 1;
        var ids = items.map(function(item) { return item.id });
        return Math.max.apply(null, ids) + 1;
    }

    return {
        getItem: getItem,
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        generateId: generateId
    };

}]);