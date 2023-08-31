// import { useState } from "react";

// export const useTextAnimation = () => {
//   const [text, setText] = useState("");
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const handleAnimation = (e) => {
//     const textSaved = e.target.textContent;
//     setText(textSaved);
//     let interval = null;
//     let interactions = 0;
//     interval = setInterval(() => {
//       setText(
//         (prevText) =>
//           (e.target.textContent = prevText
//             .split("")
//             .map((letter, index) => {
//               if (index < interactions) {
//                 return e.target.dataset.myValue[index];
//               }
//               if (letter === " ") {
//                 return " ";
//               }

//               return letters[Math.floor(Math.random() * 26)];
//             })
//             .join(""))
//       );
//       if (interactions >= e.target.dataset.myValue.length) {
//         clearInterval(interval);
//       }
//       interactions += 1 / 3;
//     }, 30);
//   };
//   return {
//     handleAnimation,
//   };
// };
import { useState } from "react";

export const useTextAnimation = () => {
  const [text, setText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleAnimation = (target) => {
    // console.log(target.textContent);
    const textSaved = target.textContent;
    setText(textSaved);
    let interval = null;
    let interactions = 0;
    interval = setInterval(() => {
      setText(
        (prevText) =>
          (target.textContent = prevText
            .split("")
            .map((letter, index) => {
              if (index < interactions) {
                return target.dataset.myValue[index];
              }
              if (letter === " ") {
                return " ";
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join(""))
      );
      if (interactions >= target.dataset.myValue.length) {
        clearInterval(interval);
      }
      interactions += 1 / 3;
    }, 30);
  };
  return {
    handleAnimation,
  };
};
