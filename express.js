const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    const archivo = path.join(__dirname, './views/index.html');
    res.sendFile(archivo);
});

app.get('/despedida', (req, res) => {
    res.send('chau!');
});

app.listen(3000, ()=> {
    console.log ('Bien ahi, levantaste el server');
});