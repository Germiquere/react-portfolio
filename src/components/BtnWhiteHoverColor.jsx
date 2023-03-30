import React from "react";
import HoverAnimation from "./HoverAnimation";

export const BtnWhiteHoverColor = ({ tContent }) => {
  return (
    <button className="primary button">
      <div className="label">
        <span className="hover-effect"></span>
        <span className="label-text">
          <HoverAnimation textC={tContent} />
        </span>
      </div>
    </button>
  );
};
