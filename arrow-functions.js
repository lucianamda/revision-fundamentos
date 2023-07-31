// Crie uma arrow function que receba dois números como parâmetros e retorne a soma deles.

const sum = (a, b) => a + b;
console.log(sum(4, 5));

// Crie uma arrow function que receba um número como parâmetro e retorne true se ele for par e false se ele for ímpar.

const isNumEven = (number) => number % 2 === 0;
console.log(isNumEven(7));
console.log(isNumEven(4));

// Crie uma arrow function que receba um array de números como parâmetro e retorne a soma de todos os elementos.

const sumArray = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
};

console.log(sumArray([1, 54, 6]));

// Crie uma arrow function que receba um array de números como parâmetro e retorne um novo array com todos os elementos multiplicados por dois.

const multArray = (array) => {
  let mult = [];
  for (let index = 0; index < array.length; index += 1) {
    mult.push(array[index] * 2);
  }
  return mult;
};

console.log(multArray([1, 2, 6]));


// Crie uma arrow function que receba um array de números como parâmetro e retorne o menor número do array.

const lowestNumber = (array) => {
  let lowest = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < lowest) {
      lowest = array[index]
    }
  }
  return lowest;
};

console.log(lowestNumber([5, 7, 1]));

// Crie uma arrow function que receba um array de números como parâmetro e retorne um novo array com todos os números pares do array original.

const evensNumber = (array) => {
  let onlyEven = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 === 0) {
      onlyEven.push(array[index]);
    }
  }
  return onlyEven;
};

console.log(evensNumber([3, 7, 6, 4, 8]));

// Crie uma arrow function que receba um array de strings como parâmetro e retorne um novo array com todas as strings em caixa alta.

const upperCase = (array) => {
  newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index].toUpperCase());
  }
  return newArray;
};

console.log(upperCase(['naruto', 'sakura', 'sasuke', 'kakashi']));

// Crie uma arrow function que receba um objeto como parâmetro e retorne todos os valores do objeto em um array.

const objectArray = (object) => {
  let values = [];
  for (let key in object) {
    values.push(object[key])
  }
  return values;
};

const myObject = {
  name: 'Sakura',
  age: '16',
  location: 'Leaf Village'
}

console.log(objectArray(myObject));

// Crie uma arrow function que receba um array de objetos como parâmetro e retorne um novo array com todos os nomes dos objetos.

const allNameObjects = (array) => {
  let names = [];
  for (let index = 0; index < array.length; index += 1) {
    names.push(array[index].name)
  }
  return names;
};

const narutoNames = [
  {
    name: 'Sakura',
    age: '16',
    location: 'Leaf Village'
  },
  {
    name: 'Sasuke',
    age: '16',
    location: 'Leaf Village'
  },
  {
    name: 'Naruto',
    age: '16',
    location: 'Leaf Village'
  }
];

console.log(allNameObjects(narutoNames));

// Crie uma arrow function que receba um array de objetos como parâmetro e retorne um novo array com todos os objetos que tenham a propriedade "idade" maior ou igual a 18.

const ages = (array) => {
  let isMoreThanEighteen = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index].age >= 18) {
      isMoreThanEighteen.push(array[index]);
    };
  } return isMoreThanEighteen;
};

const narutoAges = [
  {
    name: 'Sakura',
    age: '33',
    location: 'Leaf Village'
  },
  {
    name: 'Sasuke',
    age: '33',
    location: 'Leaf Village'
  },
  {
    name: 'Naruto',
    age: '33',
    location: 'Leaf Village'
  },
  {
    name: 'Sarada',
    age: '12',
    location: 'Leaf Village'
  },
  {
    name: 'Boruto',
    age: '12',
    location: 'Leaf Village'
  },
];
console.log(ages(narutoAges));