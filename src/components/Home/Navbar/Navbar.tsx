import MaxWidthWrapper from "@/components/Helper/MaxWidthWrapper";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Map, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="size-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <Map size={32} className="text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Travel
          </h1>
        </div>
        {/* nav links */}
        <NavigationMenu className="hidden lg:flex items-center">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle())}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-slate-300 transition-all duration-200 rounded-md font-medium">
            Book Now
          </button>
          <Menu size={24} className="text-white cursor-pointer lg:hidden" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
