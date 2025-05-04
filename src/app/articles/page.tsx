"use client";

import React from "react";
import ResearchTopicSection from "./sections/ResearchTopic";
import ResearchTeams from "./sections/ResearchTeams";
import SupervisorPage from "./sections/Supervisor";

export default function ArticlesPage() {
  const sections = ["Research topics", "Research teams", "Supervisors"];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSectionChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-5 w-full h-screen ">
      <div className="h-[70px]  flex justify-center items-center ">
        <div className="flex flex-row justify-evenly items-center gap-20 bg-primary rounded-3xl p-2">
          <div
            className={`font-lexed text-white font-medium text-sm p-2 cursor-pointer grow  rounded-3xl ${
              currentIndex === 0 ? "bg-secondary" : ""
            }`}
            onClick={() => handleSectionChange(0)}
          >
            Research topics
          </div>
          <div
            className={`font-lexed text-white font-medium text-sm p-2 cursor-pointer grow  rounded-3xl ${
              currentIndex === 1 ? "bg-secondary" : ""
            }`}
            onClick={() => handleSectionChange(1)}
          >
            Research teams
          </div>
          <div
            className={`font-lexed text-white font-medium text-sm p-2 cursor-pointer grow  rounded-3xl ${
              currentIndex === 2 ? "bg-secondary" : ""
            }`}
            onClick={() => handleSectionChange(2)}
          >
            Supervisors
          </div>
        </div>
      </div>
      <div className="h-full w-full relative">
        <ResearchTopicSection num={currentIndex === 0 ? 1 : 0} />
        <ResearchTeams num={currentIndex === 1 ? 1 : 0} />
        <SupervisorPage num={currentIndex === 2 ? 1 : 0} />
      </div>
    </div>
  );
}
