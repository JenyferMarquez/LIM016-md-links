import {total, unique, broken, prueba }from "../stats.js";



describe('total', () => {


    it('should return total', () => {
  
        
    expect(total(prueba)).toBe(7)

    })
})


describe('unique', () => {


    it('should return total', () => {
 
        
    expect(unique(prueba)).toBe(5)

    })
})


describe('broken', () => {


    it('should return broken', () => {

     
    expect(broken(prueba)).toEqual(4);


    })
})