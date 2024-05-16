"use client";
import React, { useState } from "react";
import { Lexend } from "next/font/google";
import { Montserrat } from "next/font/google";

import * as Slider from "@radix-ui/react-slider";

const lexend = Lexend({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MathAA = () => {
  const [paper1Score, setPaper1Score] = useState(0);
  const [paper2Score, setPaper2Score] = useState(0);
  const [paper3Score, setPaper3Score] = useState(0);
  const [iaScore, setIaScore] = useState(0);
  const totalScore = Math.round(
    (paper1Score / 80) * 40 + (paper2Score / 80) * 40 + (iaScore)
  );
  let IBLevel: number = 0,
    predictedLevel: number = 0;
  const [predictedMarkInClass, setPredictedMarkInClass] = useState(0);

  const getIBLevel = (totalScore: number) => {
    if (totalScore >= 79 && totalScore <= 100) {
      IBLevel = 7;
    } else if (totalScore >= 64 && totalScore < 68) {
      IBLevel = 6;
    } else if (totalScore >= 48 && totalScore < 56) {
      IBLevel = 5;
    } else if (totalScore >= 34 && totalScore < 44) {
      IBLevel = 4;
    } else if (totalScore >= 23 && totalScore < 32) {
      IBLevel = 3;
    } else if (totalScore >= 11 && totalScore < 21) {
      IBLevel = 2;
    } else {
      IBLevel = 1;
    }
  };

  const getPredictedLevel = (predictedMarkInClass: number) => {
    if (predictedMarkInClass >= 97 && predictedMarkInClass <= 100) {
      predictedLevel = 7;
    } else if (predictedMarkInClass >= 93 && predictedMarkInClass < 97) {
      predictedLevel = 6;
    } else if (predictedMarkInClass >= 84 && predictedMarkInClass < 93) {
      predictedLevel = 5;
    } else if (predictedMarkInClass >= 72 && predictedMarkInClass < 84) {
      predictedLevel = 4;
    } else if (predictedMarkInClass >= 61 && predictedMarkInClass < 72) {
      predictedLevel = 3;
    } else if (predictedMarkInClass >= 50 && predictedMarkInClass < 61) {
      predictedLevel = 2;
    } else {
      predictedLevel = 1;
    }
  };

  getIBLevel(totalScore);
  getPredictedLevel(predictedMarkInClass);

  return (
    <>
      <h1
        className={`${lexend.className} text-center text-4xl font-bold mb-8 text-white pt-10`}
      >
        Math AA SL
      </h1>
      <div
        className={`${montserrat.className} font-semibold flex flex-col items-center text-sky12`}
      >
        <div className={`flex items-center mb-4`}>
          <label className={`mr-4 w-32`}>Paper 1 Score: </label>
          <Slider.Root
            className={`relative flex items-center select-none touch-none w-[200px] h-5 mr-4`}
            defaultValue={[paper1Score]}
            max={80}
            step={1}
            onValueChange={(value) => {
              setPaper1Score(value[0]);
              getIBLevel(
                Math.round(
                  (value[0] / 80) * 40 + (paper2Score / 80) * 40 + (iaScore)
                )
              );
            }}
          >
            <Slider.Track
              className={`bg-blackA7 relative grow rounded-full h-[3px]`}
            >
              <Slider.Range
                className={`absolute bg-white rounded-full h-full`}
              />
            </Slider.Track>
            <Slider.Thumb
              className={`block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5`}
              aria-label="Paper 1 Score"
            />
          </Slider.Root>
          <input
            type="number"
            id="paper1ScoreValue"
            min="0"
            max="30"
            value={paper1Score}
            onChange={(e) => {
              setPaper1Score(parseInt(e.target.value));
              getIBLevel(
                Math.round(
                  (parseInt(e.target.value) / 80) * 40 + (paper2Score / 80) * 40 + (iaScore)
                )
              );
            }}
            className={`w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />{" "}
          <label className={`mr-4 w-32`}> /80</label>
        </div>

        <div className={`flex items-center mb-4`}>
          <label className={`mr-4 w-32`}>Paper 2 Score: </label>
          <Slider.Root
            className={`relative flex items-center select-none touch-none w-[200px] h-5 mr-4`}
            defaultValue={[paper2Score]}
            max={80}
            step={1}
            onValueChange={(value) => {
              setPaper2Score(value[0]);
              getIBLevel(
                Math.round(
                  (paper1Score / 80) * 40 + (value[0] / 80) * 40 + (iaScore)
                )
              );
            }}
          >
            <Slider.Track
              className={`bg-blackA7 relative grow rounded-full h-[3px]`}
            >
              <Slider.Range
                className={`absolute bg-white rounded-full h-full`}
              />
            </Slider.Track>
            <Slider.Thumb
              className={`block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5`}
              aria-label="Paper 2 Score"
            />
          </Slider.Root>
          <input
            type="number"
            id="paper2ScoreValue"
            min="0"
            max="50"
            value={paper2Score}
            onChange={(e) => {
              setPaper2Score(parseInt(e.target.value));
              getIBLevel(
                Math.round(
                  (paper1Score / 80) * 40 + (parseInt(e.target.value) / 80) * 40 + (iaScore)
                )
              );
            }}
            className={`w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <label className={`mr-4 w-32`}> /80</label>
        </div>

        <div className={`flex items-center mb-4`}>
          <label className={`mr-4 w-32`}>IA Score: </label>
          <Slider.Root
            className={`relative flex items-center select-none touch-none w-[200px] h-5 mr-4`}
            defaultValue={[iaScore]}
            max={20}
            step={1}
            onValueChange={(value) => {
              setIaScore(value[0]);
              getIBLevel(
                Math.round(
                  (paper1Score / 30) * 20 +
                    (paper2Score / 50) * 40 +
                    (paper3Score / 35) * 20 +
                    (value[0] / 24) * 20
                )
              );
            }}
          >
            <Slider.Track
              className={`bg-blackA7 relative grow rounded-full h-[3px]`}
            >
              <Slider.Range
                className={`absolute bg-white rounded-full h-full`}
              />
            </Slider.Track>
            <Slider.Thumb
              className={`block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5`}
              aria-label="IA Score"
            />
          </Slider.Root>
          <input
            type="number"
            id="iaScoreValue"
            min="0"
            max="24"
            value={iaScore}
            onChange={(e) => {
              setIaScore(parseInt(e.target.value));
              getIBLevel(
                Math.round(
                  (paper1Score / 30) * 20 +
                    (paper2Score / 50) * 40 +
                    (paper3Score / 35) * 20 +
                    (parseInt(e.target.value) / 24) * 20
                )
              );
            }}
            className={`w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <label className={`mr-4 w-32`}> /20</label>
        </div>

        <div className={`flex items-center mb-4`}>
          <label className={`mr-4 w-32`}>Predicted In-Class Grade: </label>
          <Slider.Root
            className={`relative flex items-center select-none touch-none w-[200px] h-5 mr-4`}
            defaultValue={[predictedMarkInClass]}
            max={100}
            step={1}
            onValueChange={(value) => {
              setPredictedMarkInClass(value[0]);
              getPredictedLevel(value[0]);
            }}
          >
            <Slider.Track
              className={`bg-blackA7 relative grow rounded-full h-[3px]`}
            >
              <Slider.Range
                className={`absolute bg-white rounded-full h-full`}
              />
            </Slider.Track>
            <Slider.Thumb
              className={`block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5`}
              aria-label="Predicted Mark In-Class"
            />
          </Slider.Root>
          <input
            type="number"
            id="predictedMarkInClassValue"
            min="0"
            max="100"
            value={predictedMarkInClass}
            onChange={(e) => {
              setPredictedMarkInClass(parseInt(e.target.value));
              getPredictedLevel(parseInt(e.target.value));
            }}
            className={`w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <label className={`mr-4 w-32`}> /100</label>
        </div>

        <h2 className={`text-center text-xl font-bold mt-8 font-opensans`}>
          Total IB Score (out of 100): {totalScore}
        </h2>
        <p className={`text-center text-xl font-opensans mt-5`}>
          Expected IB Level: {IBLevel}
        </p>
        <p className={`text-center text-xl font-opensans mt-2`}>
          In-Class Predicted Level: {predictedLevel}
        </p>
      </div>
    </>
  );
};

export default MathAA;
