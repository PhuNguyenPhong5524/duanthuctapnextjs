import { api } from "../services/api";

export const getapiData = async () => {
    const response = await api.get("/");
    return response.data;
}