export function ButtonShopNow() {
    return (
        <button className="absolute text-[16px] font-bold w-[160px] h-[63px] border-2 border-black translate-y-[-90px] bg-[#fff] hover:bg-[#000] hover:text-[#fff]" >SHOP NOW</button>
    );
}

export function ButtonSHOPWITHME() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans font-bold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">SHOP WITH ME</div>
    )
}

export function ButtonWRITEREVIEW() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans font-bold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">WRITE REVIEW</div>
    )
}

export function ButtonKindDetailPageSmall() {
    return (
        <div className="flex mb-[10px] justify-center items-center text-[12px] w-[94px] h-[35px] bg-[#f1f1f1] text-[#000] font-sans font-bold hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">Lorem Ipsem</div>
    )
}

export function ButtonViewMore() {                                                                                                                                                                                                                                                               // text-inherit dùng để kế thừa màu từ thẻ cha trong trường hợp này khi hover vào thẻ cha                                                                           
    return (
        <div className="flex mb-[10px] justify-center items-center text-[12px] w-[105px] h-[31px] bg-[#f1f1f1] border-2 border-[#000] text-[#000] font-sans font-bold hover:bg-[#000] hover:text-[#fff] hover:border-[#000] cursor-pointer"><i className="fa-solid fa-chevron-down text-inherit text-black mr-[5px]"></i> View More</div>
    )
}

export function ButtonTRACKPRICE() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans font-bold border-2 border-[#000] hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">TRACK PRICE</div>
    )
}

export function ButtonRemoveCartPD() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-[#fff] text-[#000] font-sans font-bold border-2 border-[#000] hover:bg-[#000] hover:text-[#fff] hover:border-[#000] cursor-pointer">REMOVE</div>
    )
}

export function ButtonContinue() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans font-bold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">CONTINUE</div>
    )
}

export function ButtonRegister() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans text-[16px] font-semibold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer">REGISTER</div>
    )
}

export function ButtonAddNewReview() {
    return (
        <div className="flex justify-center items-center w-[145px] h-[49px] bg-black text-[#fff] font-sans text-[16px] font-semibold border-2 hover:bg-[#fff] hover:text-[#000] hover:border-[#000] cursor-pointer"><a href="http://localhost:3000/addnewreview">ADD NEW REVIEW</a></div>
    )
}