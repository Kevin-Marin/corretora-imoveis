const prompt = require("prompt-sync")();
const corretora = require("./corretora.js");
const imovel = require("./imovel.js");
const corretor = require("./corretor.js")

const db = [];
let proxId = 1;

const model = (id = proxId++) => {
  let id_imovel = 0;
  let id_corretora = 0;

  if (imovel.index()) {
    id_imovel = parseInt(prompt("ID do imóvel: "));
  } else {
    console.log("Cadastre um imóvel para realizar uma venda");
  }

  if (corretora.index()) {
    id_corretora = parseInt(prompt("ID da corretora: "));
  } else {
    console.log("Cadastre uma corretora para realizar uma venda");
  }

  if (corretor.index()) {
    id_corretor = parseInt(prompt("ID do corretor: "));
  } else {
    console.log("Cadastre um corretor para realizar uma venda");
  }

  const data = prompt("Data da venda (dd/mm/aaaa): ");
  const valor = parseFloat(prompt("Valor da venda: "));

  if (
    imovel.show(id_imovel) &&
    corretora.show(id_corretora) &&
    corretor.show(id_corretor) &&
    valor > 0 &&
    data.match(/^\d{2}\/\d{2}\/\d{4}$/) // Check date format
  ) {
    return {
      id,
      id_imovel,
      id_corretora,
      id_corretor,
      data,
      valor
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro concluído com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex(el => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy
};
