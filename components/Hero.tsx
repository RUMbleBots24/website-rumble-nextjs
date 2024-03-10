"use client";

import React from 'react';
import {CardBody, Image, Card, CardHeader} from '@nextui-org/react';
import {CarouselContent,CarouselItem,Carousel} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {Button} from "@/components/ui/button";
import {type CarouselApi} from "@/components/ui/carousel";


const Hero = () => {
    const [count, setCount] = React.useState(0);
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)

        })


    },[api])

    return (
        <div className={" md:w-full flex flex-col gap-0 mb-8"}>
            <Carousel setApi={setApi} className={"  text-white"} plugins={[Autoplay({delay:5000, stopOnMouseEnter : true })]}>
                <CarouselContent >
                    <CarouselItem>
                        <Image src={'./electronics-2019.jpg'} className={"md:h-[50vh] md:w-[100vw] object-top object-cover rounded-b-none"} alt={'hero1'}  />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={'/mecanica-2019.jpg'} className={"md:h-[50vh] md:w-[100vw] object-top object-cover rounded-b-none"} alt={'hero2'}  />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={'/spring2022-openhouse.jpeg'} className={"md:h-[50vh] md:w-[100vw] object-top object-cover rounded-b-none"} alt={'hero3'} />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <Card className={"rounded-t-none bg-secondary-200"}>
                <CardHeader>
                    {Array.from(Array(count).keys()).map((i) => (
                        <Button
                            key={i}
                            className={`mx-1 h-1.5 flex-grow rounded-full p-0  ${
                                i === current - 1
                                    ? "bg-white hover:bg-white"
                                    : "bg-neutral-600/75"
                            }`}
                            onClick={() => api?.scrollTo(i)}
                        />
                    ))}
                </CardHeader>
                <CardBody>
                    <h1 className={"text-4xl font-bold"}>Welcome to RumbleBots</h1>
                    <p className={"text-lg "}>We are a group of students from the University of Puerto Rico at Mayaguez that design, manufacture, code, test, optimize and market combat robots of varying weights to represent the UPRM and Puerto Rico at the Nationals Robotics League and other robotics competitions.</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default Hero;