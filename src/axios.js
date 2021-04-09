import axios from "axios";
import {BASE_URL} from "./Constants";

export const requests = {
    get: (url) => {
        axios.get(`${BASE_URL}${url}`)
    },
    post: (url, body = null) => {
        axios.post(`${BASE_URL}${url}`, body)
    }
}
