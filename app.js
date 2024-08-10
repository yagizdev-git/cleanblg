const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Post = require('./models/Post');

// Connecting to DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find();
  res.render('index', {
    posts
  });
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
})

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

/* app.get('/post', (req, res) => {
  res.render('post');
}); */

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});

// Starting port
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışmaya başladı...`);
});