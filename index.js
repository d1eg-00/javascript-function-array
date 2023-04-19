const prompt = require('prompt-sync')();
var array_movel = [];
var codigo = 0;

do {
  console.log("Sistema de Cadastro de Móveis");
  console.log("1 - Inserir Móvel");
  console.log("2 - Excluir Móvel");
  console.log("3 - Listar Móveis");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Móvel...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let categoria = prompt("Digite a categoria: ");
    let fabricante = prompt("Digite o fabricante: ");
    let preco = prompt("Digite o preço: ");
    let peso = prompt("Digite o peso: ");

    // Neste trecho estamos declarando um objeto
    const movel = {
      codigo: codigo,
      categoria: categoria,
      fabricante: fabricante,
      preco: preco,
      peso: peso,
    };
    // Chamar a função inserir
    inserir_movel(movel);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Móvel...\n");
    let codigo = prompt("Digite o código do Móvel: ");

      excluir_movel(codigo)
    // Chamar a função excluir
  } else if (opcao == 3) {
    console.log("\n\nListando Móveis...\n");
    // Chamar a função listar
    listar_movel();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_movel(movel) {
  // Implementar corpo da função
  array_movel.push(movel);
}

function excluir_movel(codigo) {
  // Implementar corpo da função
  for(let i = 0; i < array_movel.length; i ++){
    if(array_movel[i]['codigo'] == codigo){
      array_movel.splice(i,1);
    }
  }
}

function listar_movel() {
  // Implementar corpo da função
  for(let i = 0; i < array_movel.length; i ++){
    console.log(`${array_movel[i]['codigo']}: ${array_movel[i]['categoria']} - ${array_movel[i]['fabricante']} - ${array_movel[i]['preco']} - ${array_movel[i]['peso']}`);
   }
};


