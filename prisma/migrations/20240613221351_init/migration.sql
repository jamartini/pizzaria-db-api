-- CreateTable
CREATE TABLE "Cardapio" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" VARCHAR(400) NOT NULL,
    "ingredientes" VARCHAR(400) NOT NULL,

    CONSTRAINT "Cardapio_pkey" PRIMARY KEY ("id")
);
