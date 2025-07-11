import axios from "axios";
import { getTokenFromLocalStoradge } from "../helpers/localstoradge.helper";


export const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Authorization: `Bearer`+ getTokenFromLocalStoradge() || '',
    }
})