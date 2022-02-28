import path from 'path';
import { mdLinks } from "../md-links.js"



/*describe('mdLinks', () => {

it("should return object with links", ()=>{
    
const optionValidate= [
    {
        "file": "C:\\Users\\Laboratoria\\Desktop\\md\\LIM016-md-links\\prueba_general\\prueba\\archivo2.md",
        "href": "https://jestjs.io/docs/es-ES/manual-mocks",
        "status": 200,
        "statusText": "OK",
        "text": "Manual Mocks con Jest - Documentación oficial",
    
      },
]
 
    return (mdLinks("prueba_general/prueba/archivo2.md", {validate: true}))
    .then((res)=>{
    
        expect(res).toStrictEqual(optionValidate)
    })
})


})*/

describe('mdLinks', () => {
    it('should be a function', () => {
      expect(typeof mdLinks).toBe('function');
    });

    it('should return mensaje de error', () => {
        // eslint-disable-next-line object-curly-newline
        expect(mdLinks('prueb')).rejects.toEqual("La ruta ingresada no es válida");
      });
    
      
    it('should return object with links', () => {
      // eslint-disable-next-line object-curly-newline
      expect(mdLinks('prueba_general/prueba/archivo2.md',{validate: false })).resolves.toEqual([{ 'file': path.join(process.cwd(),'/prueba_general/prueba/archivo2.md'), 'href': 'https://jestjs.io/docs/es-ES/manual-mocks', 'text': 'Manual Mocks con Jest - Documentación oficial'}]);
    });
    it('should return object with links', () => {
      // eslint-disable-next-line object-curly-newline
      expect(mdLinks('prueba_general/prueba/archivo2.md',{validate: true })).resolves.toEqual([{ 'file': path.join(process.cwd(),'/prueba_general/prueba/archivo2.md'), 'href': 'https://jestjs.io/docs/es-ES/manual-mocks', 'status': 200, 'statusText': 'OK', 'text': 'Manual Mocks con Jest - Documentación oficial'}]);
    });
  });