"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"



interface img{
  id:number,
  src:string
}
const images: img[] = [
  { id: 1, src: "https://ngocthanhmobile.com/uploads/2021/12/baiviet-big-sale-cuoi-nam-co-mot-khong-hai.png" },
  { id: 2, src: "https://i.pinimg.com/736x/5a/5c/86/5a5c867bba6d55bb10207f03b7d54ed4.jpg" },
  { id: 3, src: "https://s3v2.interdata.vn:9000/s3-586-15343-storage/dienthoaigiakho/wp-content/uploads/2022/11/31011903/1200x678_FB-Cover-1.jpg" },
  { id: 4, src: "https://i.pinimg.com/564x/b1/5d/d9/b15dd9138d72890b81e67f812455638a.jpg" },
  { id: 5, src: "https://intphcm.com/data/upload/noi-dung-banner-khai-truong.jpg" }
]
export function Slider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState<number>(0)

  // Mảng chứa các đối tượng với id và src


  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex justify-center mt-[25px] relative">
      <div className="relative">
        <Carousel setApi={setApi} className="w-full relative">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="w-[298px] bg-[#fff]">
                <div className="flex items-center justify-center">
                  <img src={image.src} alt={`Slide ${image.id}`} className="object-cover h-[600px] w-[100%]" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute ml-1 left-0 bg-[#e8e8e8] text-[black] h-[80px] w-[25px] flex items-center rounded-[5px] cursor-pointer" />
          <CarouselNext className="absolute mr-1 right-0 bg-[#e8e8e8] text-[black] h-[80px] w-[25px] flex items-center rounded-[5px] cursor-pointer"></CarouselNext>
        </Carousel>
        <div className="absolute w-full mx-auto flex justify-center mt-[-20px]">
          {images.map((_, index) => (
            <div key={index} className={`h-2 w-2 mx-1 rounded-full cursor-pointer 
                ${current === index + 1 ? "bg-[#a7a7a7]" : "bg-[#fff]"}
            `}>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
