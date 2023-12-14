import { motion, useViewportScroll, useTransform } from "framer-motion";
import AboutImage from "./person.png";
export const AboutImg = () => {
    const { scrollYProgress } = useViewportScroll();
    const translateImg = useTransform(scrollYProgress, [0.6, 0.3], [-50, 550]);
    const img = <img src={AboutImage} alt="reyana" />;
    return (
        <div className=" w-full lg:w-full lg:max-w-[50%]">
            <div className="relative mt-5 z-20">
                <div className="pt-[100%] md:pt-[80%] lg:pt-[106%]"></div>
                <div
                    className="absolute h-full
          -top-[5%] sm:top-0 md:-top-[5%] lg:top-[-30%]
          w-[83%] sm:w-[75%] md:w-[68%] lg:w-[125%]
          left-[10%] sm:left-[12%] md:left-[20%] lg:-left-[7%]"
                >
                    <div className="block lg:hidden">{img}</div>
                    <motion.div
                        // style={{ translateY: translateImg }}
                        className="ease-out duration-150 
              hidden lg:block"
                    >
                        {img}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
