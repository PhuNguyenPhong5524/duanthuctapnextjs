import { ButtonAddNewReview } from "@/app/component/Btton/Btton"
import BoxProduct from "@/app/view/client/HomePage/productPage/boxProduct/page"



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChartDashboard } from "../chart/chartDashboard"
import { TableDemo } from "../table/table"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[970px]">
      <TabsList className="">
        <TabsTrigger value="account">REVIEWED PRODUCTS</TabsTrigger>
        <TabsTrigger value="password">ANALYTICS</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="mt-[20px] flex  gap-[10px]">

            <div className="w-[50%]">
                <h2 className="text-[30px] font-bold mb-[10px]">4565 Visitors</h2>
                <ChartDashboard/>
            </div>
            <div className="w-[50%] ">
                <h2 className="text-[30px] font-bold mb-[10px]">4565 Visitors</h2>
                <ChartDashboard/>
            </div>


        </div>
        <h2 className="my-[20px]"> Purchases by Product</h2>
        <TableDemo/>
      </TabsContent>
      <TabsContent value="password">
        <div className="grid justify-center  ">
              <h2 className="text-[22px] font-bold mb-[10px] text-center">Reviewed 16 Products</h2>
              <div className="flex justify-center"><ButtonAddNewReview/></div>
              <div className="grid grid-cols-3 mt-[40px] gap-[20px]">
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  <div className="mb-[50px] "><BoxProduct/></div>
                  
              </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
