import {WhatWeDo} from '@/components/WhatWeDo';
import MissionCard from '@/components/MissionCard';
import {OurBots } from '@/components/OurBots'
import BotCard from "@/components/BotCard";

//Images
import MissionImage from '@/app/images/competitions/nhrl2023-0.jpg'
import OurTeamImage from '@/app/images/competitions/nhrl2023-1.jpg'
import CompetitionImage from '@/app/images/competitions/nhrl2023-2.jpg'
import {PrismaClient} from "@prisma/client";
import {Divider} from "@nextui-org/react";
import { JSX } from 'react';
import Hero from "@/components/Hero";


const OurMission = {
    header: "Our Mission",
    body: "To complete development of combat robots while enabling its members to learn and apply engineering knowledge and concepts in a real, hands-on manner.",
    image: MissionImage.src,
    alt: "Rumblebots with Puerto Rican flag at NHRL on May 6, 2023",
    key: 1
};


const CombatRobotics = {
    header: "Combat Robotics",
    body: "Robot combat is an event where custom-built machines fight using various methods to incapacitate each other.",
    image: null,
    alt: null,
    key: 0
};

const OurTeam = {
    header: "Our Team",
    body: "Our team is mainly open to members of all engineering majors; however, we do welcome members from any department of the University should they demonstrate interest and motivation in the project.",
    image: OurTeamImage.src,
    alt: "Rumblebots inside cage at NHRL on May 6, 2023",
    key: 2
};


const Competitions = {
    header: "Competitions",
    body: "Competitions serve as the battlegrounds where cutting-edge technology meets strategic brilliance, showcasing the relentless spirit of our team and the extraordinary capabilities of our combat robots.",
    image: CompetitionImage.src,
    alt: "Rumblebots at NHRL on May 6, 2023",
    key: 3
}
type Bots = {images: {id: number, alt: string | null, path: string | null}[] , id: number, name: string | null, desc: string | null, weight: string | null, category: string | null, logo: string | null, createdAt: Date, updatedAt: Date}[]


async function getBots() {
    const prisma = new PrismaClient()
    return prisma.bot.findMany({include: {images: true}, orderBy: {id: 'asc'}});
}


export default async function Home() {
    const Bots = await getBots()

    return (
        <main className="container px-4 mx-auto">
            <Hero/>
            <div className="flex gap-8 flex-wrap lg:flex-nowrap">
                <div className="flex flex-col gap-8 lg:basis-1/3">
                    <MissionCard key={CombatRobotics.key} body={CombatRobotics.body} header={CombatRobotics.header}
                                 image={CombatRobotics.image} imageAlt={CombatRobotics.alt}
                                 iconID={CombatRobotics.key}/>
                    <MissionCard key={Competitions.key} body={Competitions.body} header={Competitions.header}
                                 image={Competitions.image} imageAlt={Competitions.alt} iconID={Competitions.key}/>
                </div>
                <div className="lg:basis-1/3">
                    <MissionCard key={OurTeam.key} body={OurTeam.body} header={OurTeam.header} image={OurTeam.image}
                                 imageAlt={OurTeam.alt} iconID={OurTeam.key}/>
                </div>
                <div className="lg:basis-1/3">
                    <MissionCard key={OurMission.key} body={OurMission.body} header={OurMission.header}
                                 image={OurMission.image} imageAlt={OurMission.alt} iconID={OurMission.key}/>
                </div>
            </div>
            <WhatWeDo/>
            <div className="flex flex-col text-start pb-4">
                <h2 className="font-heading font-bold text-5xl">Our <span className="text-primary-500">RUM</span>blebots
                </h2>
                <h3 className="font-body font-light text-xl"> Dive into the intricate details and evolution of our
                    metallic gladiators, each a testament to relentless engineering.</h3>
            </div>
            <OurBots bots={Bots}/>
        </main>
    );
}
