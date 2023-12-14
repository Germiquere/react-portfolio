import { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const AnimatedText = ({
    infinite = false,
    textContent,
    speed = 30,
    delay = 2000,
}) => {
    const textSaved = textContent;
    const [times, setTimes] = useState(0);
    const [text, setText] = useState(textSaved);
    useEffect(() => {
        // let interval = null;
        let interactions = 0;
        const interval = setInterval(() => {
            setText((prevText) =>
                prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < interactions) {
                            return textContent[index];
                        }
                        if (letter === " ") {
                            return " ";
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );
            if (interactions >= textContent.length) {
                clearInterval(interval);
            }
            interactions += 1 / 3;
        }, speed);

        // return () => ;
    }, [times]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            infinite && setTimes((prevTimes) => prevTimes + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [times]);
    return <p className="font-bold">{text}</p>;
};

export default AnimatedText;
