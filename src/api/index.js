import axios from "axios"

export const api_key = "e5995452ba27594098545f1df3e4ed05"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})