// importar o módulo express
const express = require("express");

// importar as rotas da aplicação
const consumidorRotas = require("./routes/consumidor");
const vendedorRotas = require("./routes/vendedor");

// instanciar o módulo express
const app = express();

// definição da rota para o método GET
app.get("/", (req, res) => {
    // endereço de acesso: http://localhost:3000/
    res.send("Página inicial");
  });

// utilizar as rotas definidas em outro arquivo
app.use("/consumidor", consumidorRotas);
app.use("/vendedor", vendedorRotas);

// número da porta em que o servidor irá rodar
const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));