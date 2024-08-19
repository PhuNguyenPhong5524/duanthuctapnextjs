import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 
export function HoverUS() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" style={{textDecoration:"none"}}>            
            <div ><i className="fa-solid fa-user"></i></div> 
            <p className="mx-[10px] text-[16px] font-semibold hover:underline-none">User</p>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[311px] translate-x-[-50px] mt-[5px] h-[520px]">
        <div className="absolute w-[20px] h-[20px] bg-[#fff] tranform rotate-45 translate-x-[175px] mt-[-25px]"></div>
        <div className="grid justify-center ">
            <h1 className="text-[17px] font-bold text-center mb-[20px]">SIGN IN</h1>
            <label className="text-[12px] font-semibold text-[black]">Username</label>
            <input type="text" placeholder="Email" className="border-2 border-black h-[40px] w-[270px] pl-[10px] mt-2 mb-[15px]"/>
            <label className="text-[12px] font-semibold text-[black]">Password</label>
            <input type="text" placeholder="Enter Password" className="border-2 border-black h-[40px] w-[270px] pl-[10px] mt-2"/>
            <a href="#" className="text-[12px] font-semibold text-[blue] mt-[10px] translate-x-[160px] underline">Forgot Password?</a> 
            <div className="flex justify-center mb-[20px]"><Button variant="outline" className=" w-[145px] h-[49px] border-none rounded-[0px] mt-[20px] font-bold bg-black text-[#fff] hover:bg-[#e1e1e1] hover:text-[#000]">SIGN IN</Button></div>
            <p className="text-[14px] text-center font-bold ">Or</p>
            <div className="">
                <div className="flex justify-center items-center gap-[2px] mb-[10px]">
                    <div className="border-2 border-[black] w-[187px] h-[46px] flex justify-center items-center">
                        <div className="mr-[5px]"><i className="fa-solid fa-question" style={{fontSize: "14px",border: "3px solid black",borderRadius:"2px",width:"22px",height:'22px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                        <div className="mt-[10px]"><p className="text-[14px] font-semibold text-[black]">Login with facebook</p></div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[2px] mb-[10px]">
                    <div className="border-2 border-[black] w-[187px] h-[46px] flex justify-center items-center">
                        <div className="mr-[5px]"><i className="fa-solid fa-question" style={{fontSize: "14px",border: "3px solid black",borderRadius:"2px",width:"22px",height:'22px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                        <div className="mt-[10px]"><p className="text-[14px] font-semibold text-[black]">Login with Google +</p></div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[2px] my-[20px]">
                    <p className="text-[16px] font-semibold text-[black]">New Member?</p>
                    <p className="text-[16px] font-semibold text-[black]"><a className="hover:text-[blue] hover:underline" href="/registration">Register Now</a></p>
                </div>
            </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}