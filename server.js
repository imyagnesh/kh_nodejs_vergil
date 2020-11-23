const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hello', function (req, res) {
  res.send('hello function');
});

app.listen(8080, function () {
  console.log('post listning on 8080');
});
// const client = require('./client');

// console.log(client.greet);
// console.log(client.greet1);

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// http
//   .createServer(function (request, response) {
//     console.log('🚀 ~ file: server.js ~ line 7 ~ request', request);
//     const { pathname } = url.parse(request.url);

//     console.log(`Reequest for ${pathname}`);

//     fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//         console.log(err);
//         response.writeHead(404, {
//           'Content-Type': 'text/html',
//         });
//       } else {
//         response.writeHead(200, {
//           'Content-Type': 'text/html',
//         });
//         response.write(data.toString());
//       }
//       response.end();
//     });
//   })
//   .listen(8081);

// console.log('server runing of 8081');
