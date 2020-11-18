const events = require('events');

const eventEmmiter = new events.EventEmitter();

const lisner1 = function listner1() {
  console.log('lisner 1 executed');
};

const lisner2 = function lisner2() {
  console.log('lisner 2 executed');
};

eventEmmiter.addListener('connection', lisner1);
eventEmmiter.on('connection', lisner2);

eventEmmiter.emit('connection');

eventEmmiter.removeListener('connection', lisner1);

eventEmmiter.emit('connection');

// var connectHandler = function connected() {
//     console.log('connected')
//     eventEmmiter.emit('data_recived')
// }

// // register connection event
// eventEmmiter.once('connection', connectHandler);

// // register data_recived event
// eventEmmiter.on('data_recived', function() {
//     console.log('data recieved succesfully')
// })

// // call connection event
// eventEmmiter.emit('connection');
// eventEmmiter.emit('connection');

// // addLisner
// // once
// // removeLisner
// // removeAllLisner
// // setMaxLisner(n)
