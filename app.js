const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

// Template Engine
app.set('view engine', 'ejs');

// Statics
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışmaya başladı...`);
});