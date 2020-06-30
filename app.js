const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// EXPRESS APP
const app = express();

// Connect to mongodb
mongoose
  .connect('mongodb://localhost:27017/node-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(__dirname + '/public'));

// use body-parser
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// rautes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// Blog rautes
app.use('/blogs', blogRoutes);

// about page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

const PORT = process.env.PORT || 3000;

// Listen for request
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} `);
});
