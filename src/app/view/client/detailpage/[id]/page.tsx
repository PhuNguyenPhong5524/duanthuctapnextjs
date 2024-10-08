
"use client"

import Reviews from "./reviews/reviews";
import TopReviews from "./topreviews/topreviews";
import SlideProduct from "../../HomePage/productPage/slideProduct/page";
import { ButtonKindDetailPageSmall, ButtonSHOPWITHME, ButtonViewMore, ButtonWRITEREVIEW } from "@/app/component/Btton/Btton";
import BoxTrackPrice  from "./boxTrackPrice/boxTrackPrice";
import { getapiDataProductDetail } from "@/app/utils/axiosIntance";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import IProductDetail from './../../../../types/inrterfaceProductDetail';
import { useCart } from "@/app/contexts/CartContext";


const MainDetail: React.FC = () => {
    const [productdetail, setProductDetail] = useState<IProductDetail | null>(null);
    const { id } = useParams();
    const { addToCart } = useCart();
  
    useEffect(() => {
      const fetchData = async () => {
        if (id) {
          const data = await getapiDataProductDetail(Number(id));
          setProductDetail(data);
        }
      };
      fetchData();
    }, [id]);

    const handleAddToCart = () => {
      if (productdetail) {
        addToCart({...productdetail, quantity: 1 });
        alert("Đã thêm vào giỏ hàng");
      }
    };

    const oneusd: number = 24000;
    return (
        <div className="bg-[#f1f1f1] mt-[-30px] " >
            {productdetail && (
               <div className="pt-[40px] grid justify-center">
                    <div className="translate-x-[10px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Skincare</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">{productdetail.ten_loai}</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">{productdetail.slug}</a>  </div>
                        <div className="h-auto w-[1025px] ml-[10px] bg-[#fff] mt-[20px] pt-[25px] mb-[15px]">
                            <div className="grid grid-cols-[5%_50%_45%] mx-[40px] gap-[20px] justify-center">
                            <div className=" flex flex-col justify-start items-center gap-[10px] pt-[5px]">
                                <img src={productdetail.hinh} alt={productdetail.ten_sp} className="bg-[#fff] w-[80px] h-[50px] flex justify-center border-2 p-1 items-center cursor-pointer hover:border-[black]" />
                                <img src={productdetail.hinh} alt={productdetail.ten_sp} className="bg-[#fff] w-[80px] h-[50px] flex justify-center border-2 p-1 items-center cursor-pointer hover:border-[black]" />
                                {/* <div className="bg-[#f1f1f1] w-[55px] h-[55px] flex justify-center items-center cursor-pointer"><i className="fa-regular fa-image text-[#d5d5d5] text-[40px] "></i></div>
                                <div className="bg-[#f1f1f1] w-[55px] h-[55px] flex justify-center items-center cursor-pointer "><i className="fa-regular fa-image text-[#d5d5d5] text-[40px] "></i></div>
                                <div className="bg-[#f1f1f1] w-[55px] h-[55px] flex justify-center items-center cursor-pointer"><i className="fa-regular fa-image text-[#d5d5d5] text-[40px] "></i></div> */}
                            </div>
                            <div className="flex justify-center items-start"><img src={productdetail.hinh} alt={productdetail.ten_sp} className="bg-[#f1f1f1] h-[320px] w-[340px] mt-[5px] flex justify-center items-center cursor-pointer" /></div> 
                            <div className=" mt-[5px]">
                                <h1 className="font-sans text-[26px] font-semibold">{productdetail.ten_sp}</h1>
                                <div className="flex items-center gap-[15px] mt-[1px]">
                                    <div><i className="fa-solid fa-eye text-[18px]"></i></div>
                                    <div><p className="text-[14px] ml-[-8px] font-semibold">{productdetail.luot_xem}</p></div>
                                </div>
                                {/* <div className="mt-[10px]"><p className="text-[14px] font-bold">Nisl, do fames, consequat adipisicing. Recusandae platea neque, cum, accusamus </p></div>
                                <a href="#" className="text-[12px] underline font-extrabold hover:text-[blue]">Read More</a> */}
                                <div className="relative flex gap-[5px]  items-center mb-[10px]">
                                    <div>
                                        <p className="text-[17px] font-sans font-semibold text-[#c2c2c2]"><del>AED {(productdetail.gia / oneusd).toFixed(1)}</del></p>
                                        {/* <p className="absolute translate-y-[-15px] border-[1.5px] w-[82px] ml-[-1px] bg-[#464646]"></p> */}
                                    </div>
                                    <div className="mr-[25px]">
                                        <p className="text-[20px] font-sans font-bold text-[black]">AED {(productdetail.gia_km / oneusd).toFixed(1)}</p>
                                    </div>
                                    <div className="border-2 flex justify-center items-center border-[#000] text-[16px] p-[5px] w-[100px] h-[32px] font-bold ">{(Math.round(((productdetail.gia - productdetail.gia_km)/productdetail.gia)*100))} % OFF</div>
                                </div>
                                <div className="text-[14px] font-bold flex gap-[10px] my-[10px]">
                                    <p>You can track the price of this product</p>
                                    <BoxTrackPrice productdetail= {productdetail}/>
                                </div>
                                <div className="flex gap-[10px] mt-[10px]">
                                     <button onClick={handleAddToCart} className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] text-[16px] font-sans font-bold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">ADD TO CART</button>
                                     <button className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] text-[16px] font-sans font-bold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">BUY NOW </button>
                                </div>
                                <div className="flex items-center gap-[10px] my-[10px]">
                                    <div><i className="fa-solid fa-heart text-[18px] mr-[5px]"></i></div>
                                    <div><a href="#" className="mt-[5px] text-[16px] ml-[-8px] font-semibold hover:text-[blue] hover:underline"> View My Favourite List</a></div>
                                </div>
                                <div className="grid grid-cols-[25%_25%_25%_25%] gap-[5px] mx-[5px]">
                                    <ButtonKindDetailPageSmall/>
                                    <ButtonKindDetailPageSmall/>
                                    <ButtonKindDetailPageSmall/>
                                    <ButtonKindDetailPageSmall/>
                                </div>
                                <div className="mb-[20px]">
                                    <div className="my-[10px]"><h2 className="mt-[5px] text-[18px] font-bold hover:text-[blue] hover:underline"> Technical specifications </h2></div>
                                    <div className="border-2 border-[#f1f1f1] rounded-[6px] h-auto pb-[10px]">
                                        <div className="h-[35px] bg-[#faf7f7] m-4 flex items-center px-4">
                                            <div className="mr-[150px]"><h3 className="text-[16px] font-bold">RAM</h3></div>
                                            <div><p className="text-[16px] text-[#c2c2c2] font-semibold">{productdetail.ram}</p></div>
                                        </div>
                                        <div className="h-[35px] bg-[#faf7f7] m-4 flex items-center px-4">
                                            <div className="mr-[152px]"><h3 className="text-[16px] font-bold">CPU</h3></div>
                                            <div><p className="text-[16px] text-[#c2c2c2] font-semibold">{productdetail.cpu}</p></div>
                                        </div>
                                        <div className="h-[35px] bg-[#faf7f7] m-4 flex items-center px-4">
                                            <div className="mr-[152px]"><h3 className="text-[16px] font-bold">HDD</h3></div>
                                            <div><p className="text-[16px] text-[#c2c2c2] font-semibold">{productdetail.dia_cung}</p></div>
                                        </div>
                                        <div className="h-[35px] bg-[#faf7f7] m-4 flex items-center px-4">
                                            <div className="mr-[133px]"><h3 className="text-[16px] font-bold">COLOR</h3></div>
                                            <div><p className="text-[16px] text-[#c2c2c2] font-semibold">{productdetail.mau_sac}</p></div>
                                        </div>
                                        <div className="h-[35px] bg-[#faf7f7] m-4 flex items-center px-4">
                                            <div className="mr-[140px]"><h3 className="text-[16px] font-bold">MASS</h3></div>
                                            <div><p className="text-[16px] text-[#c2c2c2] font-semibold">{productdetail.can_nang} kg</p></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[397px] w-[1025px] ml-[10px] bg-[#fff] mt-[20px]  pt-[45px] mb-[40px]">
                            <h2 className="mx-[16px] text-[22px] font-bold">See what Ambasadors says about the product</h2>
                            <div className=" grid grid-cols-[48%_48%] gap-[35px] mx-[16px] mt-[10px]">
                                <div>
                                    <div className="flex justify-between items-center mb-[15px]">
                                        <div className="flex items-center  gap-[10px] ">
                                            <div className="flex justify-center items-center rounded-[50%] bg-[#f1f1f1] w-[66.63px] h-[66.63px]"><i className="fa-regular fa-user text-[#d7d7d7]"></i></div>
                                            <div className="">
                                                <p className="font-sans font-semibold text-[18px]">Name Surname</p>
                                                <div className="border-2 border-[black] w-[93px] h-[22px] rounded-[20px] flex justify-center items-end"><p className="text-[10px] font-bold trans-late-Y-[-10px]">AMBASSADOR</p></div>
                                            </div>
                                        </div>
                                        <ButtonSHOPWITHME />
                                    </div>
                                    <p className="text-[14px] leading-[22px]"><strong className="text-[30px] font-serif font-extrabold text-[black]">“</strong> Pede dis ipsum placeat do exercitation laborum nostra non inceptos sociosqu dolorum doloremque commodo, ultrices tempus. <strong className="text-[30px] font-serif font-extrabold text-[black]">”</strong></p>
                                    <h2 className=" text-[18px] my-[10px] font-bold">What I love about this product</h2>
                                    <div className="grid grid-cols-[25%_25%_25%_25%]">
                                        <div><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-10px]"><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-20px]"><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-30px]"><ButtonKindDetailPageSmall/></div>
                                    </div>
                                    <div className="my-[20px] flex justify-center items-center"><ButtonViewMore/></div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-[15px]">
                                        <div className="flex items-center  gap-[10px] ">
                                            <div className="flex justify-center items-center rounded-[50%] bg-[#f1f1f1] w-[66.63px] h-[66.63px]"><i className="fa-regular fa-user text-[#d7d7d7]"></i></div>
                                            <div className="">
                                                <p className="font-sans font-semibold text-[18px]">Name Surname</p>
                                                <div className="border-2 border-[black] w-[93px] h-[22px] rounded-[20px] flex justify-center items-end"><p className="text-[10px] font-bold trans-late-Y-[-10px]">AMBASSADOR</p></div>
                                            </div>
                                        </div>
                                        <ButtonSHOPWITHME />
                                    </div>
                                    <p className="text-[14px]  leading-[22px]"><strong className="text-[30px] font-serif font-extrabold text-[black]">“</strong> Pede dis ipsum placeat do exercitation laborum nostra non inceptos sociosqu dolorum doloremque commodo, ultrices tempus. <strong className="text-[30px] font-serif font-extrabold text-[black]">”</strong></p>
                                    <h2 className=" text-[18px] my-[10px] font-bold">What I love about this product</h2>
                                    <div className="grid grid-cols-[25%_25%_25%_25%]">
                                        <div><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-10px]"><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-20px]"><ButtonKindDetailPageSmall/></div>
                                        <div className="ml-[-30px]"><ButtonKindDetailPageSmall/></div>
                                    </div>
                                    <div className="my-[20px] flex justify-center items-center"><ButtonViewMore/></div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[746px] w-[1025px] ml-[10px] bg-[#fff] mt-[5px]  pt-[45px] mb-[40px]">
                            <h2 className="mx-[16px] text-[22px] font-bold">Product Description</h2>
                            <p className="mx-[16px] mt-[10px] mb-[20px] text-[13px] font-semibold text-justify">{productdetail.mo_ta}</p>
                            <h3 className="mx-[16px] text-[18px] font-bold">Key Ingredients</h3>
                            <div className="mx-[16px] mt-[10px] mb-[20px] grid grid-cols-[50%_50%] gap-[5px] text-justify">
                                <div className="mr-[5px] leading-[30px]">
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Ingredient - Eget cursus officiis, consequuntur adipitin cidunt scinimano</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Ingredient - Eget cursus officiis, consequuntur adipisci  tincidunt, velit nemo dict.</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Ingredient - Eget cursus officiis, consntur adipisci  tincidunt, velit .</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Ingredient - Eget cursus officiis, consequuntur adipisci.</p>
                                </div>
                                <div className="mr-[5px] leading-[30px]">
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Nisl! Venenatis, esse conubia nibh ipsum, eiusmod sequi, vitae convallis lectus dignis.</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Nisl! Venenatis, esse conubia nibh ipsum, eiusmod sequi, vitae convallis lectus dignissim integer.</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Nisl! Venenatis, esse conubia nibh ipsum, eiusmod sequi, vitae convallis lect.</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Nisl! Venenatis, esse conubia nibh ipsum, eiusmod sequi.</p>
                                    <p className="text-[12px] font-sans font-bold"><i className="fa-regular fa-circle text-[7px] translate-y-[-4px] "></i> Nisl! Venenatis, esse conubia nibh ipsum, eiusmod sequi, vitae convallis lect.</p>
                                </div>
                            </div>
                            <h3 className="mx-[16px] text-[18px] font-bold">How to Use?</h3>
                            <p className="my-[10px] mx-[16px] text-[13px] font-semibold text-justify">Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec! Facilis eligendi litora mattis similique laborum dictumst sapien cubilia aute. Etiam, architecto bibendum, est odit laboriosam. Tempora minim maiores voluptatum. Cillum? Posuere. Imperdiet adipisci, beatae reprehenderit bibendu</p>
                            <h3 className="mx-[16px] text-[18px] font-bold">All Ingredients</h3>
                            <p className="my-[10px] mx-[16px] text-[13px] font-semibold text-justify">Water, Brassica Alcohol, Glycerin, Neopentyl Glycol Diethylhexanoate, Propanediol, Bis-Stearyl Dimethicone, Trimethylpentanediol/Adipic Acid Copolymer, Butyrospermum Parkii (Shea) Butter, Dimethicone, Squalane, Potassium Cetyl Phosphate, Retinol, Polysorbate 20, Caprylic/Capric Triglyceride, Vitis Vinifera (Grape) Seed Oil, Helianthus Annuus (Sunflower) Seed Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Oryza Sativa (Rice) Bran Extract, Opuntia Ficus-Indica Extract, Glycine Soja (Soybean) Extract, Saccharomyces Cerevisiae Extract, Hydrolyzed Collagen, Bakuchiol, Sodium Hyaluronate, Polymethylsilsesquioxane, HDI/Trimethylol Hexyllactone Crosspolymer, Caprylhydroxamic Acid, 1,2-Hexanediol, Xanthan Gum, Carbomer, Polysilicone-11, Disodium EDTA, Fragrance.</p>
                        </div>
                        <div className="h-[848px] ml-[10px] mb-[40px] flex justify-between">
                            <div className="bg-white w-[68%] h-full pt-[45px] px-[16px] relative">
                                 <div className=" flex justify-between items-center">
                                    <h2 className=" text-[22px] font-bold">Reviews ( 1480 )</h2>
                                    <ButtonWRITEREVIEW />
                                 </div>
                                 <div className="flex items-center mt-[10px] mb-[15px]">
                                    <i className="fa-regular fa-star text-[20px] mt-[-10px] mr-[10px]"></i>
                                    <div className="text-[16px] font-bold"><strong className="text-[28px] font-semibold">4 / 8</strong>Average Rating</div>
                                 </div>
                                 
                                 <Reviews/>
                                 <Reviews/>
                                 <Reviews/>
                                    
                                 <p className="text-[16px] font-sans font-bold text-center underline hover:text-[]">View All</p>
                            </div>
                            <div className="bg-white w-[30%]  pt-[50px] px-[16px]">
                                <h2 className="text-[22px] font-bold mb-[25px]">Top Reviews</h2>
                                
                                 <TopReviews/>
                                 <TopReviews/>

                            </div>
                        </div>
                </div>

)}









                
                <div className="h-[488px] bg-[#fff] mt-[5px] flex justify-center">
                    <div className="py-[20px]">
                        <h2 className="mx-[16px] ml-[-1px] text-[26px] mb-[20px] font-bold">Product Details</h2>
                        
                            <SlideProduct/>
                        
                    </div>
                </div>
        </div>

    );
}
export default  MainDetail;