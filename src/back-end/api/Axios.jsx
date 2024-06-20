import axios from "axios";
import Cookie from "cookie-universal";

// export const baseUrl = 'http://127.0.0.1:8000/api/'

// export const baseUrlImg = 'https://wordpress2.skyfy.me/source/Final/public/images/'
// export const baseUrl = 'https://wordpress2.skyfy.me/source/Final/public/index.php/api/'

export const baseUrl = 'http://127.0.0.1:8000/api/'
export const baseUrlImg = 'http://127.0.0.1:8000/images/'


const cookie = Cookie();
const token = cookie.get("e-c")
const Admintoken = cookie.get("admintoken")


export const Axios = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
},
});

export const AdminAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${Admintoken}`,
},
});