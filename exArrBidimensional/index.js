// Exercício 1 – Soma dos elementos
// Crie um array bidimensional com números e calcule a soma de todos os elementos.
// const matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Saída esperada: Soma total = 45
function somaDosElementos(matriz){
    let somaTotal = 0;

    for(let linha = 0; linha < matriz.length; linha++){
        for(let coluna = 0; coluna < matriz[linha].length; coluna++){
            somaTotal += matriz[linha][coluna];
        }
    }
    return somaTotal;
}
//console.log(somaDosElementos(matriz));





// Exercício 2 – Encontrar o maior número da matriz
// Dada uma matriz de números inteiros, encontre e exiba o maior valor contido nela.
// const matriz = [
//   [3, 9, 2],
//   [8, 4, 6],
//   [5, 1, 7]
// ];
// Saída esperada: Maior número = 9
function maiorNumeroDaMatriz(matriz){
    let maiorNumero = matriz[0][0];

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maiorNumero){
                maiorNumero = matriz[i][j];
            }
        }
    }
    return maiorNumero;
}
//console.log(maiorNumeroDaMatriz(matriz));




// Exercício 3 – Exibir a diagonal principal
// Crie um programa que mostre apenas os valores da diagonal principal de uma matriz quadrada (mesmo número de linhas e colunas).
const matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
// Saída esperada: 10, 50, 90
function exibirDiagonalPrincipal(matriz){
    let diagonalPrincipal = [];
    
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][i] === matriz[i][j]){
                diagonalPrincipal.push(matriz[i][j]);
            }
        }
    }
    return diagonalPrincipal;
}
//console.log(exibirDiagonalPrincipal(matriz));
