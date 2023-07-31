// Crie um template literal que exiba seu nome completo e sua idade.

const myName = 'Luciana Martins de Almeida';
const myAge = 27;
console.log(`Meu nome é ${myName} e tenho ${myAge} anos.`);

// Crie um template literal que exiba a data de hoje no formato "dia/mês/ano".

const today = new Date();
const day = today.getDate()
const month = today.getMonth() + 1;
const year = today.getFullYear()
console.log(`Hoje é dia ${day}/${month}/${year}`);

// Crie um template literal que exiba a tabuada de um número.

const number = 6;
let mathTable = '';
for (let index = 0; index <= 10; index += 1) {
  mathTable += `
  ${number} x ${index} = ${number * index} `;
};
console.log(mathTable);

// Crie um template literal que exiba uma lista de compras.

const groceryList = ['Arroz', 'Feijão', 'Batata', 'Filé', 'Chocolate']
  let mensage = 'Minha lista de compras: ';
  for (let index = 0; index < groceryList.length; index += 1) {
    mensage += `
    - ${groceryList[index]} `
};
console.log(mensage);
  
// Crie um template literal que exiba os dados de uma pessoa, incluindo nome, idade, endereço e telefone.

const Sakura = {
  names: 'Sakura',
  age: '33',
  location: 'Leaf Village',
  cellphone: '000-0000',
  profission: 'Doctor/Kunoichi',
};

console.log(`Dados da Sakura:
Nome: ${Sakura.names},
Idade: ${Sakura.age},
Endereço: ${Sakura.location},
Celular: ${Sakura.cellphone},
Profissão: ${Sakura.profission}
`);