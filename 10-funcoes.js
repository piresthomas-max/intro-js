// As funções no JavaScript são blocos de código que utilizamos para organizar, e criar funcionalidades reutilizaveis.

/*
    Estrutura de uma função
    
    function nomeDaFunção(){
        bloco de código que será executado 
    }    
*/

// Exemplo simples de uma função

function darBoasVindas() {
    console.log("Olá, Seja bem vind@!");
}

// Ativando/invocando a função 
darBoasVindas();


// Criando funções com parâmetros e argumentos
// Parâmetro - Funciona como uma variavel que recebe uma informação quando a função é chamada/invocada/ativada

/* 
    Exemplo de função com parâmetro

    funcion nomeDaFunção(parametro){
        bloco de código
    }
*/

function fazerSuco(fruta) {
    console.log(`Preparando suco de ${fruta}`)
}


// Invocando/ativando/chamando função e passando um argumento para o parametro
fazerSuco("Laranja")
fazerSuco("Pêra")
fazerSuco("Manga")

// Exemplo prático de função com parâmetro
let fruta = prompt("Escolha uma opção de suco: \n 1 - Laranja \n 2 - Pêra \n 3 - Manga");

switch (fruta) {
    case "1":
        fazerSuco("Laranja");
        break
    case "2":
        fazerSuco("Pêra");
        break
    case "3":
        fazerSuco("Manga");
        break
    default:
        alert("Opção inválida");
}

// Criando uma função com mais de um parâmetro
function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos!`);
}

// Invocando a função e passando os argumentos
apresentarPessoa("Thomas Pires", 22);