import React from "react";

// COLOR PROP: WHITE, BLACK, PURPLE(WHITE HOVER), EMPTY IS = TO PURPLE BUT WITH BLACK HOVER
export const Btn = ({ children, accentBorder = false, color }) => {
  const bg =
    color === "white"
      ? "bg-white"
      : color === "black"
      ? "bg-secondary"
      : "bg-tertiary";

  const textColor = color === "white" ? "text-secondary" : "text-primary";
  const hoverColor =
    color === "white"
      ? "group-hover:text-primary"
      : color === "black"
      ? "group-hover:text-secondary"
      : color === "purple"
      ? "group-hover:text-secondary"
      : "group-hover:text-primary";
  const bgSpan =
    color === "white"
      ? "bg-secondary"
      : color === "black"
      ? "bg-primary"
      : "bg-secondary";
  const bgSpanHover =
    color === "white"
      ? "group-hover:bg-primary"
      : color === "black"
      ? "group-hover:bg-secondary"
      : color === "purple"
      ? "group-hover:bg-tertiary"
      : "group-hover:bg-primary";
  const bgHover =
    color === "black"
      ? "bg-primary"
      : color === "white"
      ? "bg-secondary"
      : color === "purple"
      ? "bg-primary"
      : "bg-secondary";
  const buttonBorderClasses = `${
    accentBorder ? "border-gray-400" : "border-slate-50/50"
  } border-r border-l w-full absolute  left-0 h-[calc(50%-0.375rem)]`;
  return (
    <button
      className={`relative group uppercase min-w-[10rem] p-[7px] font-dinw05Bold
      text-lg lg:text-sm
      w-70 lg:w-10
      
      `}
    >
      <span className={`${buttonBorderClasses} border-t top-0`}></span>
      <span className={`${buttonBorderClasses} border-b bottom-0`}></span>
      <div className={`relative overflow-hidden leading-[1.15] ${bg}`}>
        <div
          className={`${bgHover} -left-[5%] -translate-x-full -skew-x-12 absolute w-[120%] top-0 group-hover:left-[110%] easy-out duration-300 h-[105%]`}
        ></div>
        <div className="relative ">
          <div className={`${textColor} ${hoverColor}`}>{children}</div>
          <span
            className={`absolute right-0 bottom-0 ease-in duration-200 ${bgSpan} ${bgSpanHover}
             w-[6px] lg:w-[7px] 
            h-[6px] lg:h-[7px]
            `}
          ></span>
        </div>
      </div>
    </button>
  );
};
