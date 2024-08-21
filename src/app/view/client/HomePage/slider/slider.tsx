"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Slider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex justify-center">
        <div className="">
            <Carousel setApi={setApi} className="w-full ">
              <CarouselContent >
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="w-[280px] h-[500px] bg-[#fff] grid justify-center   ">
                    <div className="flex items-center justify-center p-6 bg-black  w-[1200px]">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0" />
              <CarouselNext className="absolute right-0"/>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
      </div>
    </div>
  )
}
