const express = require("express")
const cardapioRotas = require("./rotas/CardapioRotas")
const app = express()

app.use(express.json())
app.use("/api", cardapioRotas)

const PORT = 8989
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})