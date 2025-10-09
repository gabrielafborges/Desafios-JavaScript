// Fila de Espera
// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

function filaDeEspera() {
    let listaDePacientes = [];
    let opcao = "";

    do {
        let lista = "";
        if (listaDePacientes.length === 0) {
            lista = "Não há pacientes na fila de espera.";
        } else {
            for (let i = 0; i < listaDePacientes.length; i++) {
                lista += `${i + 1}º - ${listaDePacientes[i]}\n`;
            }
        }

        opcao = prompt(
            `MENU DE OPÇÕES:\n\n${lista}\n\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`
        );

        switch (opcao) {
            case "1":
                const novoPaciente = prompt("Digite o nome do novo paciente:");
                if (novoPaciente) {
                    listaDePacientes.push(novoPaciente);
                    alert(`Paciente ${novoPaciente} adicionado com sucesso!`);
                } else {
                    alert("Nome inválido! Nenhum paciente foi adicionado.");
                }
                break;

            case "2":
                if (listaDePacientes.length > 0) {
                    const pacienteConsultado = listaDePacientes.shift();
                    alert(`O(a) paciente ${pacienteConsultado} foi consultado(a) com sucesso!`);
                } else {
                    alert("Não há pacientes na fila para consultar.");
                }
                break;

            case "3":
                alert("Encerrando o programa...");
                break;

            default:
                alert("Opção inválida! Escolha uma das opções disponíveis.");
                break;
        }

    } while (opcao !== "3");
}
//filaDeEspera();
//__________________________________________________________________________________________________________

// Diferença de Preços
// Você está analisando preços de produtos em uma loja. Escreva uma função que recebe um array de preços e retorna um novo array com [menor preço, maior preço, diferença entre eles].
function diferencaDePrecos(listaDePrecos){
    let maiorPreco = listaDePrecos[0];
    let menorPreco = listaDePrecos[0];
    let diferenca;
    for(let i = 0; i < listaDePrecos.length; i++){
        if(listaDePrecos[i] > maiorPreco){
            maiorPreco = listaDePrecos[i];
        }
        if(listaDePrecos[i] < menorPreco){
            menorPreco = listaDePrecos[i];
        }
    }
    diferenca = maiorPreco-menorPreco;
    return [menorPreco, maiorPreco,diferenca];
}
//console.log(diferencaDePrecos([10,5,8,20,3]));
//__________________________________________________________________________________________________________

// Estatísticas de Temperaturas
// Você está registrando temperaturas diárias. Escreva uma função que recebe um array de temperaturas e retorna um objeto com:
// temperatura mais baixa
// temperatura mais alta
// diferença entre elas
// média das temperaturas (arredondada para 1 casa decimal);
function estatisticasDeTemperaturas(temperaturas){
    let obj = {};
    let min = temperaturas[0];
    let max = temperaturas[0];
    let somaDeTemperaturas = 0;
    let diferenca;
    let media;

    for(let i = 0; i < temperaturas.length; i++){
        somaDeTemperaturas += temperaturas[i];
        if(temperaturas[i] > max){
            max = temperaturas[i];
        }
        if(temperaturas[i] < min){
            min = temperaturas[i];
        }
    }
    diferenca = max - min;
    media = somaDeTemperaturas / temperaturas.length;

    obj.min = min;
    obj.max = max;
    obj.diferenca = diferenca;
    obj.media = media.toFixed(2);
    return obj;
}
//console.log(estatisticasDeTemperaturas([22, 25, 19, 30, 18]));
//__________________________________________________________________________________________________________

// Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
function pilhaDeCartas(){
    let baralho = [];

    let menu = "";

    do{
        menu = parseInt(prompt(`Total de cartas: ${baralho.length}\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`));
       switch(menu){
        case 1:
            let adicionarCarta = prompt("Qual carta?");
            baralho.push(adicionarCarta);
            break;

        case 2:
            if(baralho.length > 0){
                let removerCarta = baralho.pop();
                alert(`Você puxou um(a) ${removerCarta}`);
            }else{
                alert(`Não há nenhuma carta.`);
            }
            break;

        case 3:
            alert("Saindo...");
            break;
            
        default:
            alert(`Opção inválida!`);
            break; 
       } 
    }while(menu !== 3);
}
//pilhaDeCartas();

