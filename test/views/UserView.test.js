//const { TestWatcher } = require('jest')
const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test ("Return an error object when try to create a new user with an null playload", () => {
        //Devuelve un objeto de error cuando intenta crear un nuevo usuario con una carga de reproducción nula
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect (result.error).toMatch(/payload no existe/)

    });

    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
//Devuelve un objeto de error cuando intenta crear un nuevo usuario con una carga útil con propiedades no válidas
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = { username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })
})