import * as fs from 'fs';
import * as path from 'path';// ingreso de  ruta
import { marked } from 'marked'
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fetch from 'node-fetch';

//et route = process.argv[1];
//console.log(process.argv[1])
/*let route = "C:/Users/Laboratoria/Desktop/md/LIM016-md-links/prueba general/prueba"*/
let route = "C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md"

//la ruta existe
export const pathExists = (route) => fs.existsSync(route);
// const pathExists=(route)=>
console.log(pathExists(route), " hola");
// obteniendo una ruta absoluta

export const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? (route) : path.resolve(route));

console.log(getAbsoluteRoute(route));

export const isDir =(route) =>fs.statSync(route).isDirectory()

//console.log(isDir("C:/Users/Laboratoria/Desktop/md/LIM016-md-links/prueba general"));


// es un archivo md

export const isMdFile = (route) => (path.extname(route) === '.md');
//console.log(isMdFile(route));


/*export const getMdFiles = (route) => {
  let allMdFiles = [];
  //const route = getAbsoluteRoute(route);

  if(isDir(route)){
    //leer contenido
    const contenidoDirectorio = fs.readdirSync(route, "utf-8")
    //console.log(contenidoDirectorio, "contenido  ")
    contenidoDirectorio.forEach((file) =>{
      const unirRutas =path.join(route , file);
      //console.log(unirRutas, "uniendo  rutas")
    //recursividad  - estas nuevas  rutas le pertenecen a un directorio
     if( isDir(unirRutas)){
      allMdFiles = allMdFiles.concat(getMdFiles(unirRutas))
      console.log(allMdFiles,"trayendo rutas")
     }else if(isMdFile(unirRutas)){

      allMdFiles.push(unirRutas);
     }

    })
  }else if (isMdFile(route)){

    allMdFiles.push(unirRutas);
    
   
  }
   return allMdFiles;
  }
    
getMdFiles(route);*/


export const getMdFiles = (routeDir) => {
  let allMdFiles = [];
  const route = getAbsoluteRoute(routeDir);
  if (fs.lstatSync(route).isFile()) {
    if (isMdFile(route)) allMdFiles.push(route);
  } else {
    fs.readdirSync(route).forEach((file) => {
      const mdfile = getMdFiles(path.join(route, file));
      allMdFiles = allMdFiles.concat(mdfile);
    });
  }
  return allMdFiles;
};

getMdFiles(route)
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

console.log(getMdLinks(route),"trayendo links");


export const validateLinks= (route)=>{
   const links=  getMdLinks(route);
   const validateOpt = links.map((link)=> fetch (link.href)
   .then((res) => ({

    href: link.href,
    text: link.text,
    file: link.file,
    status: res.status,
    statusText: res.statusText,


  }))
    .catch((error) => ({

      href: link.href,
      text: link.text,
      file: link.file,
      status: 500,
      statusText: 'FAIL',

    })))
   return Promise.all(validateOpt);
};


validateLinks(route)
.then((res)=>console.log(res))
.catch((error)=> console.log(error))

