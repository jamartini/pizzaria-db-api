const {PrismaClient} = require("@prisma/client");

class CardapioRepositorio {
    constructor() {
        this.prisma = new PrismaClient()
    }

    salvarCardapio(dados) {
        return this.prisma.cardapio.create({
            dados
        });
    }

    listarCardapio() {
        return this.prisma.cardapio.findMany()
    }

    atualizarItem(id, dados) {
        return this.prisma.cardapio.update({
            where: {id},
            data: {dados}
        })
    }
}

module.exports = CardapioRepositorio