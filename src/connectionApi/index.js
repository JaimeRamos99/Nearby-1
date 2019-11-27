const Base_api = 'http://192.168.1.64:3001/'
class Api {
    async register(nombre, correo, usuario, password) {
        try {
            let query = await fetch(`${Base_api}createUserEmailPassword/${nombre}/${correo}/${usuario}/${password}`, { method: 'POST' })
            let queryJson = await query.json()
            return queryJson
        }
        catch (error) {
            console.log("Esto es un error atrapado en la función register de la clase api: " + error)
        }
    }
}
export default new Api();
