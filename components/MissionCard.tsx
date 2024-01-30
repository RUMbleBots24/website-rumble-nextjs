"use client";
import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {WrenchScrewdriverIcon, RocketLaunchIcon, UserGroupIcon, TrophyIcon} from "@heroicons/react/24/solid";


interface Props {
    body: string;
    header: string;
    image: string | null;
    imageAlt: string | null;
    iconID: number;
}

const MissionCard: React.FC<Props>=({header, body, image, imageAlt,iconID})=>{

    let icon;

    let IconHeight = 50;

    switch (iconID){
        case 0:{
            icon = <WrenchScrewdriverIcon height={IconHeight}/>;
            break;
        }
        case 1:{
            icon = <RocketLaunchIcon height={IconHeight}/>;
            break;
        }
        case 2:{
            icon = <UserGroupIcon height={IconHeight}/>;
            break;
        }

        case 3:{
            icon = <TrophyIcon height={IconHeight}/>
            break;
        }

        default:{
            icon = <RocketLaunchIcon height={IconHeight}/>
            break;
        }
    }

    return(
        <Card isBlurred className="bg-secondary-200 shadow-xl">
            {(image !== null && imageAlt !== null) && <Image src={image} alt={imageAlt} radius="none" />}
            <CardHeader className="font-heading font-bold text-2xl">
                <div className="flex justify-center p-5">{icon}</div>
                {header}
            </CardHeader>
            <CardBody className="font-body text-start">
                {body}
            </CardBody>
        </Card>
    )
}

export default MissionCard;