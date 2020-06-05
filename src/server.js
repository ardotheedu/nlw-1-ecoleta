const express = require("express")
const server = express()

// configurar pasta publica, tornar todos os arquivos na pasta public de forma publica
// Assim, não é preciso colocar public/assests... ele ja vai esta disponivel

server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



// Configurar caminho da aplicação
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "um titulo" })
})


server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


// ligar o servidor
server.listen(3000)