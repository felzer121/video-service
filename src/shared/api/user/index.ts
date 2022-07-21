import axios from "axios"

const host = import.meta.env.VITE_SERVER_HOST

export const login = async(email: string, password: string) => {
    const req = {
        email: email,
        password: password
    }
    const response = await fetch(`${host}login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        credentials: 'include',
        body: JSON.stringify(req),
    })
    return await response.json()
}

export const register = async(email: string, password: string) => {
    const req = {
        email: email,
        password: password
    }
    await axios({
        method: 'POST',
        withCredentials: true,
        url: `${host}registration`,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        data: JSON.stringify(req)
    })
    // const response = await fetch(`${host}registration`, {
    //     method: "POST",
    //     credentials: 'include',
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    //     body: JSON.stringify(req),
    // })
    // return await response.json()
}