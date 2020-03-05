const Base_api = 'http://localhost:3001/'//'https://nearbymi.herokuapp.com/'
class Api {
    async register(nombre, correo, password) {
        try {
            let query = await fetch(`${Base_api}createUserEmailPassword/${nombre}/${correo}/${password}`, { method: 'POST', mode: 'cors' })
            let queryJson = await query.json()
            return queryJson
        }
        catch (error) {
            console.log("Esto es un error atrapado en la función register de la clase api: " + error)
        }
    }
    async login(correo, password) {
        try {
            let query = await fetch(`${Base_api}login/${correo}/${password}`, { method: 'POST', mode: 'cors' })
            let queryJson = await query.json()
            return queryJson
        }
        catch (error) {
            console.log("Esto es un error atrapado en la función register de la clase api: " + error)
        }
    }
}
export default new Api();
