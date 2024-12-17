"use client";

import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <>
      <Navbar openNav={handleShowNav} />
      <MobileNavbar showNav={showNav} closeNav={handleCloseNav} />
    </>
  );
};

export default ResponsiveNavbar;
