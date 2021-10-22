require('dotenv').config();
const express = require('express')
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT;

//Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static( 'public'));

 app.get('/',  (req, res) => {
    res.render('home', {
     nombre: 'Angel Betancourt',
     titulo: 'Curso de Node'
 });

});

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Angel Betancourt',
     titulo: 'Curso de Node'
    });
   });

   app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Angel Betancourt',
     titulo: 'Curso de Node'
    });
   });

   app.get('/home',  (req, res) => {
    res.render('home', {
        nombre: 'Angel Betancourt',
     titulo: 'Curso de Node'
    });
   });


app.get('*', (req, resp)=> {
    resp.sendFile(__dirname + '/public/index.html');
})

app.listen(port,()=> {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
