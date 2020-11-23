const fs = require('fs');
const path = require('path');
const net = require('net');
const net = require('net');

// const arr = [...Array(10000000).keys()];

// console.time('for');
// for (let i = 0; i < arr.length; i++) {}
// console.timeEnd('for');

// console.time('while');
// var i = 0;
// while (i < arr.length) {
//   i++;
// }
// console.timeEnd('while');

// console.time('forEach');
// arr.forEach(() => {});
// console.timeEnd('forEach');

console.table(arr);

// console.error('hell');

console.warn('warning');

// const interval = setInterval(function () {
//   console.log('hello');
// }, 100);

// setTimeout(() => {
//   clearInterval(interval);
// }, 1000);

// const timer = setTimeout(function () {
//   console.log('hello');
// }, 10000);

// setTimeout(function () {
//   clearTimeout(timer);
//   console.log('timer cleared');
// }, 5000);

// console.log(__filename);
// console.log(__dirname);

// fs.mkdir('/tmp/test', function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log('Dir created succeessfully');
// });

// fs.rmdir('/tmp/test', function (err) {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log('Dir removed succeessfully');
// });

// fs.readdir(path.resolve(__dirname, 'temp'), function (err, files) {
//   if (err) {
//     return console.error(err);
//   }
//   for (let i = 0; i < files.length; i++) {
//     const element = files[i];
//     console.log(element);
//   }
// });

// var buff = new Buffer(1024);

// open file
// read / manipulate fie
// close file

// fs.unlink('output2.txt', function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('file is is deleted');
// });

// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('file is oppened');
//   console.log('start reading');

//   fs.truncate(fd, 10, function (err1) {
//     if (err1) {
//       console.error(err1);
//     }
//   });

//   fs.close(fd, function () {});

//   //   fs.read(fd, buff, 0, buff.length, 0, function (err1, bytes) {
//   //     if (err1) {
//   //       console.error(err1);
//   //     }

//   //     if (bytes > 0) {
//   //       console.log(buff.toString());
//   //     }
//   //   });
// });

// r -> reading
// r+ -> reading and writing , if file not exist then it will give error
// rs -> open file for reading in sync mode
// rs+ -> open file for reading and writing in sync mode, if file not exist then givee error
// w -> open for writing
// wx -> like w only but fails if the path exist
// w+ -> for read and write and if file not exist then create new file and open
// wx+ -> samw as w+  + wriring as well
// a -> just for append with other file
// fs.open('input.txt', 'w+', function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('file is opened');
// });

// fs.stat('input.txt', function (err, states) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('fs.stat -> states', states);
//   console.log(states.isFile());
//   console.log(states.isDirectory());
//   console.log(states.isBlockDevice());
// });

// fs.writeFile('output2.txt', 'creeated using buffeer', function (err) {
//   if (err) {
//     console.error(err);
//   }

//   fs.readFile('output2.txt', function (err1, data) {
//     if (err1) {
//       console.error(err1);
//     }
//     console.log(data.toString());
//   });
// });

// asynchronous
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data.toString());
// });

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('check sync code');

// Stream
// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('unzipped.txt'));

// var readStream = fs.createReadStream('input.txt');

// var writeStream = fs.createWriteStream('output1.txt');

// readStream.pipe(writeStream);

// var writeStream = fs.createWriteStream('output.txt');
// writeStream.write('this file is created using node js', 'utf8');
// writeStream.end();

// writeStream.on('finish', function () {
//   console.log('file is creeated');
// });

// writeStream.on('error', function (err) {
//   console.log(err.stack);
// });

// var readStream = fs.createReadStream('input.txt');
// readStream.setEncoding('utf8');

// var data = '';
// readStream.on('data', function (chunk) {
//   console.log('chunk', chunk);
//   data = data + chunk;
// });

// readStream.on('end', function () {
//   console.log(data);
// });

// readStream.on('error', function (err) {
//   console.log(err.stack);
// });

// Buffers
// ->

// Method 1
// var buf = new Buffer(10);

// Method 2
// const buf = new Buffer([10, 20, 30, 40, 50]);

// Method 3
// var buf = new Buffer('hello, my name is yagnesh', 'utf-8')

// var buf = new Buffer(256);

// var data = buf.write('hello world');

// console.log(data);

// var buf = new Buffer('ABCDE');
// var buf1 = new Buffer('ABCDE');
// var result = buf.compare(buf1);

// var buff = new Buffer('Hello, How are you');
// var buff1 = new Buffer('i m fine');

// var buff2 = Buffer.concat([buff, buff1]);

// console.log(buff2.toString());

// var buff1 = buff.slice(0, 5);

// console.log(buff1.toString());
// var buff1 = new Buffer(10);

// buff.copy(buff1);

// console.log(buff1.toString());

// console.log(result);
// var buf2 = Buffer.concat([buf, buf1]);

// console.log(buf2.toString());

// var json = buf.toJSON(buf);

// console.log(json);

// for (let index = 0; index < 26; index++) {
//   buf[index] = index + 97;
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii', 0, 5));
// console.log(buf.toString('utf8'));
// console.log(buf.toString(undefined));

// const events = require('events');

// const eventEmmiter = new events.EventEmitter();

// const lisner1 = function listner1() {
//   console.log('lisner 1 executed');
// };

// const lisner2 = function lisner2() {
//   console.log('lisner 2 executed');
// };

// eventEmmiter.addListener('connection', lisner1);
// eventEmmiter.on('connection', lisner2);

// eventEmmiter.emit('connection');

// eventEmmiter.removeListener('connection', lisner1);

// eventEmmiter.emit('connection');

// // var connectHandler = function connected() {
// //     console.log('connected')
// //     eventEmmiter.emit('data_recived')
// // }

// // // register connection event
// // eventEmmiter.once('connection', connectHandler);

// // // register data_recived event
// // eventEmmiter.on('data_recived', function() {
// //     console.log('data recieved succesfully')
// // })

// // // call connection event
// // eventEmmiter.emit('connection');
// // eventEmmiter.emit('connection');

// // // addLisner
// // // once
// // // removeLisner
// // // removeAllLisner
// // // setMaxLisner(n)
