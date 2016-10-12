"use strict";

var app = angular.module('todo-app');

app.filter('formatted', function() {

    var filters = [
        {regex: "\\/(.*)\\/", replace: "<i>$1</i>"},
        {regex: "\\*(.*)\\*", replace: "<b>$1</b>"}
    ];

    return function (input) {
        input = input || "";
        for(var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            input = input.replace(new RegExp(filter.regex, "g"), filter.replace);
        }
        return input;
    };
});
