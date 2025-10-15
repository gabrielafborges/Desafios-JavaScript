// Cadastro de Imóveis
// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações:
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.


function cadastroDeImoveis(){

    let imoveisCadastrados = [];

    let menu;

    
        do{
            menu = parseInt(prompt(`Bem-vindo(a) ao cadastro de imóveis!\nTotal de imóveis: ${imoveisCadastrados.length}\n\nEscolha uma opção:\n1 - Novo Imóvel\n2 - Listar Imóveis\n3 - Sair`));

            switch(menu){
                case 1:
                  let nomeDoProprietario = prompt(`Qual seu nome proprietário(a)?`);
                  let quantidadeDeQuartos = parseInt(prompt(`Quantos quartos tem a propriedade?`));
                  let quantidadeDeBanheiros = parseInt(prompt(`Quantos banheiros tem a propriedade?`));
                  let possuiGaragem = prompt(`A propriedade possui garagem?(Sim/Não)`);
                  
                  let novoImovel = {
                          nome: nomeDoProprietario,
                          quartos: quantidadeDeQuartos,
                          banheiros: quantidadeDeBanheiros,
                          temGaragem: possuiGaragem
                        };
                  let confirmarSalvamento = confirm(`Salvar este imóvel?\n${novoImovel.nome}\n${novoImovel.quartos}\n${novoImovel.banheiros}\n${novoImovel.temGaragem}`);
                  if(confirmarSalvamento){
                      imoveisCadastrados.push(novoImovel);
                  }
                break;
                
                case 2:
                    if(imoveisCadastrados.length > 0){
                        for(let i = 0; i < imoveisCadastrados.length; i++){
                            alert(`Imóvel ${i+1}\nProprietário: ${imoveisCadastrados[i].nome}\nQuartos: ${imoveisCadastrados[i].quartos}\nBanheiros: ${imoveisCadastrados[i].banheiros}\nPossui garage? ${imoveisCadastrados[i].temGaragem}`);
                        }
                    }else{
                        alert(`Não há nenhum imóvel cadastrado.`);
                    }
                    break;

                case 3:
                    alert(`Encerrando...`);
                    break;

                default:
                    alert(`Resposta Inválida!`) ;

                }
            
        }while(menu !== 3);
    }
        
cadastroDeImoveis();