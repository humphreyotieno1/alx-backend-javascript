process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const myLine = process.stdin.read();
  if (myLine !== null) {
    process.stdout.write(`Your name is: ${myLine}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
