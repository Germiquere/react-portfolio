import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoDark, menu, close } from "../assets";

import HoverAnimation from "./HoverAnimation";
const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].title);

  return (
    <nav className={` w-full flex items-center py-5  z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(navLinks[0].title);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoDark}
            alt={logoDark}
            className="w-[60px] h-[60px] object-contain"
          />
        </Link>
        <ul
          className="list-none
        flex gap-10 items-center"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`square relative ${
                active === link.title && "before:bg-secondary"
              }`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>
                <HoverAnimation textC={link.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
