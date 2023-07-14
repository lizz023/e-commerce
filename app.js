const express = require('express');
const hbs = require('hbs');

const app = express()
const port = 8080;

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

app.get('/login', (req, res) => {
  res.sendFile( __dirname + '/public/login.html');
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hello mundo en su respectiva ruta')
  })

app.listen(port, () => {
    console.log(`Example http://localhost: ${port}`)
})