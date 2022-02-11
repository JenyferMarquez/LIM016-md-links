import * as fs from 'fs';
import * as path from 'path';// ingreso de  ruta
import { marked } from 'marked'
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

//et route = process.argv[1];
//console.log(process.argv[1])
let route = "C:/Users/Laboratoria/Desktop/md/LIM016-md-links/prueba general/prueba"


//la ruta existe
const pathExists = (route) => fs.existsSync(route);
// const pathExists=(route)=>
//console.log(pathExists(route), " hola");
// obteniendo una ruta absoluta

const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? (route) : path.resolve(route));

//console.log(getAbsoluteRoute(route));

const isDir =(route) =>fs.statSync(route).isDirectory()

//console.log(isDir("C:/Users/Laboratoria/Desktop/Proyecto4/LIM016-md-links/prueba general"));


// es un archivo md

const isMdFile = (route) => (path.extname(route) === '.md');
//console.log(isMdFile(route));


const getMdFiles = (route) => {
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
      //console.log(allMdFiles,"trayendo rutas")
     }else if(isMdFile(unirRutas)){

      allMdFiles.push(unirRutas);
     }

    })
  }else if (isMdFile(route)){

    allMdFiles.push(unirRutas);
    
   
  }
   return allMdFiles;
  }
    
getMdFiles(route);

//  funcion que recorra lea  archivos md y que devuelva los links
 
const getMdLinks = (route) => {
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
