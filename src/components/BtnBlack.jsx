import HoverAnimation from "./HoverAnimation";

export const BtnBlack = ({ tContent }) => {
  return (
    <button className="primary-b button-b">
      <div className="label-b">
        <span className="hover-effect-b"></span>
        <span className="label-text-b">
          <HoverAnimation textC={tContent} />
        </span>
      </div>
    </button>
  );
};
