"use client";
import { Lexend } from "next/font/google";
import Logo from "./Logo";
import React, { createContext } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
const lexend = Lexend({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <NavigationMenu.Root
      className={`${lexend.className} bg-sky1 mt-4 relative z-1 flex w-screen mb-5 justify-center`}
    >
      <NavigationMenu.List className="text-2xl center flex list-none rounded-6px">
        <Logo />
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-sky11 font-semibold hover:bg-sky4 focus:shadow-sky8 block select-none rounded-[4px] px-3 py-3  leading-none no-underline outline-none"
            href="/"
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-sky11 font-semibold hover:bg-sky4 focus:shadow-sky8 block select-none rounded-[4px] px-3 py-3  leading-none no-underline outline-none"
            href="../pages/physics"
          >
            Physics
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-sky11 font-semibold hover:bg-sky4 focus:shadow-sky8 block select-none rounded-[4px] px-3 py-3  leading-none no-underline outline-none"
            href="../pages/math-aa"
          >
            Math AA SL
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Navbar;
