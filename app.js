require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const bcryptjs = require("bcryptjs")

const app = express()
const port = 8080;

app.listen(process.env.PORT, () =>{
  console.log("Servidor corriendo en puerto: 8080")
});

//Handlebars //Reutilizar componentes
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use(express.static('public'));


//Controlador
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/login', (req, res) => {
  res.render('login',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/singup', (req, res) => {
  res.render('singup',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/products-mario_bros', (req, res) => {
  res.render('products-mario_bros',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/products-video_game', (req, res) => {
  res.render('products-video_game',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/products-board_game', (req, res) => {
  res.render('products-board_game',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/add-products', (req, res) => {
  res.render('add-products',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/update-products', (req, res) => {
  res.render('update-products',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/login', (req, res) => {
  res.sendFile( __dirname + '/public/login.html');
})

app.get('/singup', (req, res) => {
  res.sendFile( __dirname + '/public/singup.html');
})

app.get('/products-mario_bros', (req, res) => {
  res.sendFile( __dirname + '/public/products-mario_bros.html');
})

app.get('/products-video_game', (req, res) => {
  res.sendFile( __dirname + '/public/products-video_game.html');
})

app.get('/products-board_game', (req, res) => {
  res.sendFile( __dirname + '/public/products-board_game.html');
})

app.get('/add-products', (req, res) => {
  res.sendFile( __dirname + '/public/add-products.html');
})

app.get('/update-products', (req, res) => {
  res.sendFile( __dirname + '/public/update-products.html');
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
})


