import { api, apiCaterogy, apiProductNew, apiProductWithCaterogy } from "../services/api";

export const getapiDataProduct = async () => {
    const response = await api.get("/");
    return response.data;
}

export const getapiDataCategory = async () => {
    const response = await apiCaterogy.get("/");
    return response.data;
}

export const getapiDataProductNew = async () => {
    const response = await apiProductNew.get("/");
    return response.data;
}

export const getapiDataWithCaterogyandProduct = async (idloai: number) => {
    const apii = apiProductWithCaterogy(idloai);
    const response = await apii.get('/');
    return response.data;
}