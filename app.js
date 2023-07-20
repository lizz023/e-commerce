require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

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

app.get('/products-toys', (req, res) => {
  res.render('products-toys',{
    nombre: 'Elizabeth Restrepo',
    titulo: 'E-commerce'
  });
})

app.get('/products-game_console', (req, res) => {
  res.render('products-game_console',{
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

app.get('/login', (req, res) => {
  res.sendFile( __dirname + '/public/login.html');
})

app.get('/products-toys', (req, res) => {
  res.sendFile( __dirname + '/public/products-toys.html');
})

app.get('/products-toys', (req, res) => {
  res.sendFile( __dirname + '/public/products-game_console.html');
})

app.get('/products-toys', (req, res) => {
  res.sendFile( __dirname + '/public/products-board_game.html');
})


app.get('/add-products', (req, res) => {
  res.sendFile( __dirname + '/public/add-products.html');
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hello mundo en su respectiva ruta')
  })

