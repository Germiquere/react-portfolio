import React from "react";
import NavLinks from "./NavLinks";

export const Header = () => {
  return (
    <header className="flex fixed w-full top-0 left-0 h-16 items-center px-4 lg:px-9 bg-secondary font-jetBrains z-50">
      <NavLinks />
    </header>
  );
};
