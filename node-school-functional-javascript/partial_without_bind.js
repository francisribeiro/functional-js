"use strict";

var slice = Array.prototype.slice;

var logger = function (namespace) {
    return function () {
        console.log.apply(console, [namespace].concat(slice.call(arguments, 0)));
    }
};

module.exports = logger;