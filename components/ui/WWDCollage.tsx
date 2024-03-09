"use client";

import React, { useEffect, useState } from "react";
import workshop1 from "@/app/images/workshop/workshop-2022-1.jpg";
import workshop2 from "@/app/images/workshop/workshop-2022-2.jpg";
import meeting1 from "@/app/images/departments/meeting-10-04-2022-1.jpg";
import meeting2 from "@/app/images/departments/meeting-10-04-2022-2.jpg";
import sprin1 from "@/app/images/departments/spring2022-openhouse.jpeg";
import software from "@/app/images/departments/software-2019.jpg";
import meeting10 from "@/app/images/departments/meeting-10-04-2022-3.jpg";

import {CarouselItem, Carousel,CarouselContent, CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import { Fade } from "react-awesome-reveal";
import {Image} from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
export const WWDCollage = () => {
  const [width, setWidth] = useState(721);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  if (width > 720) {
    return (
      <div className="ml-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
          <div className="justify-center flex flex-col gap-4">
            <div className="">
              <Fade triggerOnce delay={200}>
                <Image
                  className="h-auto max-w-full"
                  src={workshop1.src}
                  alt="wrk1"
                />
              </Fade>
            </div>
            <div className="">
              <Fade triggerOnce delay={150}>
                <Image
                  className="h-auto max-w-full "
                  src={workshop2.src}
                  alt=""
                />
              </Fade>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Fade triggerOnce delay={250}>
                <Image
                  className="h-auto max-w-full "
                  src={meeting1.src}
                  alt=""
                />
              </Fade>
            </div>
            <div>
              <Fade triggerOnce delay={250}>
                <Image
                  className="h-auto max-w-full "
                  src={meeting10.src}
                  alt=""
                />
              </Fade>
            </div>
            <div>
              <Fade triggerOnce delay={225}>
                <Image
                  className="h-auto max-w-full "
                  src={meeting2.src}
                  alt=""
                />
              </Fade>
            </div>
          </div>
          <div className="justify-center flex flex-col gap-4">
            <div className="">
              <Fade triggerOnce delay={100}>
                <Image
                  className="h-auto max-w-full "
                  src={sprin1.src}
                  alt=""
                />
              </Fade>
            </div>
            <div>
              <Fade triggerOnce delay={300}>
                <Image
                  className="h-auto max-w-full"
                  src={software.src}
                  alt=""
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Carousel
        className=" bg-black "
        plugins={[Autoplay({ delay: 5000, stopOnHover: true })]}
      >
        <CarouselContent className="h-96 w-full">
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={software.src} alt="software" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={sprin1.src} alt="sprint1" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={meeting2.src} alt="meeting2" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={meeting10.src} alt="meeting10" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={meeting1.src} alt="meeting1" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-cover" src={workshop2.src} alt="workshop2" />
            </CarouselItem>
            <CarouselItem className="h-full w-full">
                <Image className="h-full w-full object-fill" src={workshop1.src} alt="workshop1"/>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    );
  }
};
