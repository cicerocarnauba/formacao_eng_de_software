let num1 = 10;
let num2 = 5;
let op = "-";

switch (op){    
    case '+':
        console.log(`A soma de ${num1} e ${num2} é igual a ${num1+num2}`)
        break;
    case '-':
        console.log(`A subtracao de ${num1} e ${num2} é igual a ${num1-num2}`)
        break;
    
    case '*':
        console.log(`A multiplicacao de ${num1} e ${num2} é igual a ${num1*num2}`)
        break;
    
    case '/':
        console.log(`A divisão de ${num1} e ${num2} é igual a ${num1/num2}`)
        break;
    
    default:
        console.log("Operação inválida!")    
}
