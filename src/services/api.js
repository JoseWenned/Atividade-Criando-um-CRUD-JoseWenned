import axios from "axios";

export const Api = axios.create({
    baseURL: "https://todolist-api-mu.vercel.app/"
})