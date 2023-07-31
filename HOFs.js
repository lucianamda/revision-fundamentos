// Use a função map() para transformar um array de números em um array de seus quadrados - const numeros = [1, 2, 3, 4, 5];

const numeros = [1, 2, 3, 4, 5];
const quadrado = numeros.map((numero) => numero ** 2);
console.log(quadrado);

// Use a função reduce() para calcular a soma de todos os números em um array - const numeros = [1, 2, 3, 4, 5];

const numeros2 = [1, 2, 3, 4, 5];
const soma = numeros2.reduce((acumulador, numero) => acumulador + numero);
console.log(soma);

// Use a função filter() para filtrar apenas os números pares de um array - const numeros = [1, 2, 3, 4, 5];

const numeros3 = [1, 2, 3, 4, 5];
const pares = numeros3.filter((numero) => numero % 2 === 0);
console.log(pares);


// Use a função map() e filter() para transformar um array de números em um array de seus quadrados, filtrando apenas os números pares - const numeros = [1, 2, 3, 4, 5];

const numeros4 = [1, 2, 3, 4, 5];
const quadradospares = numeros4.map((numero) => numero ** 2).filter((num) => num % 2 === 0);
console.log(quadradospares);

// Use a função reduce() e filter() para calcular a média dos números pares em um array - const numeros = [1, 2, 3, 4, 5];

const numeros5 = [1, 2, 3, 4, 5];
const numeros5Pares = numeros5.filter((num) => num % 2 === 0);
const mediaPares = numeros5Pares.reduce((acumulador, numero) => acumulador + numero) / numeros5Pares.length;
console.log(mediaPares);

// Use a função map() para transformar um array de strings em um array de seus comprimentos - const palavras = ["olá", "mundo", "!"];

const palavras = ["olá", "mundo", "!"];
const comprimentos = palavras.map((palavra) => palavra.length);
console.log(comprimentos);


// Use a função map() para transformar um array de objetos em um array de suas propriedades - const pessoas = [ { nome: "João", idade: 25 }, { nome: "Maria", idade: 17 }, { nome: "Pedro", idade: 30 }];

const pessoas = [ 
  { nome: "João", idade: 25 }, 
  { nome: "Maria", idade: 17 }, 
  { nome: "Pedro", idade: 30 }
];
const nomePessoas = pessoas.map((pessoa) => pessoa.nome);
const idadePessoas = pessoas.map((pessoa) => pessoa.idade);
console.log(nomePessoas, idadePessoas);

// Use a função map() para transformar um array de objetos em um array de strings formatadas - const pessoas = [ { nome: "João", idade: 25 }, { nome: "Maria", idade: 17 }, { nome: "Pedro", idade: 30 }];

const pessoas2 = [ 
  { nome: "João", idade: 25 }, 
  { nome: "Maria", idade: 17 }, 
  { nome: "Pedro", idade: 30 }
];
const pessoasFormatadas = pessoas2.map((pessoa) => `${pessoa.nome} tem ${pessoa.idade} anos.`);
console.log(pessoasFormatadas);

// Use a função map() para transformar um array de objetos em um array de objetos com novas propriedades - const pessoas = [ { nome: "João", idade: 25 }, { nome: "Maria", idade: 17 }, { nome: "Pedro", idade: 30 }];

const pessoas3 = [ 
  { nome: "João", idade: 25 }, 
  { nome: "Maria", idade: 17 }, 
  { nome: "Pedro", idade: 30 }
];
const novasPropriedades = pessoas3.map((pessoa) => ({ nomeCompleto:`${pessoa.nome} Silva`, idade: pessoa.idade }));
console.log(novasPropriedades);

// Use a função filter() para filtrar apenas pessoas com mais de 18 anos de um array de objetos - const people = [ { name: "John", age: 25 }, { name: "Mary", age: 17 }, { name: "Peter", age: 30 }];

const people = [ 
  { name: "John", age: 25 }, 
  { name: "Mary", age: 17 }, 
  { name: "Peter", age: 30 }
];
const maiores18Anos = people.filter(person => person.age >= 18);
console.log(maiores18Anos);

