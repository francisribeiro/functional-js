"use strict";

var getShortMessages = function (messages) {
    return Array.prototype.map.call(
        Array.prototype.filter.call(
            messages,
            (m) => m.message.length < 50),
        (m) => m.message
    );

    //Alternativa
    /* return messages.filter(function (m) {
        return m.message.length < 50;
    }).map((m) => m.message); */

};

module.exports = getShortMessages;