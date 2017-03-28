"use strict";

var doubleAll = function (numbers) {
    return Array.prototype.map.call(numbers, (x) => x * 2);
};

module.exports = doubleAll;