// Use a função filter() para filtrar apenas strings com mais ou igual 5 caracteres de um array de strings - const words = ["hello", "world", "this", "is", "a", "test"];

const words = ["hello", "world", "this", "is", "a", "test"];
const above5characteres = words.filter(word => word.length >= 5);
console.log(above5characteres);

// Use a função filter() para filtrar apenas produtos com preço maior que $1.0 de um array de objetos. const products = [{ name: "apple", price: 0.99 }, { name: "orange", price: 1.49 }, { name: "banana", price: 0.49 }, { name: "pear", price: 1.99 }];

const products = [
  { name: "apple", price: 0.99 }, 
  { name: "orange", price: 1.49 }, 
  { name: "banana", price: 0.49 }, 
  { name: "pear", price: 1.99 }
];
const above$1 = products.filter((product) => product.price >= 1.0);
console.log(above$1);

// Use a função filter() para filtrar apenas elementos únicos de um array - const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5];

const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 5];
const distinctNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index);
console.log(distinctNumbers);

// Use a função reduce() para calcular o produto de todos os números em um array - - const numbers = [1, 2, 3, 4, 5];

const numbers2 = [1, 2, 3, 4, 5];
const mult = numbers2.reduce((acumulador, number) => acumulador * number);
console.log(mult);

// Use a função reduce() para encontrar o número máximo em um array - const numbers = [1, 7, 3, 9, 5];

const numbers3 = [1, 7, 3, 9, 5];
const higherNumber = numbers3.reduce((acumulador, number) => acumulador < number ? number : acumulador, numbers3[0]);
console.log(higherNumber);

// Use a função reduce() para agrupar um array de objetos por um valor de propriedade - const people = [{ name: "John", age: 25, country: "USA" },{ name: "Mary", age: 17, country: "Canada" },{ name: "Peter", age: 30, country: "USA" }, { name: "Anna", age: 22, country: "Canada" }];

const people2 = [
  { name: "John", age: 25, country: "USA" },
  { name: "Mary", age: 17, country: "Canada" },
  { name: "Peter", age: 30, country: "USA" }, 
  { name: "Anna", age: 22, country: "Canada" }
];
const groupedByCountry = people2.reduce((accumulator, person) => {
  if (!accumulator[person.country]) {
  accumulator[person.country] = [];
}
  accumulator[person.country].push(person);
  return accumulator
}, {});
console.log(groupedByCountry);

// Use a função every() para verificar se todos os números em um array são pares - const numerosPares = [2, 4, 6, 8]; const numerosImpares = [1, 3, 5, 7];

const numerosPares = [2, 4, 6, 8]; 
const todosSaoPares = numerosPares.every((number) => number % 2 === 0);
const numerosImpares = [1, 3, 5, 7];
const todosSaoImpares = numerosImpares.every((number) => number % 2 === 0);
console.log(todosSaoPares);
console.log(todosSaoImpares);

// Use a função every() para verificar se todos os elementos de um array são strings - Use a função every() para verificar se todos os elementos de um array são strings - const palavras = ["olá", "mundo", "!"]; const numeros = [1, 2, 3];

const palavras2 = ["olá", "mundo", "!"];
const saoPalavras = palavras2.every((palavra) => typeof palavra === "string");
const numeros6 = [1, 2, 3];
const saoNumeros = numeros6.every((numero) => typeof numero === "string");

console.log(saoPalavras);
console.log(saoNumeros);

// Use a função every() para verificar se todos os elementos de um array são verdadeiros - const valoresVerdadeiros = [true, "hello", 1];const valoresFalsos = [false, 0, ""]; const valoresMistos = [true, 0, ""];

const valoresVerdadeiros = [true, "hello", 1];
const saoVerdadeiros = valoresVerdadeiros.every((value) => value);
const valoresFalsos = [false, 0, ""];
const saoFalsos = valoresFalsos.every((value) => value);
const valoresMistos = [true, 0, ""];
const saoMistos = valoresMistos.every((value) => value);

console.log(saoVerdadeiros);
console.log(saoFalsos);
console.log(saoMistos);

