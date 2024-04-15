import chalk from "chalk";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface(input, output);

let username = await rl.question("What is your name? ");
let userage = await rl.question("What is your age? ");

console.log(`Name: ${chalk.blue(username)} 
Age: ${chalk.green(userage)}`);