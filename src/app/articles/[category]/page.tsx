import DetailedResearchTopicCard from "../components/detailedResearchTopicCard";

export default function ArticlesCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className=" w-full h-full flex flex-col justify-start">
      <div className="font-lexend text-4xl font-medium p-10 flex justify-center items-center text-center">
        Machine Learning algorithms
      </div>
      <div className=" w-full h-full p-5 flex flex-col gap-5">
        <DetailedResearchTopicCard />
        <DetailedResearchTopicCard />
        <DetailedResearchTopicCard />
      </div>
    </div>
  );
}
