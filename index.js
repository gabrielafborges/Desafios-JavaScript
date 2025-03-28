// ✅ Exercício 1: Subindo uma escada (Recursivo)
// 📌 Enunciado:
// Você tem uma escada com ndegraus. Crie uma função recursiva que conte quantos passos serão dados para subir tudo , considerando que a cada chamada você sobe 1 degrau.

// 📥 Exemplos de entrada e saída:

// Entrada ( n)	Saída Esperada
// 0 degraus	0 passos
// 1 degrau	    1 passo
// 3 degraus	3 passos
// 5 degraus	5 passos

// 📌 A ideia é que a função chame ela mesma comn - 1 , até n === 0.
// Cada passo é 1 chamada recursiva.

// function subindoUmaEscada(numeroDedegraus){
//     if (Number.isNaN(numeroDedegraus)) {
//         return "Valor inválido! O cálculo resultou em NaN.";
//     }
//     if(numeroDedegraus === 0){
//         return 0;
//     }
//     console.log(numeroDedegraus);
//     return subindoUmaEscada(numeroDedegraus - 1);
// }
// console.log(subindoUmaEscada(523));
//____________________________________________________________________________________________________




//_________________________________________________________________________________________
// ✅ Exercício 1: Contando até um número
// 📌 Enunciado:
// Crie uma função recursiva que conte de 1 até um número n e exiba cada número no console.
// function contarAte(numMin, numMax){
//   console.log(numMin);
//   if(numMin >= numMax){
//     return numMin;
//   }else{
//     contarAte(numMin+1, numMax);
//   }
// }
// contarAte(0,10);
//________________________________________________________________________________________




//_______________________________________________________________________________
// ✅ Exercício 2: Contagem regressiva
// 📌 Enunciado:
// Crie uma função recursiva que faça uma contagem regressiva de um número até 0.
// function contagemRegressiva(num){
//   console.log(num);
//   if(num > 0){
//     contagemRegressiva(num - 1);
//   }else{
//     return 0;
//   }
// }
// contagemRegressiva(3);
//_______________________________________________________________________________



//___________________________________________________________________________
// ✅ Desafio: Somar até o número escolhido (Recursiva)
// 📌 Enunciado:
// Crie uma função recursiva que soma todos os números de 1 até um número X.
// function somarAteNumeroEscolhido(numBase, numTeto){
  
//   if(numBase <= numTeto){
//     let somaTotal = numBase + (numBase+1);
//     somarAteNumeroEscolhido(numBase + 1, numTeto)
//     return somaTotal * 2;  
//   }
// }
// console.log(somarAteNumeroEscolhido(1, 5));
//___________________________________________________________________________



//____________________________________________________________________________________
// ✅ Objetivo do exercício:
// Contar quantas maçãs e quantas laranjas caíram na casa de Sam, com base nas distâncias que elas caem a partir das árvores.
// 📥 Entradas (o que será fornecido para a função):
// s e t: Início e fim da casa de Sam.
// a: Posição da macieira.
// b: Posição da laranjeira.
// apples: Array com distâncias das maçãs (podem ser positivas ou negativas).
// oranges: Array com distâncias das laranjas (também positivas ou negativas).
// 📤 Saída:
// Primeira linha: número de maçãs que caem dentro da casa (entre s e t, inclusive).
// Segunda linha: número de laranjas que caem dentro da casa.


// function countApplesAndOranges(s, t, a, b, apples, oranges){
//   let countApples = 0;
//   let countOranges = 0;
//   for(let i = 0; i < apples.length; i++){
//     if((apples[i] + a) >= s && (apples[i] + a) <= t){
//       countApples++;
//     };
//   }
//   for(let i = 0; i < oranges.length; i++){
//     if((oranges[i] + b) >= s && (oranges[i] + b) <= t){
//       countOranges++;
//     };
//   }
//   return `${countApples}\n${countOranges}`;
// }
// let apples = [-2, 2, 1];
// let oranges = [5, -6];

// console.log(countApplesAndOranges(7, 11, 5, 15, apples, oranges));
//___________________________________________________________________






//__________________________________________________________________
// Escreva 3 funções para:
// Somar dois números.
// Verificar se um número é par.
// Dizer se uma pessoa pode votar (idade >= 16).


//-- 1 -- SOMAR:
// const soma = (num1, num2) => num1 + num2;
// console.log(soma(-1, 2));
 


//-- 2 -- VERIFICAR SE UM NUMERO É PAR OU ÍMPAR:
// const numerosPares = (num) => {
//   if(num % 2 === 0){
//     return `${num} é par`;
//   }else{
//     return `${num} é impar`;
//   }
// }
// console.log(numerosPares(11));




//-- 3 -- VERIFICAR SE UM CIDADÃO PODE VOTAR:
// const verificaIdadeParaVotar = (idade) => {
//   if(idade >= 16){
//     return `Pode votar`
//   }else{
//     return `Não pode votar`
//   }
// }
// console.log(verificaIdadeParaVotar(10));
//_____________________________________________________________________







//______________________________________________________________________
// Escreva 3 funções para:
// Somar dois números.
// Verificar se um número é par.
// Dizer se uma pessoa pode votar (idade >= 16).


//-- 1 -- SOMAR:
// const somar = function(num1, num2){
//   return num1 + num2;
// }
// console.log(somar(10, 12));

//-- 2 -- VERIFICAR SE UM NUMERO É PAR OU ÍMPAR:
// const parOuImpar = function(num){
//   if(num % 2 === 0){
//     return `${num} é par`;
//   }else{
//     return `${num} é ímpar`;
//   }
// }
// console.log(parOuImpar(12));



//-- 3 -- VERIFICAR SE UM CIDADÃO PODE VOTAR:
// const verificaIdadeParaVotar = function(idade){
//   if(idade >= 16){
//     return `${idade} anos pode votar`;
//   }else{
//     return `${idade} anos não pode votar`;
//   }
// }
// console.log(verificaIdadeParaVotar(40));
//______________________________________________________________________
