const jwt = require('jsonwebtoken')
class AuthStuff {
    sign(user) {//solo se accede cuando la persona está en firstview, y para llegar a firstview o no hay auth en local storage o está alterado... por eso no es necesario revisar
        let jsonAuth = { "email": user }
        let auth = jwt.sign(jsonAuth, "secretToken", { expiresIn: '7d' })
        localStorage.setItem('auth', auth)
    }
    verify() {
        try {
            let ls = localStorage.getItem('auth')
            //let token = cryptr.decrypt(ls)
            const email = jwt.verify(ls, "secretToken").email
            if (email !== undefined && email !== null) {
                return ({ "auth": "yes" })
            } else {
                console.log("no1")
                return ({ "auth": "no" })
            }
        } catch (err) {
            return ({ "auth": "no2" })
        }
    }
    async verifyExpress() {
        try {
            let ls = localStorage.getItem('auth')
            if (ls) {
                const email = await jwt.verify(ls, "secretToken").email
                if (email !== undefined && email !== null) {
                    return (email)
                } else {
                    return (undefined)
                }
            }
        } catch (err) {
            console.log("error en verifyExpress " + err)
            return (undefined)
        }
    }
    borrar() {
        try {
            localStorage.removeItem('auth')
        } catch (err) {
            console.log("error en borra Local Storage: " + err)
        }
    }
}

export default new AuthStuff()