#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import {total, unique, broken } from "./stats.js";
import {help} from "./help.js";
import { mdLinks } from "./md-links.js";


const banner = figlet.textSync('<Mq-Links>', {
  font: 'Georgia11',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width:100,
  whitespaceBreak: true,
});

console.log(chalk.cyan.bold(banner));
const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

if (options === '--validate' && status === '--stats' || options === '--stats' && status === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      
      console.log(chalk.bgBlue.black(`Total:  ${total(res)}`));
      console.log(chalk.bgGreen.black(`Unique: ${unique(res)}`));
      console.log(chalk.bgRed.black(`Broken: ${broken(res)}`));
    })
    .catch(error => console.log(error));
} else if(options === '--help'|| options=== '--h' ){
  
   console.log(chalk.cyan.bold(help))


}else if (options === '--validate' || options === '--v') {
  mdLinks(path, { validate: true })
  .then((res) => {
    res.forEach((e) => {
     if(e.status===200){
      console.log(chalk.blue(`'✔ href:'${chalk.blue(e.href)}\n'✔ text:' ${chalk.blue(e.text)}\n'✔ file:'${chalk.blue(e.file)}\n'✔ status:'${chalk.yellowBright(e.status)}\n'✔ message:'${chalk.blue(e.statusText)}\n`));
     }
     if(e.status===500){
      console.log(chalk.red(`'✔ href:'${chalk.red(e.href)}\n'✔ text:' ${chalk.red(e.text)}\n'✔ file:'${chalk.red(e.file)}\n'✔ status:'${chalk.yellowBright(e.status)}\n'✔ message:'${chalk.red(e.statusText)}\n`));
     }
    
    });
    
    
    
  })  
    .catch(error => console.log(error));
} else if (options === '--stats' || options === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(chalk.bgBlue.bold.black(`Total:  ${total(res)} `));
      console.log(chalk.bgBlue.bold.black(`Unique: ${unique(res)} `));
    })
    .catch(error => console.log(error));
} else {
  mdLinks(path, { validate: false })
  .then(res => {
    res.forEach((e) => 
    console.log(chalk.blue(`'✔ href:'${chalk.cyan(e.href)}\n'✔ text:' ${chalk.cyan(e.text)}\n'✔ file:'${chalk.cyan(e.file)}\n`)));
  })
    .catch(err => console.log(chalk.redBright(err)));
}


  /*mdLinks(process.argv[2], false)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))*/
