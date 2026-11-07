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

console.log("--- objetos aninhados ---");

const aluno = {
    nome: "Vanessa",
    sobrenome: "da Silva",
    idade: 18,

    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Carrão",
        cep: "04315-030",
        coordenadas: {
            latitude: "-2393736278",
            longitude: "-466516782"
        }
    }
}

console.log(aluno.endereco.cidade);

console.log(aluno.endereco.coordenadas.latitude);

// Exemplos reais (nem tanto)
// Simulando resposta da API

const clima = {
    cidade: "São Paulo",
    temperatura: 19,
    umidade: 80,
    vento: 20
}

console.log(`
    cidade: ${clima.cidade}
    Temperatura atual: ${clima.temperatura}C
    umidade: ${clima.umidade} | vento: ${clima.vento}km/h
`);

// métodos úteis para manipular objetos

console.log("----------- métodos para objetos -----------------------");

const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 15,
    marca: "Dell",
    disponivel: true
};

// 1 - objects.keys ()
// Object.keys() - Retorna uma lista(array) com as chaves(propriedades) de um objeto
console.log(Object.keys(produto));

// 2 - object.value()
// retorna uma lista (array) com os valores de um objeto

console.log(Object.values(produto));

// 3 - Object.entries()
// retorna uma lista(array) contendo os pares de chave e valor dentro de uma outra lista para cada par.

console.log(Object.entries(produto));

// Iterando sobre um objeto
console.log("--- Iterando sobre um objeto com for/in---");

/* 
estrtura de um for...in

for(let propriedade in produto) {
    bloco de código que será executado
}
*/

for (const propriedade in produto) {
    console.log(propriedade);
}

// for/in com acesso a valores
for (const propriedade in produto) {
    console.log(produto[propriedade]);

}