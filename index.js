const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

app.use(express.urlencoded());


app.listen(process.env.PORT || 3000, () => {
    console.log('Levanto el server 3000');
}) 

app.get('/', (req, res) => {
    const archivo = path.join(__dirname, './views/home.html')
    res.sendFile(archivo)
})

app.get('/registro', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.post('/registro', (req, res) => {
     res.redirect('/')
    })


