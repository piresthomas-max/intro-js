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
let nome = "Thomas"
let sobreNome = "Pires"
let idade = "22"
let email = "thomas@gameplay.com"
let curso = "JavaScript"
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

// Acessando informações de um objeto 
// 1 - Notação de ponto "." (dot notation)
console.log(aluna.nome);
