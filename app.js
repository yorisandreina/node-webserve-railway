const express = require('express');
const hbs = require("hbs");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");


// Servir contenido estático
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Andreina Yoris',
    titulo: 'Curso de node'
  });
});

app.get("/generic.html", (req, res) => {
  res.render("generic", {
    nombre: "Andreina Yoris",
    titulo: "Curso de node",
  });
});

app.get("/elements.html", (req, res) => {
  res.render("elements", {
    nombre: "Andreina Yoris",
    titulo: "Curso de node",
  });
});

app.get("*", (req, res) => {
  res.send("4040 | Page not found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})