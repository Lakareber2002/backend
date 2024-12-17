// EVENT DRIVEN PROGRAMING
// Importing 'events' module and creating an instance of the EventEmitter Class
const EventEmitter = require('events');
//const myEmitter = new EventEmitter();

// Listener Function - welcomeUser()
const welcomeUser = () => {
    console.log('Hi There, Welcome to the server!');
}

// Listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');


// multiple on() for single emit()
// Importing `events` module and creating an instance of EventEmitter class
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener Function 1: sayHello
// const sayHello = () => {
//     console.log('Hello User');
// }

// Listener Function 2: sayHi
// const sayHi = () => {
//     console.log('Hi User');
// }

// Listener Function 3: greetNewYear
const greetNewYear = () => {
    console.log('Happy New Year!');
}

// Subscribing to `userJoined` event
myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);

// Emiting the `userJoined` Event
myEmitter.emit('userJoined');


// birthday event
const EventEmitter = require('events');
const myEvent = new EventEmitter();

// Listener function
const greetBirthday = (name, newAge) => {
    // name = John
    // newAge = 24
    console.log(`Happy Birthday ${name}. You are now {newAge}!`);
}

// Listening for the birthdayEvent
myEmitter.on('birthdayEvent', greetBirthday);

// Emitting the birthdayEvent with some extra parameters
myEmitter.emit('birthdayEvent', 'John', '24');


// Before emitting any event, you need to make sure that all the listener functions have subscribed/registered to that event.
const EventEmitter = require('events');
//const myEmitter = new EventEmitter();

// Listener Function 1 - sayHi
const sayHi = () => {
    console.log('Hi User');
}

// Listener Function 2 - sayHello
const sayHello = () => {
    console.log('Hello User');
}

// Registering sayHi function as listener
myEmitter.on('userJoined', sayHi);

// Emitting the event
myEmitter.emit('userJoined');

// Registering sayHello function as listener
myEmitter.on('userJoined', sayHello);

