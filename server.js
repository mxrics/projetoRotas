const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    return res.send('Bem vindo(a) a nossa página de Moda.');
});

app.get('/produto', (req, res)=>{
    return res.send('Home');
});

app.get('/cardapio', (req, res)=>{
    return res.send('Sapatos');
});

app.get('/aprenda', (req, res)=>{
    return res.send('Vestidos');
});

app.get('/maracuja', (req, res)=>{
    return res.send('Partes De Baixo');
});

app.get('/contatos', (req, res)=>{
    return res.send('Partes De Cima');
});

app.listen('3344', console.log('Servidor ON na porta 3344'));