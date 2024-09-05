import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/sp",
});

export const apiCaterogy = axios.create({
    baseURL: "http://localhost:3000/loai",
});


export const apiProductNew = axios.create({
    baseURL: "http://localhost:3000/spmoi",
});

export const apiProductWithCaterogy = (idloai: number) => { 
   return axios.create({
        baseURL: `http://localhost:3000/sptrongloai/${idloai}`,
    });
}

export const apiProductDetail = (id: number) => {
    return axios.create({
         baseURL: `http://localhost:3000/sp/${id}`,
     });
 }

 export const getProductHot = axios.create({
    baseURL: "http://localhost:3000/sp",
});