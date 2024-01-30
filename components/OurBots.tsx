'use client'


import React from 'react';
import BotCard from "@/components/BotCard";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import {images} from "next/dist/build/webpack/config/blocks/images";



interface Props  {
    bots : {
        images: {id: number, alt: string | null, path: string | null}[] ,
        id: number,
        name: string | null,
        desc: string | null,
        weight: string | null,
        category: string | null,
        logo: string | null,
        createdAt: Date,
        updatedAt: Date
    }[]
}

export  const OurBots = ({bots} : Props) => {
    console.log(bots)
    const [botName, setBotName] = useState(bots[0].name)
    const [botDesc, setBotDesc] = useState(bots[0].desc)

    function handleClick(i : number) {
            console.log("Change")
            setBotName(bots[i - 1].name)
            setBotDesc(bots[i - 1].desc)
    }

    return (
        <div className="flex flex-row justify-evenly gap-6">
            <div className="basis-1/3">
                <h1 className="font-heading font-bold text-3xl">{botName}</h1>
                <h2 className="font-body font-light text-xl">{botDesc}</h2>
            </div>
            <div className="basis-2/3 flex flex-wrap flex-row justify-evenly items-stretch gap-6">
                {bots.map((Bot)=>(
                    <div  key={Bot.id} className="w-auto basis-1/4">
                            <BotCard OnClick={() => handleClick(Bot.id)} name={Bot.name} desc={Bot.desc} weight={Bot.weight} category={Bot.category}
                                     logo={Bot.images[1] !== undefined? Bot.images[1].path: null}
                                     logoAlt={Bot.images[1] !== undefined? Bot.images[1].alt: null}
                                     image={Bot.images[0] !== undefined? Bot.images[0].path: null}
                                     imageAlt={Bot.images[0] !== undefined? Bot.images[0].alt: null}/>

                    </div>
                ))}

            </div>
        </div>
    );
}
