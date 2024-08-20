import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16",
});