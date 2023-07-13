const express = require('express')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
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