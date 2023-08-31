import React, { useEffect, useRef, useState } from "react";
import { Btn } from "../Btn";
import HoverAnimation from "../HoverAnimation";
import { data } from "../constants/index";
import { useTextAnimation } from "../../hooks/useTextAnimation";
const ProjectGallery = () => {
  const { handleAnimation } = useTextAnimation();
  const handleHover = ({ target }) => {
    // e.currentTarget
    const firstP = target.querySelector("p:first-of-type");
    handleAnimation(firstP);
    // console.log(firstP);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      {/* COL LEFT */}
      <div className="w-full flex-1 relative gap-[5px]  border-slate-900/40 border-[1px] border-b-[0px] lg:border-b-[1px] border-l-[0px] xl:border-l-[1px]">
        {/* HEADER */}
        <div className="flex  justify-between w-full relative pt-5 font-dinw05Bold  border-slate-900/40 border-b-[1px]">
          <div className="px-6 flex justify-between w-full items-start">
            <p className=" relative inline text-[10px] text-gray-600 font-jetBrains">
              <span
                className={`absolute  w-[6px] h-[6px] top-[25%] left-[-10px] bg-tertiary`}
              ></span>
              PROJECTS
            </p>
            <div className="text-lg">
              <p>TAKE A LOOK</p>
              <p>AT ALL</p>
              <p>MY PROJECTS</p>
            </div>
          </div>
        </div>
        {/* CARDS */}
        {data.map((card, i) => {
          if (i % 2 !== 0) {
            return (
              <div
                key={i}
                className="w-full flex flex-col px-6 py-6 transition-all duration-300 border-slate-900/40 border-b-[1px]  hover:text-primary hover:bg-secondary "
                onMouseEnter={handleHover}
              >
                <div className="relative">
                  <span
                    className={`absolute  w-[6px] h-[6px] top-[11px] left-[-10px] bg-tertiary`}
                  ></span>
                  <p
                    className="relative inline text-[10px]  font-jetBrains"
                    data-my-value={`PROJECT ${card.id}`}
                  >
                    {`PROJECT ${card.id}`}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-center mb-3">
                    <h3 className="text-3xl font-tungstenBold">{card.title}</h3>
                    <div className="flex gap-2">
                      {card.tech.map((e) => {
                        return (
                          <small className="font-dinw05Bold">
                            <span className="text-tertiary">#</span>
                            {e}
                          </small>
                        );
                      })}
                    </div>
                  </div>

                  <p className="pb-3 font-jetBrains uppercase">
                    {card.description}
                  </p>
                </div>

                <img
                  src={card.photo}
                  alt={card.title}
                  className="w-full rounded-md"
                />
                <div className="sm:flex-row flex flex-col gap-3 pt-3">
                  <a href={card.demo} target="_blank">
                    <Btn accentBorder color="purple">
                      <HoverAnimation textC={"DEMO"} />
                    </Btn>
                  </a>
                  <a href={card.code} target="_blank">
                    <Btn accentBorder color="purple">
                      <HoverAnimation textC={"CODE"} />
                    </Btn>
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* COL RIGHT */}
      <div className="w-full flex-1 relative gap-[5px]  border-slate-900/40 border-[1px] border-b-[0px] lg:border-b-[1px] sm:border-l-[0]">
        {/* CARDS */}
        {data.map((card, i) => {
          if (i % 2 == 0) {
            return (
              <div
                onMouseEnter={handleHover}
                key={i}
                className="w-full flex flex-col px-6 py-6 transition-all duration-300  border-slate-900/40 border-b-[1px]  hover:text-primary hover:bg-secondary "
              >
                <div className="relative">
                  <span
                    className={`absolute  w-[6px] h-[6px] top-[11px] left-[-10px] bg-tertiary`}
                  ></span>
                  <p
                    className="relative inline text-[10px]  font-jetBrains"
                    data-my-value={`PROJECT ${card.id}`}
                  >
                    {`PROJECT ${card.id}`}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-center mb-3">
                    <h3 className="text-3xl font-tungstenBold">{card.title}</h3>
                    <div className="flex gap-2">
                      {card.tech.map((e) => {
                        return (
                          <small className="font-dinw05Bold">
                            <span className="text-tertiary">#</span>
                            {e}
                          </small>
                        );
                      })}
                    </div>
                  </div>
                  <p className="pb-3 font-jetBrains uppercase">
                    {card.description}
                  </p>
                </div>
                <img
                  src={card.photo}
                  alt={card.title}
                  className="w-full rounded-md"
                />
                <div className="sm:flex-row flex flex-col gap-3 pt-3">
                  <a href={card.demo} target="_blank">
                    <Btn accentBorder color="purple">
                      <HoverAnimation textC={"DEMO"} />
                    </Btn>
                  </a>
                  <a href={card.code} target="_blank">
                    <Btn accentBorder color="purple">
                      <HoverAnimation textC={"CODE"} />
                    </Btn>
                  </a>
                </div>
              </div>
            );
          }
        })}
        {/* KEEP CLONE */}
        {/* PORTFOLIO */}
        {/* <div className="w-full flex flex-col px-6 py-6 transition-all  ">
          <p className="relative main-square inline text-[10px]  font-jetBrains">
            PROYECT 003
          </p>
          <h3 className="text-3xl font-tungstenBold">MANAGE LANDING PAGE</h3>
          <p className="pb-3 font-jetBrains uppercase">
            In this proyect I created a responsive layout hightlighting the
            information about the company.The main goal was to create a fresh
            and simple landing page.
          </p>

          <img src={manageImage} alt="imagen" className="w-full rounded-md" />
          <div className="sm:flex-row flex flex-col gap-3 pt-3">
            <a
              href="https://germiquere.github.io/ManageWeb.github.io/"
              target="_blank"
            >
              <Btn accentBorder white={false}>
                <HoverAnimation textC={"DEMO"} />
              </Btn>
            </a>
            <a
              href="https://github.com/Germiquere/ManageWeb.github.io"
              target="_blank"
            >
              <Btn accentBorder white={false}>
                <HoverAnimation textC={"CODE"} />
              </Btn>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectGallery;
