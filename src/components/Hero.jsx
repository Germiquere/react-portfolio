import { motion } from "framer-motion";

import { styles } from "../styles";
import AnimatedText from "./AnimatedText";
// import { BtnBlack } from "./BtnBlack";
// import { BtnWhite } from "./BtnWhite";
// import { BtnWhiteHoverColor } from "./BtnWhiteHoverColor";
import { BtnBlack, BtnWhite, BtnWhiteHoverColor } from "../components";

const Hero = () => {
  return (
    <section className={`relative w-full max-w-7xl mx-auto`}>
      <div className={` `}>
        <div className=" w-60 text-primary  inset-0">
          <AnimatedText
            textContent={
              "HI,IT'S ME,GER.I REALLY ENJOY CODING INNOVATIVE,FUN & INTERACTIVE STUFF"
            }
            speed={7}
          />
        </div>

        <div className="absolute left-40 ">
          <div className="flex  font-bold justify-end ">
            <p className="mt-3 font-mono">01I</p>
            <h2 className="leading-[150px]  text-[150px] cursor-default stroke-text">
              I
            </h2>
          </div>
          <div className="flex font-bold justify-end ">
            <p className="mt-3 font-mono">02A</p>
            <h2 className="leading-[150px] text-[150px] cursor-default stroke-text">
              AM
            </h2>
          </div>
          <div className="flex   font-bold justify-end">
            <p className="mt-3 font-mono">03G</p>
            <h2
              className="leading-none text-[150px] cursor-default
                stroke-text"
            >
              G3R
            </h2>
          </div>
        </div>
        {/* btn */}

        <BtnWhite tContent={"CHAUCHI"} />
        <BtnBlack tContent={"HIRE ME"} />
        <BtnWhiteHoverColor tContent={"HOLA"} />
      </div>
      <div className="text-primary flex gap-2">
        <AnimatedText textContent={"SCROLL"} infinite="infinite" delay={4000} />
        <div className="logo">
          <div className="first"></div>
          <div className="second"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
