import Script from "next/script";
import { DropdownMenuDemo } from "./dropdowns/menudrop";
import { HoverUS } from "./hoverUser/hoverUS";
import Link from "next/link";


export default function Header() {
    let logoo = './logo.png';
    return (
        <div className="bg-[#f1f1f1]">
            <Script src="https://kit.fontawesome.com/0f02d3980d.js"></Script>
            <div  className="mx-[225px] flex items-center justify-between pt-[15px] ">
                <div className="">
                    <Link href="/" className="flex justify-center items-center text-[20px] font-sans font-[700] "><img src={logoo} alt={logoo} className="w-[85px] h-[75px] ml-[-4px]" />Thiết bị điện tử <hr className="absolute w-[120px] border-2 border-[black] rouded-[10px] border-2 mt-[40px] ml-[80px]"/></Link>
                </div>
                <div className="flex items-center gap-[20px] ">
                    <div className="mx-[10px]"><input className="border-2 rounded-[5px] border-black h-[50px] w-[380px] pl-[10px] " type="text" placeholder="Type in and hit enter..." /></div>
                    <div className=" border-r-2 border-r-black pr-2 cursor-pointer">
                        <Link href="/view/client/cart" className="flex justify-center">
                            <div><i className="fa-solid fa-cart-shopping"> </i> </div> 
                            <p className="mx-[10px] text-[16px] font-semibold">Cart</p>
                        </Link>
                    </div>
                    <div className="flex justify-center  border-r-2 border-r-black pr-2 cursor-pointer">
                        <HoverUS />
                    </div>
                    <div className="flex cursor-pointer">
                        <div className=" text-[16px] font-semibold">عربى</div> 
                    </div>
                </div>
            </div>
            <div className="pt-[10px]">
                <ul className="flex items-center justify-center bg-[#fff] w-full relative" style={{ boxShadow: '0px 8px 24px rgba(139, 146, 153, 0.2)', marginBottom: '-24px' }}>
                    <li className="text-[#555555] hover:bg-[#f1f5f9] hover:text-[black] rounded-[5px] " ><Link href="#" className="text-[14px] pl-[5px] ">{<DropdownMenuDemo />}</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="#" className="text-[14px] "> SKINCARE</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="/view/client/product" className="text-[14px]">MAKE UP</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="#" className="text-[14px]">HAIR CARE</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="#" className="text-[14px]">BATH & BODY</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="#" className="text-[14px]">BEAUTY SUPPLEMENTS</Link></li>
                    <li className="text-[#555555] hover:bg-[#f1f5f9]  font-bold hover:text-[black] p-[10px] rounded-[5px] " ><Link href="#" className="text-[14px] ">PROMOS</Link></li>
                    <li className="bg-black p-[12px] ml-[125px] "><a href="#" className="text-white">SELL WITH US</a></li>
                </ul>
            </div>

        </div>
    );
}