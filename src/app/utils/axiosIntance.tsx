import { api, apiCaterogy, apiProductDetail, apiProductNew, apiProductWithCaterogy, getProductHot } from "../services/api";


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

export const getapiDataProductDetail = async (id: number) => {
    const apiPdDt = apiProductDetail(id);
    const response = await apiPdDt.get('/');
    return response.data;
}

export const getPDHot = async () => {
    const response = await getProductHot.get("/");
    return response.data;
}