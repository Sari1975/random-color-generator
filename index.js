var randomColor = require('randomcolor'); // import the script
var color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
}); // a hex code for an attractive color
const chalk = require('chalk');
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('########              #########'));
console.log(chalk.hex(color).bold('########              #########'));
console.log(chalk.hex(color).bold(`########   ${color}    #########`));
console.log(chalk.hex(color).bold('########              #########'));
console.log(chalk.hex(color).bold('########              #########'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
