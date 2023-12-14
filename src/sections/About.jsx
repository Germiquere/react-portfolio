import { Section } from "../components/Section";
import { SectionHeadMotion } from "../components/SectionHeadMotion";
import AnimatedText from "../components/AnimatedText";
import { Background } from "../components/section-hero/Background";
import { CornerCut } from "../components/section-hero/CornerCut";
// import AgentImage from "../components/section-agents/AgentImage";
import { AboutImg } from "../components/section-about/AboutImg";

const About = () => {
    return (
        <Section className="bg-secondary  bg-bottom pb-10 overflow-x-clip">
            <Background />
            {/* <CornerCut /> */}
            <div
                id="about"
                className="lg:flex lg:flex-row-reverse lg:items-center h-screen "
            >
                {/* Text & CTA */}
                <div className="overflow-hidden relative text-primary lg:w-[42%] lg:mb-[5vw] lg:ml-7 z-30 ">
                    <h3
                        className="overflow-hidden relative font-tungstenBold leading-[0.94] py-7 mt-12 border-t
              mb-3
        text-[3.5rem] md:text-[6.25rem] lg:text-[7.5rem]
        md:pt-10
        "
                    >
                        <SectionHeadMotion>
                            <AnimatedText
                                textContent={"ABOUT ME"}
                                infinite
                                delay={5000}
                            />
                        </SectionHeadMotion>
                    </h3>

                    <h3 className="font-bold mb-4 text-xl leading-tight tracking-[-0.01em] pl-3 lg:pl-0">
                        WHO AM I?
                    </h3>
                    <p className="font-dinw05Bold text-lg leading-snug md:max-w-lg lg:max-w-[80%] pl-3 lg:pl-0 ">
                        Hey what's up. My name is German Miquere and I am
                        looking for a full time position in a web devolopement
                        company as a front-end developer. My main goal not only
                        is to apply my knowleadge to boost the team I will join
                        in the corporation but also to get my own skills to the
                        next level in order to become a better developer.
                    </p>
                    <div
                        className="z-30
            text-center lg:text-left
            -translate-x-1/2  lg:translate-x-0
            left-[50%] lg:left-0
            absolute lg:static
            mt-[82vw] sm:mt-[70vw] md:mt-[60vw] lg:mt-12
            "
                    >
                        {/* <RiotButton white>View all agents</RiotButton> */}
                    </div>
                </div>

                <AboutImg />
            </div>

            {/* <Background /> */}
        </Section>
    );
};

export default About;
