"use strict";

var app = angular.module('todo-app');

app.directive('inlineItem', ['itemsService', function(itemsService) {

    function controller(scope, element, attrs) {
        scope.removeItem = function (id) {
            console.log(id);
            itemsService.removeItem(id);
        };
    }

    return {
        scope: {
            item: "="
        },
        link: controller,
        templateUrl: "templates/inline-item.html"
    };

}]);