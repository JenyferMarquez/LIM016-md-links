import path from 'path';
import{ validateLinks} from  "../api.js";
import fetchMock from "jest-fetch-mock"
/*enableFetchMocks()*/
fetchMock.enableMocks();

describe("test validateLinks",()=>{
beforeEach(()=>{
    fetch.resetMocks();
})

it('Should return status', () => {
    fetch.mockResponseOnce({ status: 200, statusText: "OK" });
    validateLinks("prueba_general/prueba").then((res) => {
      expect(res).toEqual([{ "file": path.join(process.cwd(),'/prueba_general/prueba/archivo2.md'), "href": "https://jestjs.io/docs/es-ES/manual-mocks", "status": 200, "statusText": "OK", "text":"Manual Mocks con Jest - Documentación oficial " }]);
    });
  });

  it('Should return status', () => {
    fetch.mockRejectOnce(()=>Promise.reject(res))
    validateLinks("prueba_general/prueba").then((res) => {
      expect(res).toEqual([{ "file": path.join(process.cwd(),'/prueba_general/prueba/archivo.md'), "href": "#9-checklist", "status": 500, "statusText": "FAIL", "text":"Checklist " }]);
    });
  });



});