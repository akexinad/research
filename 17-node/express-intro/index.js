// MORGAN IS A LIB THAT SETS UP ERRORS FOR YOU.
const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const app = express();
app.use(express.static('public')); // CSS FILE
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  // res.send("hello world from Express.js");
  const brothers = 'Groucho Harpo Chico Zeppo Gummo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', {randomBrother: randomBrother}); // "These are the equiv of instance variables"
});

app.get('/hello/:name', (req, res) => {
  // res.send('Hello ' + req.params.name);
  res.render('hello.ejs', { name: req.params.name });
});

app.get('/calculator/:x/:y/operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.opertaor === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }
  res.render('calculator.ejs', { answer: answer });
})

app.get('/about', (req, res) => {
  res.send("Something about used engine oil.");
});

app.get('/info', (req, res) => {
  res.json({
    name: 'Fellini',
    hair: 'Brown',
    luckyNumber: Math.random(),
  });
})

// You can use regular expression instead of a string for a path.
// I'm not sure why you would ever do this.
app.get(/[0-9]/, (req, res) => {
  res.send("You asked for a number");
  console.log(req);
});

app.get('/trivia', (req, res) => {
  // fetch some trivia from an API http://numbersapi.com/random/trivia
  axios.get('http://numbersapi.com/random/trivia').then( response => {
    // display the trivia
    res.render('trivia.ejs', { trivia: response.data });
  })

});

app.listen(3000, () => console.log("Now Serving CHOCOLATE! http://localhost:3000/"));
