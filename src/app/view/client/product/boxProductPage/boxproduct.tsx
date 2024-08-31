"use client"
import { getapiDataWithCaterogyandProduct } from "@/app/utils/axiosIntance";
import { useEffect,useState } from "react";
import IProductDetail from "@/app/types/inrterfaceProductDetail";
import Link  from "next/link";
import * as React from "react"
import { useParams } from "next/navigation";
import { ButtonAddPD } from "@/app/component/Btton/buttonadd";
import { useCart } from "@/app/contexts/CartContext";



const oneusd = 24000;
export default function BoxProductPage() {
    const [datasp, setdatasp] = useState<IProductDetail[]>([]); 
    const {idloai} = useParams();
    const { addToCart } = useCart();
    useEffect(() => {
       if(idloai){
        const fecthdata = async () =>{
            const data = await getapiDataWithCaterogyandProduct(Number(idloai));
            setdatasp(data);
        }
        fecthdata();
       }
    }, [idloai]);
    const handleAddToCart = (product: IProductDetail) => {
        if (datasp) {
          addToCart({...product, quantity: 1 });
        }
      };
        
    return (
        <>
        {datasp.slice(0,16).map((sp) => (
        <div className=" relative group bg-[#fff] h-[360px] w-[240px] shadow-none mb-[10px] hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)] hover"  key={sp.id}>
            <div>
                <div className="absolute flex justify-center items-center text-[#fff] text-[13px] w-[61px] h-[25px] bg-[black] ml-[-9.5px] mt-[15px]">New</div>
                <div className= "ml-[16px] mt-[42.4px] absolute translate-x-[-28px] w-0 h-0 border-l-[15px] border-l-transparent tranform rotate-[270deg] border-r-[0] border-r-transparent border-b-[10px] border-b-[gray]"></div>
            </div>
            <div className=" flex justify-center h-[260px] ">
                 <div className="flex justify-center items-center"><img src={sp.hinh} alt={sp.ten_sp} className="h-[130px] transition-transform ease-in-out transform duration-300 group-hover:scale-[120%]"/> </div>       
                 <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
            </div>
            <div>
                <Link href={`/view/client/detailpage/${sp.id}`} className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[15px] font-sans font-bold pl-[8px] py-[10px]">{sp.ten_sp}</p></Link>
                <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                    <div>
                        <p className="text-[12px] font-sans font-bold text-[#c2c2c2]"><del>AED {(sp.gia / oneusd).toFixed(1)}</del></p>
                        {/* <p className="absolute translate-y-[-11px] border-[1.5px] w-[67px] ml-[-1px] bg-[#464646]"></p> */}
                    </div>
                    <div className="mr-[18px] ml-[5px]">
                        <p className="text-[14px] font-sans font-bold text-[black]">AED {(sp.gia_km / oneusd).toFixed(1)}</p>
                    </div>
                    <div className="border-2 border-[#000] text-[10px] p-[1px] font-bold">{(Math.round(((sp.gia - sp.gia_km)/sp.gia)*100))} % OFF</div> 
                </div>
                <div onClick={() => handleAddToCart(sp)}><ButtonAddPD /> </div>
            </div>
        </div>
        ))}
        </>
    );
}