var Spy = function (target, method) {
    var funcaoOriginal = target[method];

    var resultado = {
        count: 0
    }

    target[method] = function () {
        resultado.count++;
        return funcaoOriginal.apply(this, arguments)
    }

    return resultado;
};

module.exports = Spy;