'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {Card} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faHandshake} from "@fortawesome/free-solid-svg-icons"; [faHandshake]
// Define the array of slides with numbers
const slides = [
    { image: "/img.png" },
    { image: "/img.png" },
    { image: "/img.png" },
    { image: "/img.png" },
    { image: "/img.png" },
];

const SponsorSlider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (



        <Card className="relative w-full p-4 overflow-hidden mt-8 bg-secondary-200 ">
            <div className={"flex flex-row gap-8 items-center"}>
                <FontAwesomeIcon icon={faHandshake} className={'text-4xl'} />
                <h1 className="text-2xl font-bold ">Our Sponsors</h1>
            </div>
            <div className={"[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"}>
                {/* Wrapping div for seamless looping */}
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 10,
                            repeat: Infinity,
                        }
                    }}
                >
                    {/* Render duplicated slides */}
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                            <div className="flex flex-col items-center justify-center h-full text-6xl">
                                <img alt={"Logo"} className={'h-20'} src={slide.image}/>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </Card>
    );
};

export default SponsorSlider;