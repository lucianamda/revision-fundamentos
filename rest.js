// Crie uma função que receba um número arbitrário de argumentos e retorne a soma desses argumentos.

function soma(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(soma(1, 4, 5));
console.log(soma(1, 4, 5, 10));

// Desestruture o seguinte array em duas variáveis separadas: uma contendo o primeiro elemento e outra contendo todos os demais elementos. const numeros = [1, 2, 3, 4, 5]

const arrayOfNumbers = [1, 2, 3, 4, 5];
const [first, ...rest] = arrayOfNumbers;
console.log(first);
console.log(...rest);

// Desestruture o seguinte objeto em duas variáveis separadas: uma contendo a propriedade "nome" e outra contendo todas as demais propriedades. const pessoa = nome: "João", idade: 25, cidade: "São Paulo", estado: "SP"}

const person = {nome: "João", idade: 25, cidade: "São Paulo", estado: "SP"};
const { nome, ...resto } = person;
console.log(nome);
console.log(resto);

// Crie uma função que receba um número arbitrário de argumentos e retorne um array contendo apenas os argumentos que são strings.

function filterString(...params) {
  return params.filter((param) => typeof param === 'string');
}
console.log(filterString(1, 'Baguera', 90, 33, 'Balu'));
console.log(filterString(6, 7, 'Naruto', 8, 'Sakura', 77, 'Sasuke'));

// Crie uma função que receba um objeto e retorne um novo objeto contendo apenas as propriedades que não são "senha".

function removePassword({senha, ...resto}) {
  return resto;
}
  const user = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    senha: "123456"
  };
  
  console.log(removePassword(user));
