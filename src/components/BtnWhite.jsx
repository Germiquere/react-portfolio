import HoverAnimation from "./HoverAnimation";

export const BtnWhite = ({ tContent }) => {
  return (
    <button className="primary-w button-w">
      <div className="label-w">
        <span className="hover-effect-w"></span>
        <span className="label-text-w">
          <HoverAnimation textC={tContent} />
        </span>
      </div>
    </button>
  );
};
