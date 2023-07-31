// Crie uma função que receba um array e retorne um novo array contendo os elementos do array original em ordem reversa.

function invertedArray(array) {
  return [...array].reverse();
};
console.log(invertedArray(['maça', 'banana', 'kiwi']));
console.log(invertedArray([6, 8, 5]));

// Crie uma função que receba dois arrays e retorne um novo array contendo todos os elementos dos dois arrays, em ordem.

function unifyArrays(array1, array2){
  return [...array1, ...array2];
};
console.log(unifyArrays([1, 7, 3], [9, 8]));


// Crie uma função que receba um objeto e retorne um novo objeto contendo todas as propriedades do objeto original, exceto aquelas com chave "senha".
 
function removePassword(object) {
  const { password, ...restOf } = object;
  return restOf;
}

const user = {
  personName: "João",
  age: 25,
  city: "São Paulo",
  state: "SP",
  password: "123456"
};

console.log(removePassword(user));

// Crie uma função que receba um objeto e retorne um novo objeto contendo todas as propriedades do objeto original, exceto aquelas com chave "senha" ou "token".

function removePassAndToken(obj) {
  const { password, token, ...rest } = obj;
  return rest;
}

const user2 = {
  personName: "João",
  age: 25,
  city: "São Paulo",
  state: "SP",
  password: "123456",
  token: "abc123"
};

console.log(removePassAndToken(user2));

// Crie uma função que receba um objeto e retorne um novo objeto contendo todas as propriedades do objeto original, exceto aquelas que começam com um sublinhado ("_").

function removeInline(param) {
  const newObject = {};
  for (let key in param) {
    if(!key.startsWith('_')) {
      newObject[key] = param[key];
    }
  }
  return newObject;
}

const pessoa = {
  _id: 123,
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  estado: "SP"
};

console.log(removeInline(pessoa));