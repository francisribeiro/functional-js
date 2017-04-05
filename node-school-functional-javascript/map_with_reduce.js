"use strict";

var arrayMap = function (arr, fn) {
    return arr.reduce((prev, curr, index) => {
        prev[index] = fn(curr);
        return prev;
    }, []);
};

module.exports = arrayMap;