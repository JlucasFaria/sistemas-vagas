let vagas = [];

function exibirMenu() {
  return prompt(`Menu:
1 - Listar vagas disponíveis
2 - Criar uma nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair
Digite o número da opção desejada:`);
}

function listarVagas() {
  if (vagas.length === 0) {
    console.log("Não há vagas disponíveis.");
  } else {
    console.log("Vagas disponíveis:");
    vagas.forEach((vaga, index) => {
      console.log(`${index + 1} - ${vaga.titulo}`);
    });
  }
}

function criarNovaVaga() {
  let titulo = prompt("Digite o título da vaga:");
  let descricao = prompt("Digite a descrição da vaga:");
  let novaVaga = { titulo, descricao };
  vagas.push(novaVaga);
  console.log("Nova vaga criada com sucesso!");
}

function visualizarVaga() {
  let indice = prompt("Digite o número da vaga que deseja visualizar:");
  let vaga = vagas[indice - 1];
  if (vaga) {
    console.log(`Vaga: ${vaga.titulo}`);
    console.log(`Descrição: ${vaga.descricao}`);
  } else {
    console.log("Vaga não encontrada.");
  }
}

function inscreverCandidato() {
  let indice = prompt("Digite o número da vaga que deseja se inscrever:");
  let vaga = vagas[indice - 1];
  if (vaga) {
    let candidato = prompt("Digite o nome do candidato:");
    vaga.candidatos = vaga.candidatos || [];
    vaga.candidatos.push(candidato);
    console.log(`Candidato ${candidato} inscrito na vaga ${vaga.titulo}`);
  } else {
    console.log("Vaga não encontrada.");
  }
}

function excluirVaga() {
  let indice = prompt("Digite o número da vaga que deseja excluir:");
  let vaga = vagas[indice - 1];
  if (vaga) {
    vagas.splice(indice - 1, 1);
    console.log("Vaga excluída com sucesso!");
  } else {
    console.log("Vaga não encontrada.");
  }
}

function main() {
  let opcao;
  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarNovaVaga();
        break;
      case "3":
        visualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida.");
    }
  } while (opcao !== "6");
}

main();


