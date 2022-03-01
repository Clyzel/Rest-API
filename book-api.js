const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Where we will keep books
let books = [{
    isbn: '9783746944647',
    title: 'Your Invisible Power',
    author: 'Geneviève Behrend',
    'Publisher Date': '1921',
    'Number of Pages': '132'
  }, {
    isbn: '9780530850597',
    title: 'The Edinburgh Lectures',
    author: 'Thomas Troward',
    'Publisher Date': '1904',
    'Number of Pages': '55'
  }, {
    isbn: '9783746944647',
    title: 'Your Invisible Power',
    author: 'Geneviève Behrend',
    'Publisher Date': '1921',
    'Number of Pages': '132'
  }, {
    isbn: '9781258860820',
    title: 'Feeling Is The Secret',
    author: 'Neville Goddard',
    'Publisher Date': '1944',
    'Number of Pages': '44'
  }, {
    isbn: '9780671627799',
    title: 'The Game of Life and How to Play It',
    author: 'Florence Scovel Shinn',
    'Publisher Date': 'June 1, 1978',
    'Number of Pages': '95'
  }];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, '/book-list.html'));
 });

app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, '/new-book.html'));
});


app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
