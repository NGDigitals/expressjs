const express = require('express');
const router = express.Router();

// post page route.
router.route('/product/:slug')
    .all(function(req, res, next) {
        // runs each time
        // we can fetch the product by id from the database
        console.log('Middleware...')
        next();
    }) 
    .get(function(req, res, next) {
        //render product
        res.end('Getting...')
    })
    .put(function(req, res, next) {
        //update product
        res.end('Putting...')
    })
    .post(function(req, res, next) {
        //create new product 
        res.end('Posting...')
    }) 
    .delete(function(req, res, next) { 
        //remove product 
        res.end('Deleting...')
    });

module.exports = router