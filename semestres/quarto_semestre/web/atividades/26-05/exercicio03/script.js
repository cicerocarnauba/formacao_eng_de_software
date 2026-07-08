var display = document.getElementById("display")

function digitar(valor) {
    display.value += valor
}

function limpar() {
    display.value = ""
}

function apagar() {
    display.value = display.value.slice(0, -1)
}

function calcular() {
    var partes = display.value.match(/[+\-*/]|[0-9.]+/g)

    var resultado = parseFloat(partes[0])

    for (var i = 1; i < partes.length; i += 2) {
        var operador = partes[i]
        var numero = parseFloat(partes[i + 1])

        if (operador === "+") resultado = resultado + numero
        if (operador === "-") resultado = resultado - numero
        if (operador === "*") resultado = resultado * numero
        if (operador === "/") resultado = resultado / numero
    }

    display.value = resultado
}
