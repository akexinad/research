const readline = require('readline'); // also part of the std library.
const chalk = require('chalk'); // this required an npm install.
const figlet = require('figlet');

// seriously, its this much torouble to read text from the keyboard
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter text for enhancement: ', response => {
  console.log(
    chalk.green(
      figlet.textSync(response, {
        font: 'slant',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
  rl.close();
});
