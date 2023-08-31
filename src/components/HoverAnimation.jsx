import { useState } from "react";

const HoverAnimation = ({ textC }) => {
  const [text, setText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleAnimation = (e) => {
    const textSaved = e.target.textContent;
    setText(textSaved);
    let interval = null;
    let interactions = 0;
    interval = setInterval(() => {
      setText(
        (prevText) =>
          (e.target.textContent = prevText
            .split("")
            .map((letter, index) => {
              if (index < interactions) {
                return e.target.dataset.myValue[index];
              }
              if (letter === " ") {
                return " ";
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join(""))
      );
      if (interactions >= e.target.dataset.myValue.length) {
        clearInterval(interval);
      }
      interactions += 1 / 3;
    }, 30);
  };
  return (
    <p
      onMouseOver={handleAnimation}
      data-my-value={textC}
      className="font-jetBrains leading-[50px]"
    >
      {textC}
    </p>
  );
};

export default HoverAnimation;
