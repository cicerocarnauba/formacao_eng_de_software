function calcularIMC(peso, altura){
    imc = peso/(altura*altura)

    if (imc < 18.5){
        return imc, "Abaixo do peso"
    }else if (imc < 25){
        return imc, "Peso normal"
    }else {
        return imc, "Sobrepeso"
    }
}

console.log(calcularIMC(70, 1.75))

