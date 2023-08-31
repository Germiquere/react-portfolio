import React from "react";
import AnimatedText from "./AnimatedText";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] font-jetBrains ">
      <div>
        <p>//</p>
        <AnimatedText textContent={"LOADING CONTENT"} infinite />
      </div>
    </div>
  );
};

export default Loader;
