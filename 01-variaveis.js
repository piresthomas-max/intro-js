// VARIAVEIS = São identificadores que nos permitem acessar um valor armazenado durante a execução de um programa.

// Pense em uma caixa etiquetada.
// A etiquetada é o nome variavel.
// O conteúdo é o valor que ele representa.


// O JavaScript possui três formas de declarar variaveis.
// Declaração nomeDaVariavel = valor variavel 

// 1 - const
// Utilizamos essa declaração de const, quando não pretendemos atribuir outro valor a nossa variavel depois de inicializar
const nome = "Thomas"
console.log(nome)

// 2 - let
// Utilizamos essa declaração quando o valor da variavel precisar ser alterado ao longo do programa.
let pais = "Brasil"
console.log(pais)

// Reatribuindo um valor a variavel
pais = "Portugual"
console.log(pais)

pais = "Marrocos"
console.log(pais)

// 3 - var (NÃO RECOMENDADO)
// É a forma antiga de declaração. Ainda funciona, mas geralmente deve ser EVITADA em códigos modernos, 

var cidade = "São Paulo"
var idade = "22"

// Regras para nomear variaveis
// Nomes válidos
let sobrenome;
let idadeUsuario;
let _total;
let $preco;
let quantidade1;


// Nomes inválidos
// let 2nome; /* Começar com números */ 
// let nome usuario; /* Possuir espaços */
// let let; /* Utilizar palavras reservadas da linguagem */
// let banana-doce; /* Utilizar hífens ( - ) */