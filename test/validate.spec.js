import * as path from 'path';
import{ validateLinks} from  "../api.js";
import fetchMock from "jest-fetch-mock"
fetchMock.enableMocks()






describe('testing validate', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Should return status', () => {
    fetch.mockResponseOnce({ status: 200, statusText: "OK" });
    validateLinks("./test").then((res) => {
      expect(res).toEqual([{"file": "C:\\Users\\Laboratoria\\Desktop\\md\\LIM016-md-links\\test\\archivo6.md",
    "href": "https://nodejs.org/es/",
    "status": 200,
    "statusText": "OK",
    "text": "Node.js",}])
  });
  });
});


/*describe('testing validate', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it.only('Should return status fail',( ) => {
    expect.assertions(1);
    fetch.mockRejectOnce(()=>validateLinks("prueba_general\\prueba").then((res)=>Promise.reject(res.errorToRaise)))
      return validateLinks("prueba_general/prueba").then((res) => {
      expect(res).toEqual([{ "file": path.join(process.cwd(),'/prueba_general/prueba/archivo.md'), "href": "#9-checklist", "status": 500, "statusText": "FAIL", "text":"Checklist " }])
    });
  });
});*/

describe('testing validate', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Should return status', () => {
    fetch.mockResponseOnce({ status: 500, statusText: "FAIL" });
    validateLinks("prueba_general/prueba1").then((res) => {
      expect(res).toEqual([{ "file": path.join(process.cwd(), '/prueba_general/prueba1/archivo4.md'), "href": "#9-checklist", "status": 500, "statusText": "FAIL", "text":"Checklist" }])
  });
  });
});





