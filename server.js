'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('node-static'),
    file = new staticFile.Server('./Client'),
    requestHandlers = require('./requestHandlers');

function start () {
   function onRequest (request, response) {
       var pathname = url.parse(request.url).pathname;

       if (pathname === '/getTime') {
         response.write(requestHandlers.getCurrentTime());
         response.end();
       }

       file.serve(request, response);
   }

   http.createServer(onRequest).listen(3000);
   console.log('Server running on port 3000');
}

exports.start = start;