"use client";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });

export default function Logo() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/York_Region_District_School_Board_Logo.svg/1200px-York_Region_District_School_Board_Logo.svg.png"
        className="mt-2 w-16 h-8 justify-left ml-4 mr-2"
      ></img>
      <h1
        className={`${lexend.className} text-sky11 text-xl font-bold mr-24 ml-2 mt-3`}
      >IB Scores</h1>
    </>
  );
}
