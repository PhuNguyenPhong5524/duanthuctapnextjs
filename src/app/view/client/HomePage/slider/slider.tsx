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
  { id: 1, src: "https://theme.hstatic.net/1000084535/1001065151/14/slider-index-3.jpg?v=14" },
  { id: 2, src: "https://nguyencongpc.vn/media/news/1069-274295881_3110865975898620_1417727696820541299_n.jpg" },
  { id: 3, src: "https://kimlongcenter.com/upload/image/lap-top-doanh-nhan-cao-cap(1).jpg" },
  { id: 4, src: "https://cdn.tgdd.vn/News/1561630/laptopvanphongdangmua-1280x720.jpg" },
  { id: 5, src: "https://nguyencongpc.vn/media/lib/18-05-2022/banner.jpg" }
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

    const autoSlide = () => {
      const nextIndex = api.selectedScrollSnap() + 1
      if (nextIndex >= images.length) {
        api.scrollTo(0) // Chuyển về slide đầu tiên nếu đang ở slide cuối cùng
      } else {
        api.scrollNext() // Chuyển sang slide tiếp theo
      }
      setTimeout(autoSlide, 4000) // Đặt timeout mới cho lần chuyển slide tiếp theo
    }

    const timeoutId = setTimeout(autoSlide, 4000) // Bắt đầu slide tự động

    return () => clearTimeout(timeoutId) // Xóa timeout khi component bị unmount hoặc api thay đổi
  }, [api])
    
  return (
    <div className="flex justify-center mt-[25px] relative">
      <div className="relative">
        <Carousel setApi={setApi} className="w-full relative">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="w-full bg-[#fff]">
                <div className="flex items-center justify-center">
                  <img src={image.src} alt={`Slide ${image.id}`} className="h-[583px] w-[100%]" />
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
