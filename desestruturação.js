// Desestruture o seguinte array para obter o valor 3 em uma variável separada: [1, 2, 3]

const numbers1 = [1, 2, 3];
const [ , , terceiro] = numbers1;
console.log(terceiro);

// Desestruture o seguinte array para obter os valores 1 e 3 em variáveis separadas: [1, 2, 3]

const numbers2 = [1, 2, 3];
const [first, , third] = numbers2;
console.log(first);
console.log(third);

// Desestruture o seguinte objeto para obter as propriedades "nome" e "idade" em variáveis separadas: { nome: "João", idade: 25 }

const pessoa = { nome: "João", idade: 25 };
const { nome, idade } = pessoa;
console.log(nome);
console.log(idade);

// Desestruture o seguinte objeto para obter as propriedades "rua" e "numero" em variáveis separadas: { rua: "Av. Paulista", numero: 100 }

const infos = { rua: "Av. Paulista", numero: 100 };
const { rua, numero } = infos;
console.log(rua);
console.log(numero);

// Desestruture o seguinte objeto para obter as propriedades "nome" e "telefone" em variáveis separadas, e defina um valor padrão para "telefone" caso não exista: const pessoa = { nome: "João", idade: 25 }

const pessoa2 = { nome2: "João", idade: 25 }
const { nome2, telefone = 'Não informado' } = pessoa2;
console.log(nome2);
console.log(telefone);

