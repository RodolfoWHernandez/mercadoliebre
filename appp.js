const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, () => {
    console.log('Levanto el server 3030')
})

app.get('/', (req, res) => {
    const archivo = path.join(__dirname, './views/index.html')
    res.sendFile(archivo)
})

app.get('/babbage', (req, res) => {
   const archivoA = path.join(__dirname,'./views/babbage.html')
   res.sendFile(archivoA)
})

app.get('/berners-lee', (req, res) => {
    const archivoB = path.join(__dirname,'./views/berners-lee.html')
    res.sendFile(archivoB)
 })

 app.get('/clarke ', (req, res) => {
    const archivoC = path.join(__dirname,'./views/clarke .html')
    res.sendFile(archivoC)
 })

 app.get('/hamilton', (req, res) => {
    const archivoD = path.join(__dirname,'./views/hamilton.html')
    res.sendFile(archivoD)
 })

 app.get('/hopper', (req, res) => {
    const archivoE = path.join(__dirname,'./views/hopper.html')
    res.sendFile(archivoE)
 })

 app.get('/lovelace', (req, res) => {
    const archivoF = path.join(__dirname,'./views/lovelace.html')
    res.sendFile(archivoF)
 })

 app.get('/turing', (req, res) => {
    const archivoG = path.join(__dirname,'./views/turing.html')
    res.sendFile(archivoG)
 })

 app.use(express.static('public'))