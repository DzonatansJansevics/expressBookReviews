const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
    const regd_users = express.Router();
    regd_users.use(bodyParser.json()); // Parse JSON requests
    
    // In-memory user database (replace with your actual database or storage mechanism)
    const usersDatabase = {};
    
    function isValidUser(username, password) {
        const user = usersDatabase[username];
        return user && user.password === password;
    }
    regd_users.post('/login', (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
