// __dirname Global Variable
console.log(__dirname);

// __filename Global Variable
console.log(__filename);

// Define a global variable in NodeJS
global.myVariable = 'Hello World';

// Access the global variable
console.log(myVariable); // Output: Hello World

const sayHello = require('./hello.js');

sayHello('John');
sayHello('Peter');
sayHello('Rohit');
