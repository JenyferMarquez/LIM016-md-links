import chalk from 'chalk';
import mdLinks from "./mdlinks.js";
import Stats from "./stats.js";

const controlador = (route, options)=>{

mdLinks(route, options)
    .then((links)=>{
            const linkHref =[ ];
            let linkBroken= 0;
            links.forEach((link)=>{
            if(link.status<= 500 && link.status >400) linkBroken +=1;
            if(!options.validate && !options.Stats){

                 console.log(chalk.cyan(link.file, link.herf, link.text));   

            }

            
      };

      export default controlador;
