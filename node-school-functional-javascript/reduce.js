"use strict";

var countWords = function (inputWords) {
    return inputWords.reduce((prev, curr) => {
        prev[curr] = ++prev[curr] || 1; // incrementa ou inicializa com 1
        return prev;
    }, {}); //inicializa a redução com um objeto vazio
};

module.exports = countWords;