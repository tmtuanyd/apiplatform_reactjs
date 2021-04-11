import axios from "axios";
import {BASE_URL} from "./Constants";

export const requests = {
    get: (url) => {
        return axios.get(`${BASE_URL}${url}`)
    },
    post: (url, body = null) => {
        return axios.post(`${BASE_URL}${url}`, body)
    }
}
