const express = require('express');
const app = express();
const port = 4000;
const products = require('./products');

app.use('/products', products);

app.listen(port, function() {
    console.log('The server is running, ' +
        'please open your browser at http://localhost:%d', port);
});