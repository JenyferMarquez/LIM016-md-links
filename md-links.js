import {pathExists, getMdLinks, validateLinks,getAbsoluteRoute} from "./api.js";

/*const route =process.argv[2]
const options= {
  validate: true,

};*/
/*const path= !pathExists (route)
console.log(path);*/

export const mdLinks =(route, options) => {return new Promise ((resolve, reject)=>{


 if (!pathExists(route)){

  reject("La ruta ingresada no es válida")

 } else {

  if(options.validate === true){
    
    const pathAbsolute = getAbsoluteRoute(route);
    resolve(validateLinks(pathAbsolute));

  } else {

    resolve(getMdLinks(route));

  }
 }

});
}


/*mdLinks(route, options)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))*/




