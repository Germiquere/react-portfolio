import React from "react";
import AnimatedText from "../components/AnimatedText";
import { Section } from "../components/Section";
import { BackroundText } from "../components/section-works/BackroundText";
import { SectionHeadMotion } from "../components/SectionHeadMotion";
import image from "../components/section-works/proyect-img/gkeep.png";
import ProjectGallery from "../components/section-works/ProjectGallery";
// import Test from "../components/section-works/ProjectGallery";
const Works = () => {
    return (
        <Section id="work" clasName="overflow-hidden" blackVLine>
            {/* MAIN CONTAINER */}
            <div
                id="work"
                className="relative mx-auto max-w-[76.875rem] pt-[2.5rem] lg:pt-[1rem] pb-[10vw] l:pb-[6.25rem] "
            >
                {/* TITLE */}
                <h2 className="z-20 overflow-hidden relative text-tertiary font-tungstenBold translate-y-[24%] lg:translate-y[20%] leading-[0.95] text-[3.44rem] md:text-[6.25rem] lg:text-[7.5rem]">
                    <SectionHeadMotion>
                        <AnimatedText
                            textContent={"LATEST WORKS"}
                            infinite
                            delay={5000}
                        />
                    </SectionHeadMotion>
                </h2>
                <ProjectGallery />
                {/* <Test /> */}
            </div>
            <span
                className="absolute border-solid bottom-0 left-0 border-l-tertiary border-t-[transparent] z-10
    lg:border-t-[5vw]
    lg:border-l-[7.3vw]
    "
            ></span>
        </Section>
    );
};
export default Works;
