// Os Arrays nos permitem agrupar/organizar vários valores em uma única estrutura, formando uma LISTA. Essa lista é organizada de forma ordenada. 

// Arrays e Objetos trabalham juntos o tempo todo.

// É comum encontrarmos essa combinação em API's, React, Nodejs, sistemas de cadastro, lojas online, literalmente qualquer aplicação da web.

// Exemplo sem array
let aluno1 = "Rafaela";
let aluno2 = "Adrielli";
let aluno3 = "Thomas";
let aluno4 = "Vanessa";
let aluno5 = "Adail";

// Exemplo com array
// A síntaxe do array no JavaScript é com brackets - []
const alunos = ["Rafaela", "Adrielli", "Thomas", "Vanessa", "Adail"];

console.log(alunos);

// Acessando informações de um array
console.log("----- Acessando Valores -----");
console.log(alunos[2]);
console.log(alunos[3]);

// Acessando uma posição vazia
console.log(alunos[7]);

console.log("---- Descobrindo tamanho do array ----");
console.log(alunos.length);


// Modificando valores
alunos[5] = "Giulia Hortelã";
console.log(alunos);


// Métodos para arrays
const frutas = ["Bananas", "Macã"];

// 1 - push()
// Adiciona um elemento ao final da lista
frutas.push("Pêra");
console.log(frutas);

// 2 - unshift()
// Adiciona um elemento ao ÍNICIO da lista
frutas.unshift("Manga");
frutas.unshift("Morango");

// 3  - pop()
// Remove o último elemento da lista
frutas.pop();

// 4 - shift()
// Remove o PRIMEIRO elemento da lista
frutas.shift();
