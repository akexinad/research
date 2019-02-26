const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const PORT = 3000

const app = express();
app.use(express.static('public')); // FOR ALL FILES IN THE PUBLIC FOLDER
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/search', (req, res) => {
  // res.send(req.query.title);
  // Make an axis request for the book
  const booksURL = `https://www.googleapis.com/books/v1/volumes?q=title:${ req.query.title }`;
  console.log(booksURL);
  axios.get(booksURL).then( result => {
    const cover = result.data.items[0].volumeInfo.imageLinks.thumbnail;
    const title = result.data.items[0].volumeInfo.title;
    res.render('result.ejs', {
      cover: cover,
      title: title,
    });
  })
});

app.listen(3000, () => console.log(`NOW SERVING ICE CREAM!, http://localhost:${ PORT }`));
