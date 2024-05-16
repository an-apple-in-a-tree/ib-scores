import { Assistant } from "next/font/google";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div
      className="bg-black flex flex-col items-center justify-start min-h-screen py-2"
    >
      <h1 className={`text-6xl font-bold mb-4 mt-24 ${lexend.className}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 transition-colors duration-300 hover:from-blue-700 hover:to-blue-400">
          Welcome.
        </span>
      </h1>

      <div className="font-assistant mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 pt-6 rounded-xl font-instance w-1/2 mx-auto relative">
        <div className="front flex flex-col items-center justify-center">
          <h2 className= {`${assistant.className} text-2xl font-bold mb-4 font-instance text-center`}>
            Discover Your Predicted IB and OSSD Grades
          </h2>
          <p
            className={`${assistant.className} text-lg mb-8 font-instance text-center`}
          >
            This website provides personalized grade predictions to empower your
            academic journey.{" "}
            <b> Remember grades are forever, everything else is temporary.</b>
          </p>
        </div>
        <div
          className={`${assistant.className} text-lg back absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 pt-6 rounded-xl font-instance w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pb-10`}
        >
          <p>Or should it be the other way around?</p>
        </div>
      </div>
    </div>
  );
}
