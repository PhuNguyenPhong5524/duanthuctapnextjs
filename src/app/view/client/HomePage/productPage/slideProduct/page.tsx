import Link from "next/link";


interface SanPham {
    id: number;
    name: string;
    loai: string;
    price: string;
    price2: string;
    sale: string;
}

const sanpham: SanPham[] = [
    {   
        id: 1,
        name: "Product Title Goes Here",
        loai: "BRAND",
        price: "AED 32.00",
        price2: "AED 25.60",
        sale: "30% OFF",
    },
    {   
        id: 2,
        name: "Product Title Goes Here",
        loai: "BRAND",
        price: "AED 32.00",
        price2: "AED 25.60",
        sale: "30% OFF",
    },
    {   
        id: 3,
        name: "Product Title Goes Here",
        loai: "BRAND",
        price: "AED 32.00",
        price2: "AED 25.60",
        sale: "30% OFF",
    },
    {   
        id: 4,
        name: "Product Title Goes Here",
        loai: "BRAND",
        price: "AED 32.00",
        price2: "AED 25.60",
        sale: "30% OFF",
    },
    
];

export default function SlideProduct() {

    return (
       <>
            {
                sanpham.map((sp, i) => (
                    <div className="bg-[#fff] h-[342px] w-[245px] shadow-none hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)] mb-[-24px]" key={i}>
                        <div className="relative bg-[#e3e3e3] flex justify-center h-[260px] ">
                            <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[90px] "></i>
                            <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
                        </div>
                        <div>
                            <Link href="/view/client/detailpage" className="cursor-pointer hover:text-[#93dcdd]"><p className="text-[18px] font-sans font-bold pl-[8px] py-[10px] ">{sp.name}</p></Link>
                            <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">{sp.loai}</p>
                            <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                                <div>
                                    <p className="text-[14px] font-sans font-bold text-[#c2c2c2]">{sp.price}</p>
                                    <p className="absolute translate-y-[-12px] border-[1.5px] w-[71px] ml-[-1px] bg-[#464646]"></p>
                                </div>
                                <div className="mr-[25px]">
                                    <p className="text-[14px] font-sans font-bold text-[black]">{sp.price2}</p>
                                </div>
                                <div className="border-2 border-[#000] text-[10px] p-[3px] font-semibold">{sp.sale}</div>
                            </div>
                            
                        </div>
                    </div>
                )
            )
            }
       </>
    );
}
