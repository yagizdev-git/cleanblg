// Requirements
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers');

// Starting express.js
const app = express();

// Connecting to DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.get('/', postControllers.getAllPosts);
app.get('/add_post', pageControllers.getAddPage);
app.get('/about', pageControllers.getAboutPage);
app.get('/posts/:id', postControllers.getPost);
app.get('/posts/edit/:id', pageControllers.getEditPage);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.editPost);
app.delete('/posts/:id', postControllers.deletePost);

// Starting port
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de çalışmaya başladı...`);
});
