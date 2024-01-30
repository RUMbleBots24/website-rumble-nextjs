import React from "react";
import { WWDCollage } from "./ui/WWDCollage";

export const WhatWeDo = () => {
  return (
    <div className="md:grid grid-cols-2 p-10">
      <div>
        <WWDCollage />
      </div>
      <div className="flex flex-col justify-center items-center px-10">
        <div className="my-4">
          <h1 className="text-3xl md:text-5xl font-heading">
            What we do:
          </h1>
        </div>
        <div className="">
          <p className="text-center text-lg md:text-xl font-body">
            We design, manufacture, code, test, optimize and market combat
            robots of varying weights to represent the UPRM and Puerto Rico at
            the Nationals Robotics League and other robotics competitions.
          </p>
        </div>
      </div>
    </div>
  );
};
