// REPL

// R -> Read
// E -> Eval
// P -> Print
// L -> Loop

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World')
}).listen(8081);

console.log('Server running on port 8081');



