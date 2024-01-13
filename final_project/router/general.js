const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');


public_users.post("/register", (req,res) => {
    const newUser = {
        username,
        email,
        password, // In practice, you should hash and salt the password
    };

    usersDatabase[faker] = newUser;

    // You may want to generate and send a token for authentication here

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});


// Get the book list available in the shop
public_users.get('/',function (req, res) {
    const books = {
        1: {"author": "Chinua Achebe", "title": "Things Fall Apart", "reviews": {} },
        2: {"author": "Hans Christian Andersen", "title": "Fairy tales", "reviews": {} },
        3: {"author": "Dante Alighieri", "title": "The Divine Comedy", "reviews": {} },
        4: {"author": "Unknown", "title": "The Epic Of Gilgamesh", "reviews": {} },
        5: {"author": "Unknown", "title": "The Book Of Job", "reviews": {} },
        6: {"author": "Unknown", "title": "One Thousand and One Nights", "reviews": {} },
        7: {"author": "Unknown", "title": "Nj\u00e1l's Saga", "reviews": {} },
        8: {"author": "Jane Austen", "title": "Pride and Prejudice", "reviews": {} },
        9: {"author": "Honor\u00e9 de Balzac", "title": "Le P\u00e8re Goriot", "reviews": {} },
        10: {"author": "Samuel Beckett", "title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} },
      };
      // Route to get the list of books for public users
      app.get('/', function (req, res) {
        const booksList = Object.values(books);
      
        res.json(booksList);
      });//Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const books = {
    1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
    2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
    3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
    4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
    5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
    6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
    7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
    8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
    9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
    10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
};
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    public_users.get('/author/:author', function (req, res) {
        const requestedAuthor = req.params.author;
    
        // Convert books object to an array and sort by author
        const sortedBooks = Object.values(books).sort((a, b) => a.author.localeCompare(b.author));
    
        // Filter books by the requested author
        const authorBooks = sortedBooks.filter(book => book.author === requestedAuthor);
    
        if (authorBooks.length > 0) {
            // Books found for the author, send them as a JSON response
            res.json(authorBooks);
        } else {
            // No books found for the author, send a 404 response
            res.status(404).json({ error: 'Books not found for the author' });
        }
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const requestedTitle = req.params.title;

    // Search for the book with the requested title
    const book = Object.values(books).find(book => book.title.toLowerCase() === requestedTitle.toLowerCase());

    if (book) {
        // Book found, send it as a JSON response
        res.json(book);
    } else {
        // Book not found, send a 404 response
        res.status(404).json({ error: 'Book not found' });
    }

  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const book = books[requestedISBN];

    if (book) {
        // Check if there are reviews for the book
        const bookReviews = reviews[requestedISBN] || [];

        // Send the reviews as a JSON response
        res.json({ book, reviews: bookReviews });
    } else {
    
        res.status(404).json({ error: 'Book not found' });
    }
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Define the endpoint to get the list of books
const booksEndpoint = 'https://api.example.com/books'; // Replace with your actual endpoint

// Async function to fetch the list of books using Axios
async function getBooks() {
    try {
        const response = await axios.get(booksEndpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error.message);
        throw error;
    }
}

// Define a route to get the list of books
app.get('/books', async (req, res) => {
    try {
        const books = await getBooks();
        res.json({ books });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");
  const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Define the endpoint to get book details by author
const booksByAuthorEndpoint = 'https://api.example.com/books/author'; // Replace with your actual endpoint

// Async function to fetch book details by author using Axios
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${booksByAuthorEndpoint}/${author}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books by author ${author}:`, error.message);
        throw error;
    }
}

// Define a route to get book details by author
app.get('/books/author/:author', async (req, res) => {
    const author = req.params.author;

    try {
        const books = await getBooksByAuthor(author);
        res.json({ books });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");
