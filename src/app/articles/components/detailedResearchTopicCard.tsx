"use client";

import reseearchIcons from "@/app/assets/Paperclip.svg";
import Image from "next/image";
import { useState } from "react";

export default function DetailedResearchTopicCard() {
  const [displayText, setDisplayText] = useState(false);
  return (
    <div
      className="flex flex-col gap-6 cursor-pointer  border-primary border-3 p-10 rounded-lg hover:bg-green-200 hover:bg-opacity-10 transition duration-300 relative"
      onMouseEnter={() => {
        setDisplayText(true);
      }}
      onMouseLeave={() => {
        setDisplayText(false);
      }}
    >
      {displayText && (
        <div className="absolute w-full h-full flex justify-center items-center font-lexend text-lg font-bold text-black top-0 left-0 underline">
          Learn More
        </div>
      )}
      <div className={`${displayText ? "blur-xs" : ""}`}>
        <div className="flex flex-row gap-3 ">
          <Image
            src={reseearchIcons}
            alt="research icon"
            width={26}
            height={26}
            className="w-7 h-7"
          />
          <div className="grow font-lexend font-medium text-2xl">
            Optimizing Machine Learning Algorithms for Efficient Real-Time
            Decision Making
          </div>
        </div>
        <div className="font-lexend font-medium opacity-60 ">
          This research explores techniques to enhance the speed and accuracy of
          AI-driven machine learning algorithms, focusing on real-time
          applications such as autonomous systems, finance, and healthcare. The
          study evaluates optimization methods, including model pruning,
          quantization, and parallel computing, to improve computational
          efficiency without sacrificing performance
        </div>
      </div>
    </div>
  );
}
