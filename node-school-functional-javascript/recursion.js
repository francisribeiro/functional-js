"use strict";

var reduce = function (arr, fn, initial) {
    var tam = arr.length - 1;

    var recursao = function (i, anterior) {
        if (i > tam) return anterior;
        var atual = arr[i];
        var reducao = fn(anterior, atual, i, arr);
        return recursao(i + 1, reducao);
    };

    return recursao(0, initial);
};

module.exports = reduce;