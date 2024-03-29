import Axios from 'axios'
import { base } from './api/'

let auth = Axios.create({
    baseURL: base + "account/",
    timeout: 3000,
    withCredentials: true
})

export default class AuthService {
    static async Login(creds) {
        try {
            let res = await auth.post('login', creds)
            return res.data
        } catch (e) {
            throw new Error(`[login failed] : ${!e.response ? 'No response from server' : e.response.data.errmsg}`)
        }
    }
    static async Register(creds) {
        try {
            let res = await auth.post('register', creds)
            return res.data
        } catch (e) {
            // handle duplicate entries
            throw new Error(`[registration failed] : ${!e.response ? 'No response from server' : e.response.data.errmsg}`)
        }
    }
    static async Logout() {
        try {
            let res = await auth.delete('logout')
            return true
        } catch (e) {
            throw new Error(`[logout failed] : ${!e.response ? 'No response from server' : e.response.data.errmsg}`)
        }
    }
    static async Authenticate() {
        try {
            let res = await auth.get('authenticate')
            return res.data
        } catch (e) {
            console.warn(`[Authentication failed] : ${!e.response ? 'No response from server' : e.response.data.errmsg}`)
        }
    }
}