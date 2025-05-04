export default function ResearchTeamCard() {
  return (
    <div className="w-[350px] h-[150px] border-primary border-2 rounded-2xl flex flex-col gap-3 p-4 ">
      <div className="flex flex-row gap-3 justify-start items-center">
        <div className="bg-gray-300 rounded-[50%] w-[70px] h-[70px]"></div>
        <div className="flex flex-col gap-1 justify-start ">
          <div className="text-1xl font-lexend font-medium ">
            Cognitive AI Research lab
          </div>
          <div className="text-sm font-lexend font-medium opacity-45">
            ENSIA AI department
          </div>
        </div>
      </div>
      <div className=" w-full h-full underline font-lexend font-medium opacity-60 hover:opacity-100 cursor-pointer ">
        Explore more projects here
      </div>
    </div>
  );
}
