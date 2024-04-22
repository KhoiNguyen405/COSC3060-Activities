// Import express library
const express = require('express');

// Create an instance of express app
const app = express();

// Serve static files in directory 'public'
app.use(express.static('public'));

// Use EJS as view engine
app.set('view engine', 'ejs');

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

    // Activity 3
    res.render('index');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});