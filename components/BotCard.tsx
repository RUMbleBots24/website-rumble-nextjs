"use client";
import React from 'react';
import {Card, CardHeader, CardBody, Image, Accordion, AccordionItem} from "@nextui-org/react";



interface Props {
    name: string | null;
    desc: string | null;
    weight: string | null;
    category: string | null;
    logo:  string | null
    logoAlt: string | null
    image: string | null;
    imageAlt: string | null;
    OnClick : any
}

const BotCard: React.FC<Props>=({name, desc, category, logo, logoAlt, image, imageAlt, OnClick})=>{
    console.log(logo)
    return(
        <Card onPress={OnClick} isHoverable isPressable className="bg-secondary-200 shadow-xl h-full">
            {(image !== null && imageAlt !== null) && <Image src={image} alt={imageAlt} radius="none" />}
            {(logo !== null && logoAlt !== null) && <div className="absolute top-1 left-1 w-1/6"><Image src={logo} alt={logoAlt} radius="none"/></div>}
            <CardHeader className="flex-col justify-center">
                <h2 className="font-heading font-bold text-2xl">{name}</h2>
                <h3 className="font-heading text-xl font-light">{category}</h3>
            </CardHeader>
        </Card>
    )
}

export default BotCard;