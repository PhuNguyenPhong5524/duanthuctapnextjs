"use client"

import MainPageDetailPD from "./MainProductPage/main";
import { getapiData } from "@/app/utils/axiosIntance";
import { useEffect,useState } from "react";
import { classname } from './../../../types/classname';



export default function PageDetailProduct() {
    const [datasp, setdatasp] = useState<classname[]>([]);
    useEffect(() => {
        const fecthdata = async () =>{
            const data = await getapiData();
            setdatasp(data);
            console.log(data);
        }
        fecthdata();
    }, []);
    
    return (
        <div className=" bg-[#f1f1f1]">
            {datasp.map((sp, i) => (
                <div key={i} className="mt-[100px]">
                    {sp.id}
                    {sp.class_name}
                </div>
            ))}
            <MainPageDetailPD />
        </div>
    );
}