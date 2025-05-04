import ResearchTeamCard from "../components/researchTeamCard";

export default function ResearchTeams({ num }: { num: number }) {
  return (
    <div
      className={`${
        num === 0 ? "hidden" : ""
      } absolute top-0 left-0 w-full h-full flex flex-row flex-wrap justify-center items-start gap-5`}
    >
      <ResearchTeamCard />
      <ResearchTeamCard />
      <ResearchTeamCard />
    </div>
  );
}
