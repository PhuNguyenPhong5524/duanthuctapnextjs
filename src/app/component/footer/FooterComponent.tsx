import Link from "next/link";


export default function Footer() {
    let logoo = './logo.png';
    return (
       <div className=" flex justify-center">
             <div className="h-[373px] bg-[#d0d0d0] px-[284px] grid grid-cols-[20%_18%_13%_16%_38%] gap-[20px] items-start pt-[5%] justify-center">
                <div className="translate-y-[-20px]">
                
                        <Link href="/" className=" "><img src={logoo} alt={logoo} className="w-[150px] h-[130px]" /></Link>
              
                    <div className="flex gap-[12px] mt-[10px] ml-[10px]">
                        <div><i className="fa-brands fa-square-facebook text-[24px]"></i></div>
                        <div><i className="fa-brands fa-square-twitter text-[24px]"></i></div>
                        <div><i className="fa-brands fa-square-google-plus text-[24px]"></i></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="mb-2 text-[20px] font-semibold">MAIN PAGES</h2>
                    <p className="text-[14px] font-medium">Sell with US</p>
                    <p className="text-[14px] font-medium">About Us</p>
                    <p className="text-[14px] font-medium">Contact Us</p>
                    <p className="text-[14px] font-medium">Promos</p>
                    <p className="text-[14px] font-medium " >Become an Ambassador</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="mb-2 text-[20px] font-semibold">POLICY</h2>
                    <p className="text-[14px] font-medium">Terms of Usage</p>
                    <p className="text-[14px] font-medium">Privacy Policy</p>
                    <p className="text-[14px] font-medium">Return Policy</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="mb-2 text-[20px] font-semibold">CATEGORIES</h2>
                    <p className="text-[14px] font-medium">Skincare</p>
                    <p className="text-[14px] font-medium"> Makeup</p>
                    <p className="text-[14px] font-medium">Hair Care</p>
                    <p className="text-[14px] font-medium">Bath & Body</p>
                    <p className="text-[14px] font-medium">Beauty Suppliments</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="mb-2 text-[20px] font-semibold">SUBSCRIBE</h2>
                    <p className="text-[14px] font-medium">Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
                    <div className="flex"><input className="h-[50px] border-2 border-[#000000] pl-[10px]  font-bold placeholder:text-[#343434] " type="text" placeholder="Enter Email Address..."/><button className="border-2 border-[#000000] bg-[#000000] text-[#fff] h-[50px] text-[15px] p-[5px]">SUBSCRIBE</button></div>
                </div>
            </div>
       </div>
    );
}
