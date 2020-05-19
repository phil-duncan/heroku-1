const http = require('http');
const express = require('express');
const app = express();

/*

app.get('/', (req, res) => {
    res.send('App Main View')
}) //Safe method



app.post('/form', function (req, res) {
  res.send('POST request to the homepage')
})  //Non Safe method

app.all('/paywall', function (req, res, next) {
  console.log('Accessing the protected section ...')
  next() //routes controller on to the next handler
})


*/

const publicRouter = require('./routes/public');
const privateRouter = require('./routes/private');

app.use('/', publicRouter);
app.use('/p', privateRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

