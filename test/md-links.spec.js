import * as path from 'path'
import  {pathExists, getAbsoluteRoute, isDir, isMdFile ,getMdFiles, getMdLinks,} from "../api.js";

describe ("pathExists",()=>{

 it("it is a function", ()=>{

  expect(typeof pathExists ).toBe("function")
 })

 it('it is true', () => {
  expect(pathExists('test/')).toBe(true);
});

it('It is return false', () => {
  expect(pathExists('readme.php')).toBe(false);
});


});


describe ("getAbsoluteRoute",()=>{

  it("it is a function", ()=>{ 
   expect(typeof getAbsoluteRoute ).toBe("function")
  })
  
  it('Return path absolute', () => {
   expect(getAbsoluteRoute("prueba_general/")).toBe(path.join( process.cwd(), "prueba_general"));
  });
});


describe ("isMdFile",()=>{

  it("it is a function", ()=>{
 
   expect(typeof isMdFile ).toBe("function")
  })
 
  it('it is true', () => {
   expect(pathExists('test/')).toBe(true);
 });
 
 it('It is return false', () => {
   expect(pathExists('readme.php')).toBe(false);
 });
 
 
 });




describe ("isDir",()=>{

  it("it is a function", ()=>{ 
   expect(typeof isDir ).toBe("function")
  })
  
  it('Return true ', ()=> {
    expect(isDir("C:/Users/Laboratoria/Desktop/md/LIM016-md-links")).toBe(true);
   });
 
   it('Return false ', ()=> {
    expect(isDir("prueba_general/prueba/archivo1.md")).toBe(false);
   });
 
 
});

describe('isMdFile', () => {
  it('should be a function', () => {
    expect(typeof isMdFile).toBe('function');
  });
  it('should return true', () => {
    expect(isMdFile('readme.md')).toBe(true);
  });
  it('should return false', () => {
    expect(isMdFile('api.js')).toBe(false);
  });
});

describe ("getMdFiles",()=>{

  it("it is a function", ()=>{ 
   expect(typeof getMdFiles ).toBe("function")
  })
  

   it('Return all files', () => {
    expect(getMdFiles("prueba_general/prueba")).toEqual([path.join( process.cwd(), "prueba_general/prueba/archivo.md"), path.join( process.cwd(), "prueba_general/prueba/archivo1.md"), path.join( process.cwd(), "prueba_general/prueba/archivo2.md")]);
   });

   it('Return all files', () => {
    expect(getMdFiles("README.md")).toEqual([path.join( process.cwd(), "README.md")]);
   });


});


describe ("getMdLinks",()=>{

  it("it is a function", ()=>{ 
   expect(typeof getMdLinks ).toBe("function")
  })
  

   it('Return object links', () => {
    expect(getMdLinks([path.join( process.cwd(), "prueba_general/prueba/archivo2.md")][0])).toEqual([
      
        {
          href: 'https://jestjs.io/docs/es-ES/manual-mocks',
          text: 'Manual Mocks con Jest - Documentación oficial',
          file: 'C:\\Users\\Laboratoria\\Desktop\\md\\LIM016-md-links\\prueba_general\\prueba\\archivo2.md'
        }
      
    ]);
    
   });

 


});