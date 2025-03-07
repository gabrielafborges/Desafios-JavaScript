// Exercício: Contar quantas velas no aniversário têm a maior altura
// Enunciado:
// Dado um array de números representando a altura de velas de aniversário,
// sua tarefa é contar quantas velas têm a maior altura.

// Função para contar as velas com a maior altura
function birthdayCakeCandles(candles) {
    let largestNumber = candles[0];
    let counter = 0;

    for(let i = 0; i < candles.length; i++){
        if(candles[i] > largestNumber){
            largestNumber = candles[i];
        }
    }

    for(let i = 0; i < candles.length; i++){
        if(largestNumber === candles[i]){
            counter++
        }
    }
    return counter;
}

// Testando com um array
const arr = [1, 6, 6, 10, 3, 4, 4];
console.log(birthdayCakeCandles(arr)); // 1
