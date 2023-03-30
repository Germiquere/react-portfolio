import React from "react";
import AnimatedText from "./AnimatedText";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <p>//</p>
        <AnimatedText infinite={true} textContent={"LOADING CONTENT"} />
      </div>
    </div>
  );
};

export default Loader;
