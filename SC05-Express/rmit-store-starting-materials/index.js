// This load the products as a javascript object from products.js file
const products = require('./products');
// console.log(products);

// Fill in your code here to build NodeJS + Express + EJS web application
// Import express framework
const express = require('express');

// Create an instance of express app
const app = express();

// Use EJS as view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('static-website-materials'));

// Root
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});