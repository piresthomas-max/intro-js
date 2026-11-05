// Os objetos são uma estrutura de dados que nos permite armazenar várias informações RELACIONADAS dentro de uma ÚNICA variavel

/* 
    const objeto = {
       key: value,
       chave: valor,
       propriedade: valor,
       outraPropriedade: outroValor,
    }
*/


// Exemplo de aplicação 
let nome = "Thomas";
let sobreNome = "Pires";
let idade = "22";
let email = "thomas@gameplay.com";
let curso = "JavaScript";
let matriculado = true;

const aluna = {
    nome: "Thomas",
    sobreNome: "Pires",
    idade: 22,
    email: "thomas@gameplay.com",
    curso: "JavaScript",
    matriculado: "true",
}

console.log(aluna);

console.log("------Acessando Informação------");

// Acessando informações de um objeto 
// 1 - Notação de ponto "." (dot notation)
console.log(aluna.nome);
console.log(aluna.email);

// 2 - Notação de colchetes [] - (Bracket notation)

console.log(aluna["nome"]);

console.log("------Acessando Informação------");

// Modificando informações de um objeto

aluna.email = "thomas12@exemplo.com";

console.log(aluna);

console.log("------Acessando Informação------");

// Adicionando informações a um objeto

// Com o dot notation - Notação de ponto "."
aluna.nota = 8.0;

// Com o bracket notation - Notação de colchetes []
aluna["cidade"] = "São Paulo";

console.log("------Removendo Informação------");

// Removendo informações de um objeto

delete aluna.cidade;


console.log("------Objetos com métodos------");

// Objetos com funções(métodos)

const pessoa = {
    nome: "Thomas",
    idade: 22,

    apresentar: function () {
        console.log("oi, leticia né?");
    }
}

pessoa.apresentar()