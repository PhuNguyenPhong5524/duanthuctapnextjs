import { ButtonSHOPWITHME } from "@/app/Btton/Btton";


interface User {
    id: number;
    name: string;
    email: string;
    icon1:string;
    icon2:string;
    icon3:string;
}

const user: User[] = [
    {   
        id: 1,
        name: "Name Surname",
        email: "@username",
        icon1:'fa-brands fa-square-facebook',
        icon2:'fa-brands fa-square-twitter',
        icon3:'fa-brands fa-youtube'

    },
    {   
        id: 2,
        name: "Name Surname",
        email: "@username",
        icon1:'fa-solid fa-question',
        icon2:'fa-solid fa-question',
        icon3:'fa-solid fa-question'

    },
    {   
        id: 3,
        name: "Name Surname",
        email: "@username",
        icon1:'fa-solid fa-question',
        icon2:'fa-solid fa-question',
        icon3:'fa-solid fa-question'

    }
    ,
    {   
        id: 2,
        name: "Name Surname",
        email: "@username",
        icon1:'fa-solid fa-question',
        icon2:'fa-solid fa-question',
        icon3:'fa-solid fa-question'
    }   

    
];
{/* <div><i className="fa-brands fa-square-facebook" style={{fontSize: "25px"}}></i></div>
                        <div><i className="fa-brands fa-square-twitter" style={{fontSize: "25px"}}></i></div>
                        <div><i className="fa-brands fa-youtube" style={{fontSize: "27px"}}></i></div> */}

export default function ViewUserPage() {
    return (
        <>
        
            {
                user.map((sp, i) => (
                    <div className="bg-[#fff] h-[384px] w-[245px] ">
                        <div className="grid justify-center">
                            <div className="relative bg-[#ededed] flex justify-center items-center w-[143px] h-[143px] ml-[10px] rounded-[50%] mt-[10px] mb-[20px]">
                                <i className="fa-regular fa-user text-[#d5d5d5] text-[50px]"></i>
                            </div>
                            <div><h2 className="text-[22px] font-semibold font-sans">{sp.name}</h2></div>
                            <div className="mx-[15px] mt-[5px] mb-[5px]"><div  className="w-full mx-auto flex items-center justify-center text-[10px] font-bold p-[10px]  h-[28px] border-2 rounded-[50px] border-black pt-[20px]">{sp.email}</div></div>
                            <div className="flex justify-center gap-[10px] mt-[10px] mb-[25px]">
                                <div><i className={sp.icon1} style={{fontSize: "15px",border: "2px solid black",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                <div><i className={sp.icon2} style={{fontSize: "15px",border: "2px solid black",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                <div><i className={sp.icon3} style={{fontSize: "15px",border: "2px solid black",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                            </div>
                            <div className="flex justify-center items-center">
                                 <ButtonSHOPWITHME />
                            </div>
                       
                        </div>

                    </div>


                )
            )
            } 
       </>
    );
}
