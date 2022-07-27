import axios from "axios"
import { instance } from ".."

export const login = async(email: string, password: string) => {
    const request = {
        email: email,
        password: password
    }
    try {
        const response = await instance.post('login', {...request})
        localStorage.setItem('token', response.data.accessToken);
        return response
    } catch(e) {
        return false
    }
}
    
export const register = async(email: string, password: string) => {
    const request = {
        email: email,
        password: password
    }
    try {
        const response = await instance.post('registration', {...request})
        return response
    } catch(e) {
        return false
    }
}

export const checkAuth = async() => {
    try {
        const response = await instance.get('refresh')
        localStorage.setItem('token', response.data.accessToken);
        return true
    } catch(e) {
        return false
    }
}