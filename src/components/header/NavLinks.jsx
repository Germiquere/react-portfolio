import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logoWeb from "../../assets/img/logoWeb.svg";
import HoverAnimation from "../HoverAnimation";
// import { useTextAnimation } from "../../hooks/useTextAnimation";
const navLinks = [
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "about",
    title: "ABOUT ME",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];
const NavLinks = () => {
  // const { handleAnimation } = useTextAnimation();
  const [active, setActive] = useState("");

  return (
    <nav
      className="text-[#f9f9f9]  h-full 
    hidden lg:block"
    >
      <div className="flex items-center h-full gap-20">
        <div>
          <Link
            to="home"
            smooth={true}
            spy={true}
            offset={-64}
            className="cursor-pointer"
            onClick={() => setActive("")}
          >
            <img
              src={logoWeb}
              alt="logo"
              className="w-[45px] h-[45px] object-contain"
            />
          </Link>
          {/* <a href="/">
            <img
              src={logoWeb}
              alt="logo"
              className="w-[45px] h-[45px] object-contain"
            />
          </a> */}
        </div>

        <ul className="h-full flex flex-row gap-3 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              {/* <span className={"square"}></span> */}
              <div className="relative">
                <Link
                  className="cursor-pointer text-xs after:bg-tertiary borderMark before:bg-tertiary "
                  to={link.id}
                  smooth={true}
                  spy={true}
                  offset={-64}
                  // onClick={() => {
                  //   setActive(link.title);
                  // }}
                  activeClass="square"
                >
                  <HoverAnimation textC={link.title} />
                </Link>
              </div>
            </li>

            // <li
            //   key={link.id}
            //   className={`square inline-flex relative ${
            //     active === link.title && "before:bg-tertiary"
            //   }`}
            //   onClick={() => {
            //     setActive(link.title);
            //   }}
            // >
            //   <a
            //     href={`#${link.id}`}
            //     className="tracking-widest text-[12.5px] py-2 px-4 borderMark  self-center cursor-pointer"
            //   >
            //     <HoverAnimation textC={link.title} />
            //   </a>
            // </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
// className={`square ${
//   active === link.title && "before:bg-tertiary"
// }`}
