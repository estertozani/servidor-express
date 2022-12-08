// importar o módulo express
const express = require("express");

// método Router para lidar com as rotas
const rotas = express.Router();

// GET
rotas.get("/", (req, res) => {
  res.send("consumidor - GET");
});

// POST
rotas.post("/", (req, res) => {
  res.send("consumidor - POST");
});
// PUT
rotas.put("/:id", (req, res) => {
  res.send("consumidor - PUT");
});

// DELETE
rotas.delete("/:id", (req, res) => {
  res.send("consumidor - DELETE");
});

// exportar as rotas para vendedor
module.exports = rotas; 