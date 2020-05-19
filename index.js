const http = require('http');


let onRequest = (request, response) => {
    console.log('User made a request');
    console.log(request.url);
    console.log(request.method);
    response.end('App Main Page');

}

http.createServer(onRequest).listen(3000, '127.0.0.1');