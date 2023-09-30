const express = require('express');
const app = express();
const port = 4000;

// app.get('/', function (req, res) {
//     res.end('GET request to the homepage');
// })

// // POST method route 
// app.post('/', function (req, res) {
//     res.end('POST request to the homepage');
// })

// app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next(); // pass control to the next handler
// }).use(function(req, res, next){
//     res.status(200).send('Access granted!');
// });

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage');
// }).post('/', function (req, res) {
//     res.send('POST request to the homepage');
// }).all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next(); // pass control to the next handler
// }).use(function(req, res, next){
//     res.status(200).send('Access granted!');
// });

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage');
// }).post('/', function (req, res) {
//     res.send('POST request to the homepage');
// }).all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next(); // pass control to the next handler
// }).use(function(req, res, next){
//     res.status(200).send('Access granted!');
// });

// app.get('/name/:user_name', function(req,res) {
//     res.status(200);
//     res.set('Content-type', 'text/html');
//     res.send('<html><body>' +
//     '<h1>Hello ' + req.params.user_name + '</h1>' +
//     '<h5>This is a test</h5>' +
//     '</body></html>'
//     );
// });

// app.get('/([$])book', function(req, res){  
//     res.end('Hello World');  
// });

// app.get('/ab?cd', function (req, res) {
//     res.send('ab?cd');
// })

// app.get('/api/v1/stories/:id', function(req, res, next) { 
//     //do authorization
//     //if not authorized or there is an error 
//     // return next(error);
//     //res.end('Not authorized');
//     //if authorized and no errors 
//     //res.status(401).send('Not Authorized!');
//     console.log('Authorizing...')
//     return next(); 
// }).use(function(req,res, next) {
//    //extract id and fetch the object from the database
//    //assuming no errors, save story in the request object 
//     console.log('Fetching data...')
//     req.data = 'Game Over Mario';
//     return next(); 
// }).use(function(req,res) {
//     console.log('Sending response', req.data)
//     //output the result of the database search 
//     // res.end(req.data);
//     res.status(200).send(req.data);
// });

// const authAdmin = function (req, res, next) { 
//     console.log('Authenticating...')
//     return next(); 
// } 

// const getUsers = function (req, res, next) {
//     console.log('Getting users...')
//     return next();
// }

// const renderUsers = function (req, res) { 
//     console.log('rendering users...')
//     // res.end(); 
//     res.status(200).send('Users rendered');
// }

// const admin = [authAdmin, getUsers, renderUsers];

// app.get('/admin', admin);

// app.route('/book')
//     .get(function (req, res) {
//         res.send('Get a random book');
//     })
//     .post(function (req, res) {
//         res.send('Add a book');
//     })
//     .put(function (req, res) {
//         res.send('Update the book');
//     })

// //Simple request time logger
// const myLogger = function (req, res, next) {
//     console.log("A new request received at " + Date.now());
//     next();
// }

// app.use(myLogger);

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage');
// })

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//     console.log("A request for things received at " + Date.now());
//     next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//     res.send('Things');
// });

// app.use(function (err, req, res, next) {
//     console.error('Middle')
//     res.status(500).send('Something broke!')
// })

// app.get('/', (req, res, next) => {
//     // res.status(200).send('Something broken!')
//     next(new Error('I am passing you an error!'));
// });

const bodyParser = require('body-parser');


//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))


// //To parse json data
app.use(bodyParser.json())

app.post('/', (req, res, next) => {
    console.log(req.body)
    res.end(req.body.name)
});

let path = require('path');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.get('/first', function(req, res){
//     res.render('first');
// });

// app.get('/second', function(req, res){
//     res.render('second', 
//         {
//             title: 'Jemisa', 
//             name: 'Gomycode', 
//             url:"http://www.tutorialspoint.com",
//             user: {
//                 name: 'Wallex',
//                 age: 67
//             }
//         }
//     );
// });

app.listen(port, function() {
    console.log('The server is running, ' +
        'please open your browser at http://localhost:%d', port);
});