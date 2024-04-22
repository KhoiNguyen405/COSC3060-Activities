// Import express library
const express = require('express');

// Create an instance of express app
const app = express();

// Serve static files in directory 'public'
app.use(express.static('public'));

// Use EJS as view engine
app.set('view engine', 'ejs');

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));

// JS Object for user data
let userData = {
    name: "John Doe",
    age: 27,
    hobbies: ["reading", "hiking", "gaming", "sleeping"]
};

// Define a root route
app.get('/', (req, res) => {
    // Activity 2
    // res.send(`
    // <html>
    //     <head>
    //     <link rel="stylesheet" href="/css/styles.css">
    //     </head>

    //     <body>
    //         <h1>Hello, World</h1>
    //         <img src="/images/sample.png" alt="Sample Image">
    //         <script src="/js/script.js"></script>
    //     </body>
    // </html>
    // `);

    res.render('layout', { user: userData });
});

// Define a form route
app.get('/form', (req, res) => {
    res.render('form');
});

// Handle POST data
app.post('/submit', (req, res) => {
    // Capture POST data
    const userData = {
        name: req.body.name,
        email: req.body.email
    };

    // Render the success template and pass user data
    res.render('success', { user: userData });
})

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});