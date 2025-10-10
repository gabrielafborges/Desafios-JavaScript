// 🚀 Exercícios de map


//______________________________________________________________________
// 1 - Dobrar valores:
// Dado um array de números, use map para criar um novo array onde cada número seja o dobro do original.


// const numeros = [2, 5, 8, 10];

// const dobroDosNumeros = numeros.map((numero) => {
//     return numero * 2;
// });
// console.log(dobroDosNumeros);
//______________________________________________________________________



//_______________________________________________________________________
// 2 -  Transformar nomes em maiúsculas:
// Use map para transformar todos os nomes do array abaixo em maiúsculas.


// const nomes = ["gabriel", "ana", "joão", "mariana"];

// const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
// console.log(nomesMaiusculos);
//_______________________________________________________________________




//________________________________________________________________
//3 - Converter preços em dólar para reais:
// Suponha que 1 dólar seja equivalente a 5,10 reais. Converta os valores de um array de preços para reais usando map.


// const precosDolar = [10, 20, 30, 1];

// const conversorDeDolarParaReal = precosDolar.map((preco) => {
//     return preco * 5.10;
// });
// console.log(conversorDeDolarParaReal);
//________________________________________________________________






// 🔄 Exercícios de forEach
//______________________________________________________________________
// 1 - Exibir cada item do array:
// Utilize forEach para imprimir no console cada número do array abaixo.

// const numeros = [10, 20, 30, 40, 50];
// const imprimirNumeros = numeros.forEach(numero => console.log(numero));
//_______________________________________________________________________


// 2 - Soma de elementos:
// Com forEach, some todos os valores do array abaixo e exiba o resultado no console.

// const valores = [3, 7, 9, 2, 8];
// let soma = 0;

// const somaDosNumeros = valores.forEach((numero) => {
//     soma += numero;
// });
// console.log(soma);
//_______________________________________________________________________


// 3 - Formatar uma lista de produtos:
// Use forEach para percorrer o array e imprimir no formato:
// "O produto [nome] custa R$ [preço]"


// const produtos = [
//     { nome: "Camisa", preco: 50 },
//     { nome: "Calça", preco: 90 },
//     { nome: "Tênis", preco: 120 }
//   ];

// const listaDeProdutosFormatada = produtos.forEach((produto) => {
//     console.log(`O produto ${produto.nome} custa R$ ${produto.preco}`);
// })



//_______________________________________________________________________




// 📉 Exercícios de reduce

// 1 - Somar todos os valores:
// Use reduce para somar todos os números do array abaixo.

// const numeros = [5, 10, 15, 20];

// const somatorioDosNumeros = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero;
// }, 0)
// console.log(somatorioDosNumeros);
//_______________________________________________________________________



// 2 - Encontrar o maior número:
// Utilize reduce para encontrar o maior número dentro do array.


// const numeros = [23, 45, 67, 12, 89, 34];

// const maiorNumero = numeros.reduce((acumulador, numero) => {
//     if(numero > acumulador){
//         acumulador = numero;
//         return acumulador;
//     }else{
//         return acumulador;
//     }
// });
// console.log(maiorNumero);
//_______________________________________________________________________

// 3 - Calcular a média das idades:
// Use reduce para calcular a média das idades no array.

// const idades = [18, 22, 30, 25, 28, 35];
// const mediaDeIdades = idades.reduce((acumulador, idade) => {
//     let soma = (acumulador + idade);
//     return soma;
// }, 0);
// const media = mediaDeIdades / idades.length;
// console.log(media.toFixed(2));

//_______________________________________________________________________





// 🔍 Exercícios de filter

//_______________________________________________________________________
// 1 - Filtrar números maiores que 10:
// Use filter para retornar apenas os números maiores que 10.


// const listaDeNumeros = [3, 10, 18, 7, 22, 5];

// const numerosMaioresQueDez = listaDeNumeros.filter(numeros => numeros > 10);
// console.log(numerosMaioresQueDez);
//_______________________________________________________________________

// 2 - Filtrar produtos baratos:
// Retorne apenas os produtos com preço menor que 100 reais.

// const listaDeProdutos = [
//     { nome: "Celular", preco: 1500 },
//     { nome: "Fone de Ouvido", preco: 80 },
//     { nome: "Mouse", preco: 50 },
//     { nome: "Teclado", preco: 200 }
//   ];
// const precosMenoresQueCem = listaDeProdutos.filter(produto => produto.preco < 100);
// console.log(precosMenoresQueCem);

//_______________________________________________________________________


//________________________________________________________________________
// 3 - Filtre do array abaixo apenas as palavras com menos de 5 letras.
// const palavras = ["sol", "lua", "planeta", "estrela", "mar", "casa"];

// const filtroDePalavras = palavras.filter(palavra => palavra.length < 5);
// console.log(filtroDePalavras);
//________________________________________________________________________


//________________________________________________________________________
// const numeros = [3, 8, 12, 5, 9, 20, 7, 18];
// // Saída esperada: 8 + 12 + 20 + 18 = 58

// const somaDePares = numeros.reduce((acumulador, numero) => {
//     if(numero % 2 === 0){
//         return acumulador + numero;
//     }
//     return acumulador;
// },0);
// console.log(somaDePares);
//________________________________________________________________________



//________________________________________________________________________
// const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];
// // Saída esperada: { maçã: 2, banana: 3, laranja: 1 }

// const contadorDePalavras = palavras.reduce((acumulador, palavra) => { 
//     acumulador[palavra] ? acumulador[palavra] += 1 : acumulador[palavra] = 1;
//     return acumulador;
// },{})
// console.log(contadorDePalavras);
//________________________________________________________________________



//________________________________________________________________________
// const itens = [
//     {descricao: 'Caneta', quantidade: 1, preco: 3},
//     {descricao: 'Caderno', quantidade: 2, preco: 5},
//     {descricao: 'Kit Volta as Aulas', quantidade: 2, preco: 6}
// ];
// // SAIDA ESPERADA: 25


// const somaDeValoresDosItens = itens.reduce((soma, item) => (item.preco * item.quantidade) + soma, 0);
// console.log(somaDeValoresDosItens);
//________________________________________________________________________




// const nomes = ['Daniel','Maria','Marta','Juca','João','Jéssica'];

// //SAIDA ESPERADA: { d: 1, m: 2, j: 3}

// const contadorDeNomesPorInicial = nomes.reduce((contador, nomeAtual) => {
//     let conversorDeNomeParaInicial = nomeAtual[0].toLowerCase();
    
//     if(contador[conversorDeNomeParaInicial]){
//         contador[conversorDeNomeParaInicial]++;
//     }else{
//         contador[conversorDeNomeParaInicial] = 1;
//     }
//     return contador;
// },
// {});
// console.log(contadorDeNomesPorInicial);
//_______________________________________________________________________






const listaDeAlunos = [-1, -3, 4, 2];

const contadorDePontuais = listaDeAlunos.reduce((contador, indice) => {
    if(indice <= 0){
        contador++
    }
    return contador;
}, 0);


function verificaSeTeraAula(contadorDePontuais, limiteMinimoDeAlunosPontuais){
    contadorDePontuais < limiteMinimoDeAlunosPontuais ? console.log('YES') : console.log('NO');
};

verificaSeTeraAula(contadorDePontuais, 2);