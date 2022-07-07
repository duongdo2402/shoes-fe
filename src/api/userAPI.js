import axios from "axios"

export const apiLogin = async (data) => {
    return await axios.post('http://localhost:8000/login', data)
}
export const apiSignup = async (data) => {
    return await axios.post('', data);
}
export const apiLogout = async (data) => {
    return await axios.post('', data);
}