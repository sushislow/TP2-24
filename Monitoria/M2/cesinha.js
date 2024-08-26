const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('conta', {resultado: ""})
})


app.post('/enderecoNome', (request, response) => {
    resultado = request.body.nome
    response.render('cont')
})


const port = 8080
app.listen(port)
console.log(`O servidor está rodando na porta: ${port}`)