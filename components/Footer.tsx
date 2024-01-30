"use client";
import React from "react";
import Rueda from "@/app/images/logos/rumblebots.png";
import {Image} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons/faBoltLightning";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons/faChartColumn";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

export const Footer = () => {
  return (
    <footer className="bg-background-100">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex justify-center">

              <a href="#" className="flex items-center mr-2">
                <Image src={Rueda.src} className="h-20 w-24" alt="Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="border-r border-gray pr-4 ">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase underline">
                  The Team
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <FontAwesomeIcon
                      className="text-slate-500"
                      icon={faGears}
                    />{" "}
                    <a href="#" className="hover:underline">
                      Design & Manufacturing
                    </a>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faBoltLightning}
                      className="text-yellow-400"
                    />{" "}
                    <a href="#" className="hover:underline">
                      Electronics
                    </a>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      icon={faChartColumn}
                      className="text-blue-400"
                    />{" "}
                    <a className="hover:underline">Logistics & Marketing</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCode} className="text-red-500" />{" "}
                    <a className="hover:underline">Software</a>
                  </li>
                </ul>
              </div>
              <div className="border-r border-gray pr-4">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase underline">
                  The Bots
                </h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Arsenal
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      30-lb
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      20-lb
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Mini-Sumo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      3-lb
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <a
                  href="#"

                  className="shadow-xl shadow-green-700 border-[0.5px] p-2 rounded-xl hover:scale-105 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-300 text-black text-center lg:text-xl md:text-md sm:text-sm"
                >
                  Join Our Team!
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                RUMblebots
              </a>
            </span>
            <div>
              <FontAwesomeIcon className="text-gray-500 mr-2" icon={faAt} />
              <a
                className="text-blue-500 underline"
                href="mailto:rumblebots.crome@gmail.com"
              >
                rumblebots.crome@gmail.com
              </a>
            </div>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 ">
              <a href="https://www.instagram.com/rumblebotsuprm/">
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl hover:text-gray-700"
                  icon={faInstagram}
                />
              </a>
              <a href="https://www.facebook.com/UprmRumblebots">
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl hover:text-gray-700"
                  icon={faFacebook}
                />
              </a>
              <a href="https://twitter.com/rumblebotsuprm">
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl hover:text-gray-700"
                  icon={faXTwitter}
                />
              </a>
              <a href="https://www.linkedin.com/company/rumblebots/">
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl hover:text-gray-700"
                  icon={faLinkedin}
                />
              </a>
              <a href="https://github.com/RUMblebots-Software">
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl hover:text-gray-700"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};
export default Footer;
