const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
resp = ""   
response.render('rayane',{resp})


})
app.get('/soma',(request,response) =>{
let n1 = parseFloat(request.query.n1)
let n2 = parseFloat(request.query.n2)
let n3 = request.query.n3
let resp = n1+n2

response.render('rayane',{resp})
console.log(`${resp}`)
})
app.get('/div',(request,response) =>{
    let n1 = parseFloat(request.query.n1)
    let n2 = parseFloat(request.query.n2)
    let n3 = request.query.n3
    let resp = n1/n2
    
    response.render('rayane',{resp})
    console.log(`${resp}`)
    })
    app.get('/mult',(request,response) =>{
        let n1 = parseFloat(request.query.n1)
        let n2 = parseFloat(request.query.n2)
        let n3 = request.query.n3
        let resp = n1*n2
       
        response.render('rayane',{resp})
        console.log(`${resp}`)
        })
        app.get('/sub',(request,response) =>{
            let n1 = parseFloat(request.query.n1)
            let n2 = parseFloat(request.query.n2)
            let n3 = request.query.n3
            let resp = n1-n2
            
            response.render('rayane',{resp})
            console.log(`${resp}`)
            })

const port = 8080
app.listen(port)
console.log(`O servidor está rodando na porta: ${port}`)