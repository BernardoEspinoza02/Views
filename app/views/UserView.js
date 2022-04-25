const User = require ('./../views/user')

class UserViews {
    static createUser (payload){
        if(payload === null){
            console.log("Error es null")
            return{error: "El payload no existe."}
        } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            return UserService.create(payload.id, payload.username, payload.name)
        } else {
            return {error: "Error, las propiedades del payload necesitan tener un valor valido"}
        }
    }
}

module.exports = UserViews