import * as fs from 'fs';
import * as path from 'path';// ingreso de  ruta
import { marked } from 'marked'
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fetch from 'node-fetch';

let route = process.argv[2];
//console.log(route);
//let route = "C:/Users/Laboratoria/Desktop/md/LIM016-md-links/prueba_general/prueba/archivo1.md"
//let route = "C:/Users/Laboratoria/Desktop/md/LIM016-md-links"

//la ruta existe
export const pathExists = (route) => fs.existsSync(route);
// const pathExists=(route)=>
//console.log(pathExists(route), " hola");
// obteniendo una ruta absoluta

export const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? (route) : path.resolve(route));

//console.log(getAbsoluteRoute("prueba_general/prueba/archivo2.md"));





export const isDir =(route) =>fs.statSync(route).isDirectory()
//console.log(isDir(route));

 // leer el contenido del directorio

 export const getDirectoryContent= (routeDir) => fs.readdirSync(routeDir);

//console.log(isDir("C:/Users/Laboratoria/Desktop/md/LIM016-md-links/prueba general"));


// es un archivo md

export const isMdFile = (route) => (path.extname(route) === '.md');
//console.log(isMdFile(route));


export const getMdFiles = (route) => {
  let allMdFiles = [];
  const ruta=  getAbsoluteRoute(route)
  if(isDir(route)){
    //leer contenido
    const contenidoDirectorio = getDirectoryContent(ruta)
    //console.log(contenidoDirectorio, "contenido  ")
    contenidoDirectorio.forEach((file) =>{
      const rutaAbsoluta = path.join(ruta , file);
      //console.log(rutaAbsoluta)
    //recursividad  - estas nuevas  rutas le pertenecen a un directorio
     if(isDir(rutaAbsoluta)){
      allMdFiles = allMdFiles.concat(getMdFiles(rutaAbsoluta))
      //console.log(allMdFiles,"trayendo rutas")
     } else if(isMdFile(rutaAbsoluta)){

     (allMdFiles.push(rutaAbsoluta));
     }

    })
  }else if (isMdFile(ruta)) {

    allMdFiles.push(ruta);
    
   
  }
   return allMdFiles;
  }
    
//console.log(getMdFiles(route));


/*export const getMdFiles = (routeDir) => {
  let allMdFiles = [];
  const route = getAbsoluteRoute(routeDir);
  if (fs.lstatSync(route).isFile()) {
    if (isMdFile(route)) allMdFiles.push(route);
  } else {
    getDirectoryContent(route).forEach((file) => {
      const mdfile = getMdFiles(path.join(route, file));
      allMdFiles = allMdFiles.concat(mdfile);
    });
  }
  return allMdFiles;
};*/
//console.log(getMdFiles(route))
//  funcion que recorra lea  archivos md y que devuelva los links
   
 export const getMdLinks = (route) => {
  //obteniendo mdfiles
  const mdFiles = getMdFiles(route);

  const arrDom = [];
  mdFiles.forEach((mdFile) => {
    const data = fs.readFileSync(mdFile, 'utf8');
    const htmlFile = marked(data);
    const dom = new JSDOM(htmlFile);
    const link = dom.window.document.querySelectorAll('a');
    link.forEach((element) => {
        arrDom.push({
        href: element.getAttribute('href'),
        text: (element.textContent).slice(0,50),
        file: mdFile,

    });
  });
})
    return arrDom;
  };

//console.log(getMdLinks(route),"trayendo links");



export const validateLinks= (route)=>{
   const links=  getMdLinks(route);
   const validateOpt = links.map((link)=> fetch (link.href)
   .then((res) => {

    
    link.status= res.status,
    link.statusText= res.statusText;

    return link
  })
    .catch(() => {

   
      link.status= 500,
      link.statusText= 'FAIL';

      return link
    }))
    return Promise.all(validateOpt);
};

/*validateLinks(route)
.then((res)=>console.log(res))
.catch((error)=> console.log(error))
//console.log(getMdLinks([path.join( process.cwd(), "prueba_general/prueba/archivo2.md")][0]));*/