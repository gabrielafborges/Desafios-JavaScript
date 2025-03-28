//______________________________________________________________________
// Exercícios com map
// 1. Dobrar os valores de um array
// Objetivo: Dado um array de números, crie um novo array onde cada número seja o dobro do valor original.
// Explicação:
// Use o método map para iterar sobre cada elemento do array.
// A função passada para o map deve multiplicar cada número por 2.
// O map retornará um novo array com os valores transformados.


let numeros = [1, 2, 3, 4, 5];
const multiplicarNumeros = numeros.map((numero) => {
  return numero * 2;
})
console.log(multiplicarNumeros);
//________________________________________________________________________




//_______________________________________________________________________
// ✅ Exercício 2: Converter nomes para maiúsculas
// Objetivo: Dado um array de nomes, use map() para criar um novo array onde todos os nomes estejam em letras maiúsculas.


const nomes = ["ana", "Carlos", "beatriz", "gabriel"];
const converterNomesParaMaiusculas = nomes.map((nome) => {
  return nome.toLocaleUpperCase();
});
console.log(converterNomesParaMaiusculas);
//________________________________________________________________________




//________________________________________________________________________
// ✅ Exercício 3: Transformar idades em categorias
// Objetivo: Dado um array de idades, use map() para criar um novo array onde:

// Se a idade for menor que 18 → "Menor de idade"
// Se for maior ou igual a 18 → "Adulto"


const idades = [15, 22, 17, 40, 13];

const verificarIdades = idades.map((idade) => {
  const verificandoIdade = idade < 18 ? `Menor de idade` : `Adulto`;
  return verificandoIdade;
});
console.log(verificarIdades);
//______________________________________________________________________




//_____________________________________________________________________
// ✅ Exercício 4: Converter temperaturas de Celsius para Fahrenheit
// Objetivo: Dado um array de temperaturas em Celsius, use map() para criar um novo array com as temperaturas convertidas para Fahrenheit.


let arr = [0, 25, 30, 40, 100];
const conversor = arr.map((elemento) => {
  return (elemento * 1.8) + 32;
});
console.log(conversor);
//______________________________________________________________________




//__________________________________________________________________________________
// Exercício 5: Criar um array de iniciais dos nomes
// Objetivo: Dado um array de nomes completos, use map() para criar um novo array contendo apenas as iniciais de cada nome.
// 📌 Array de entrada: ["João Silva", "Maria Oliveira", "Pedro Santos", "Ana Clara"]
// 📌 Saída esperada: ["J.S", "M.O", "P.S", "A.C"]

let arr = ["João Silva", "Maria Oliveira", "Pedro Santos", "Ana Clara"];


const converterNomesParaIniciais = arr.map((nome) => {
  return nome.split(' ').map(str => str[0]).join('.');
});

console.log(converterNomesParaIniciais);
//________________________________________________________________________