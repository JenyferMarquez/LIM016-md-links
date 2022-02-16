import {pathExists, getAbsoluteRoute, getMdFiles, getMdLinks, validateLinks} from "./api.js";


export const mdLinks =(route, options) => new Promise ((resolve,reject) =>{
 let pathAbsolute;
    if (!pathExists(route)){
      
      reject('La ruta no existe');

    }

      pathAbsolute =  getAbsoluteRoute(route);
      files = getMdFiles(route);
     
      if(options.validate === undefined){  
  
      resolve(getMdLinks(route));

      }

      if(options.validate === true){

      resolve(validateLinks(route));
   
      }
    }
);






