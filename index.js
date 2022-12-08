// importando o express para a aplicação. Maiores explicação no final do arquivo
const express = require("express");

// iniciando a aplicação com a função express()
const app = express();

/********************************************************/
// ROTA PADRÃO

// definição da rota para o método GET
app.get("/", (req, res) => {
  // endereço de acesso: http://localhost:3000/
  res.send("Página inicial");
});

/********************************************************/
// ROTAS PARA OS consumidor

// definição da rota para o método GET
// utilizado para obter dados/página de um servidor
app.get("/consumidor", (req, res) => {
  // endereço de acesso: http://localhost:3000/consumidor
  res.send("consumidor - get");

  // aqui será implementado o código para  para buscar os dados dos consumidors
});

// definição da rota para o método POST
// utilizado para criar algo novo no servidor (BD)
app.post("/consumidor", (req, res) => {
  // endereço de acesso: http://localhost:3000/consumidor
  res.send("consumidor - post");

  // aqui será implementado o código para salvar consumidors
});

// definição da rota para o método PUT
// utilizado para atualizar algo existente
app.put("/consumidor", (req, res) => {
  // endereço de acesso: http://localhost:3000/consumidor
  res.send("consumidor - put");

  // aqui será implementado o código para atualizar dados de consumidor existente
});

// definição da rota para o método DELETE
// utilizado para excluir algo existente
app.delete("/consumidor", (req, res) => {
  // endereço de acesso: http://localhost:3000/consumidor
  res.send("consumidor - delete");

  // aqui será implementado o código para excluir um consumidor
});

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));

/**
 * Express
 *
 * O Express é um framework que permite que possamos criar um Servidor
 * Web para aplicações Web. Ele tem sido bastante utilizado para criações
 * de API Rest e aplicações Web. Considerado minimalista e simples, porém
 * contém um conjunto de configurações robustas e seguras.
 *
 * Para maiores informações, acesse o material abaixo.
 * https://expressjs.com/pt-br/
 */