import React from "react";
import AnimatedText from "../components/AnimatedText";
import { Btn } from "../components/Btn";
import { Section } from "../components/Section";
import { Background } from "../components/section-hero/Background";
import { CornerCut } from "../components/section-hero/CornerCut";
import HoverAnimation from "../components/HoverAnimation";
import { motion } from "framer-motion";
export const Hero = () => {
    return (
        <Section>
            <div id="home"></div>
            <Background />
            <CornerCut />
            {/* MAIN CONTAINER */}
            <div className="relative py-10 lg:px[5%]  max-w-7xl mx-auto h-[30rem] lg:h-[36vw] lg:flex lg:flex-col lg:justify-center lg:items-center text-pr">
                {/* LOGO AND TEXT CONTAINER */}
                <div className="text-center  my-9 lb:mb-0  lg:w-2/3 ">
                    {/* SHORT DESCRIPTION */}
                    <motion.div
                        className="font-jetBrains
              text-lg lg:text-base
              top-[5rem] xs:top-[2rem] left-[1.5rem]
              tracking-tighter text-primary absolute w-[13rem] xs:w-[16rem] sm:w-[23rem] lg:w-[15rem] text-left"
                        animate={{ opacity: ["0%", "100%"] }}
                        transition={{ duration: 1 }}
                    >
                        <AnimatedText
                            textContent={
                                "HEY,IT'S ME,GER.I REALLY ENJOY CODING INNOVATIVE, FUN & INTERACTIVE STUFF"
                            }
                            speed={12}
                        />
                    </motion.div>
                    {/* TITLE CONTAINER */}

                    <motion.div
                        className="w-5/6 max-w-xs
                mx-auto lg:max-w-none "
                        animate={{ opacity: ["0%", "100%"] }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="absolute bottom-[17.4vw] left-[22.2vw] text-[13.05vw] font-tungstenBold  cursor-default">
                            <span className=" text-[1.1rem] font-mono font-bold hidden lg:inline ">
                                01I
                            </span>
                            <span className="stroke-text">INNOVATIVE.</span>
                        </h1>
                        <h1 className="absolute bottom-[7.7vw] left-[29.6vw] text-[13.05vw] font-tungstenBold  cursor-default">
                            <span className=" text-[1.1rem] font-mono font-bold hidden lg:inline ">
                                02F
                            </span>
                            <span className="stroke-text">FUN.</span>
                        </h1>
                        <h1 className="absolute bottom-[-2vw] left-[5vw] text-[13.05vw] font-tungstenBold  cursor-default">
                            <span className=" text-[1.1rem] font-mono font-bold hidden lg:inline ">
                                03I
                            </span>
                            <span className="stroke-text">INTERACTIVE.</span>
                        </h1>
                    </motion.div>

                    {/* BTN CONTAINER */}
                    <motion.div
                        className="flex justify-center absolute top-[15rem] xs:top-[10rem] sm:top-[6rem] lg:top-[8rem] left-[1.5rem]"
                        animate={{ opacity: ["0%", "100%"] }}
                        transition={{ duration: 1 }}
                    >
                        <Btn color={"white"}>
                            <a
                                href="https://drive.google.com/file/d/17N1vdhd4FodnGyjymRU6fGdEvOWyFa9y/view?usp=sharing"
                                target="_blank"
                            >
                                <HoverAnimation textC={"GET MY CV"} />
                            </a>
                        </Btn>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
