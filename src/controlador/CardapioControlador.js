const CardapioServico = require("../servico/CardapioServico")

class CardapioControlador {P
    constructor() {
        this.cardapioServico = new CardapioServico()
    }

    async salvarCardapio(requisicao, resposta){
        try {
            const dados = requisicao.body;
            const pizza = await this.cardapioServico.salvarCardapio(dados)
            resposta.status(201).json(pizza)
        } catch (erro){
            resposta.status(400).json('erro')
        }
    }
}

module.exports = CardapioControlador