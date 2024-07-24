const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
resp = ""   
response.render('conta',{resp})


})
app.post('/resultado',(request,response) =>{
let n1 = parseFloat(request.body.n1)
let n2 = parseFloat(request.body.n2)
let resp = n1/n2

response.render('conta',{resp})
console.log(`${resp}`)
})

const port = 8080
app.listen(port)
console.log(`O servidor está rodando na porta: ${port}`)