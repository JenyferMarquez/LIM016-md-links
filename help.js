import chalk from "chalk";


export const help=`

 ********************************************  (${chalk.cyan('HELP')}) *************************************************
 
 ${chalk.cyan('--validate ó --v')}                            Retorna el link, el texto, la ruta, el status y el mensaje. 

 ${chalk.cyan('--stats ó --s')}                               Retorna el número total de links y los links únicos.  

 ${chalk.cyan('--stats --validate ó --validate --stats')}     Retorna los links totales, únicos y rotos.   
    
 *****************************************************************************************************`; 