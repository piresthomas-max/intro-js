// Estruturas condicionais permitem que o programa tome decisões com base em determinadas condições/regras

// If - Se
// O if executa um bloco de código se uma condição for verdadeira 
// Estrutura de um If

/* 
if(condição/regra){
    bloco de código que será executado caso a condição/regra seja verdadeira
    }
*/

let saldo = 20

if (saldo > 5.30) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5.50 do seu saldo");
}


// if/else
/* 
if(condição/regra){
        bloco de código que será executado caso a condição/regra seja verdadeira
    } else{
        bloco de código que será executado caso a condição/regra seja falsa
    }
*/
console.log("-----if/else-------");

saldo = 4.99;

// if composto
if (saldo > 5.30) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5.50 do seu saldo");
} else {
    console.log("Saldo insuficiente");
    
}

console.log("-----if/else-----EX - 2 --");
// Utilizamos essa estrutura quando queremos/precisamos dar uma resposta alternativa caso a condição não seja atendida.
const estaChovendo = true

if (estaChovendo) {
    console.log("Levar o guarda-chuva.");
} else {
    console.log("Pode sair sem o guarda-chuva");
}


console.log("-----IF...-----ELSE IF --");
// Utilizamos essa estrutura, quando temos várias possibilidades, ou seja, quando queremos testar condições adicionais...

const nota = 4;

if (nota >= 8) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovad@");
} else if (nota >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovad@");
}

console.log("-----OPERADORES lÓGICOS-----");

// APLICANDO OPERADORES LÓGICOS
// EXEMPLO

console.log("-----&& - AND-----");
// Operador && - AND (e)
const idade = 18;
const temIngresso = true;

if (idade >= 18 && temIngresso) {
    console.log("Bem vind@. Entrada permitida!.");
} else {
    console.log("Entrada não permitida!.");
}


console.log("-----|| - OR -----");

// Operador || - OR(ou)
const ehAdmin = true;
const ehModerador = false;

if (ehAdmin || ehModerador) {
    console.log("Acesso ao painel permitido.");
} else { 
    console.log("Acesso não permitido.! ");
}

console.log("-----|| - OR (Ex: 2)-----");

const temCupom = false;
const clienteFiel = true;

if (temCupom || clienteFiel) {
    console.log("Você ganhou um desconto.!");
} else {
    console.log("Sem desconto dessa vez.!");
}

console.log("-----! - NOT(não)-----");
// Operador ! - NOT (Não)

const estaLogada = true;

if (!estaLogada) {
    console.log("Faça login para continuar!");
} else {
    console.log("Seja bem vind@ ao Instagram.");
}

const aceitouTermos = false;

if ("!aceitouTermos") {
    console.log("Você precisa aceitar os termos!");
}

let menuAberto = false;
if (!menuAberto) {
    console.log("Abrir menu!");
}

// Combinando operadores lógicos 
const estaLogado = true;
const contaBloqueada = true;
const ehVisitante = false;

if (estaLogado && !contaBloqueada && !ehVisitante) {
    console.log("Bem vind@ ao seu banco.");
} else {
    console.log("Acesso não permitido!");
}

