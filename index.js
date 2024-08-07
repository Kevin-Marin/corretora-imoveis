const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js");
const cliente = require("./modulos/cliente.js");
const corretor = require("./modulos/corretor.js");
const imovel = require("./modulos/imovel.js");
const venda = require("./modulos/venda.js");

const menuPrincipal = () => {
  console.log(`
        GERENCIAMENTO DE CORRETORA DE IMÓVEIS
        `);

  while (true) {
    console.log(`
                  ESCOLHA O MÓDULO QUE QUER GERENCIAR:
                  
                  1 - CORRETORA
                  2 - CLIENTE
                  3 - CORRETOR
                  4 - IMÓVEL
                  5 - VENDA
                  0 - SAIR
                  `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuCorretora();
        break;

      case 2:
        menuCliente();
        break;

      case 3:
        menuCorretor();
        break;
      case 4:
        menuImovel();
        break;
      case 5:
        menuVenda();
        break;
      case 0:
        process.exit();
        break;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCliente = () => {
  console.log("GERENCIAMENTO DE CLIENTE");
  while (true) {
    console.log(`
                1 - CADASTRAR CLIENTE
                2 - LISTAR CLIENTES
                3 - ATUALIZAR CLIENTE
                4 - EXCLUIR CLIENTE
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        cliente.store();
        break;
      case 2:
        cliente.index();
        break;
      case 3:
        cliente.update();
        break;
      case 4:
        cliente.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCorretor = () => {
  console.log("GERENCIAMENTO DE CORRETOR");
  while (true) {
    console.log(`
                1 - CADASTRAR CORRETOR
                2 - LISTAR CORRETORES
                3 - ATUALIZAR CORRETOR
                4 - EXCLUIR CORRETOR
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        corretor.store();
        break;
      case 2:
        corretor.index();
        break;
      case 3:
        corretor.update();
        break;
      case 4:
        corretor.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCorretora = () => {
  console.log("GERENCIAMENTO DE CORRETORA");
  while (true) {
    console.log(`
              1 - CADASTRAR CORRETORA
              2 - LISTAR CORRETORAS
              3 - ATUALIZAR CORRETORA
              4 - EXCLUIR CORRETORA
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        corretora.store();
        break;
      case 2:
        corretora.index();
        break;
      case 3:
        corretora.update();
        break;
      case 4:
        corretora.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuImovel = () => {
  console.log("GERENCIAMENTO DE IMÓVEL");
  while (true) {
    console.log(`
                1 - CADASTRAR IMÓVEL
                2 - LISTAR IMÓVEIS
                3 - ATUALIZAR IMÓVEL
                4 - EXCLUIR IMÓVEL
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        imovel.store();
        break;
      case 2:
        imovel.index();
        break;
      case 3:
        imovel.update();
        break;
      case 4:
        imovel.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuVenda = () => {
  console.log("GERENCIAMENTO DE VENDA");
  while (true) {
    console.log(`
                1 - CADASTRAR VENDA
                2 - LISTAR VENDAS
                3 - ATUALIZAR VENDA
                4 - EXCLUIR VENDA
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        venda.store();
        break;
      case 2:
        venda.index();
        break;
      case 3:
        venda.update();
        break;
      case 4:
        venda.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

menuPrincipal();
