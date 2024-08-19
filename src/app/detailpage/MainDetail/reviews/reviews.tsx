export default function Reviews() {
    return (
        <div>
            <div className="flex gap-[10px] pb-[20px]">
                <div><i className="fa-regular fa-circle-user text-[40px]"></i></div>
                <div className="">
                <p className="text-[14px] font-sans font-bold">Name Surname</p>
                <div className="mt-[-2px]">
                    <i className="fa-solid fa-star mr-[7px]"></i>
                    <i className="fa-solid fa-star mr-[7px]"></i>
                    <i className="fa-solid fa-star mr-[7px]"></i>
                    <i className="fa-regular fa-star mr-[7px]"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <p className="text-[12px] mb-[10px] font-sans font-medium">5 September 2018</p>
                <p className="text-[14px] w-[610px] font-sans font-medium text-justify break-words">Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt deleniti facilisi, est orci libero, aspernatur asperiores ornare aliquip vehicula? Proident? Nobis? Deserunt, conubia facilis, amet torquent, voluptate dictum, sapien, lorem? Veniam! Vestibulum tenetur atque ultricies justo pariatur dis eget condimentum libero, occaecat! Vulputate molestias quaerat, maxime!.</p>
                </div>
            </div>
            <hr className="mb-[20px]"/>
        </div>
    );
}