const CardapioRepositorio = require("../repositorio/CardapioRepositorio")

class CardapioServico {
    constructor() {
        this.cardapioRepositorio = new CardapioRepositorio()
    }

    async salvarCardapio(dados) {
        const {
            nome, preco, descricao, ingredientes
        } = dados
        if (!nome || !preco || !descricao || !ingredientes) {
            throw new Error("Todos os campos são necessários!")
        }
        return await this.cardapioRepositorio.salvarCardapio(dados)
        }
}

module.exports = CardapioServico