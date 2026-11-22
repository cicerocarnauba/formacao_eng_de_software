// Array inicial de exemplo
const numbers = [4, 5, 6, 7];

// Encadeando map, filter e reduce com arrow functions
const somaDosPares = numbers
  // O map() pode ser usado para transformar ou preparar o dado (ex: converter string para número)
  // Aqui usamos apenas retornando o valor para demonstrar a presença dele na cadeia
  .map(num => num)
  // O filter() seleciona apenas os números cujo resto da divisão por 2 é zero (pares)
  .filter(num => num % 2 === 0)
  // O reduce() soma os valores filtrados. 'acc' é o acumulador e 'num' é o valor atual
  .reduce((acc, num) => acc + num, 0);

console.log(`A soma dos números pares é: ${somaDosPares}`); // Retorna 20 (2 + 4 + 6 + 8)