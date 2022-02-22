import {pathExists, getMdLinks, validateLinks,getAbsoluteRoute} from "./api.js";

const route =process.argv[2]
const options= {
  validate: false,

};


export const mdLinks =(route, options) => {return new Promise ((resolve, reject)=>{
 

 if (!pathExists (route)){
  reject("La ruta ingresada no es válida")

 }else{

  if(options.validate === true){
    const pathAbsolute = getAbsoluteRoute(route);
 
    
  resolve(validateLinks(route));
  }else{

    resolve(getMdLinks(route));

  }
 }

});
}
/*

mdLinks(route, options)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))*/

/*export const mdLinks =(route, options) => new Promise ((resolve,reject) =>{

    if (!pathExists(route)){
      reject('La ruta no existe');
    }

      if(options.validate === undefined ){
      resolve(getMdLinks(route));
      }
      
      
      if(options.validate === true){

      resolve(validateLinks(route));
   
      }
    
    });

mdLinks(route, options)
.then((res)=> console.log(res))
.catch((err)=> console.log(err));*/



