const readline = require('readline');

const myLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

myLine.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  myLine.close();
  console.log('This important software is now closing');
});
