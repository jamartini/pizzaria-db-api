const express = require("express")
const CardapioControlador = require("../controlador/CardapioControlador")
const rota = express.Router()

const cardapio = new CardapioControlador()

rota.post("/pizza",(requisicao, resposta) => cardapio.salvarCardapio(requisicao, resposta))
module.exports = rota