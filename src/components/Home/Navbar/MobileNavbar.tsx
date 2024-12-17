import { navLinks } from "@/lib/constants";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MobileNavbarProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNavbar = ({ showNav, closeNav }: MobileNavbarProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      />
      {/* mobile nav links */}
      <div
        className={`flex ${navOpen} justify-center fixed flex-col text-white h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-700 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/* close button */}
        <X
          size={32}
          onClick={closeNav}
          className="text-white absolute top-[0.7rem] right-[1.4rem] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
