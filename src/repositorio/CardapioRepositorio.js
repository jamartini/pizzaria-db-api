const {PrismaClient} = require("@prisma/client");

class CardapioRepositorio {
    constructor() {
        this.prisma = new PrismaClient()
    }

    salvarCardapio(dados) {
        return this.prisma.cardapio.create({
            data:dados
        });
    }

    listarTodos() {
        return this.prisma.cardapio.findMany()
    }

    atualizarItens(dados, id) {
        return this.prisma.cardapio.update({
            where: {
                id: id,
              },
              data: {
                dados,
              },
        })
    }
}

module.exports = CardapioRepositorio