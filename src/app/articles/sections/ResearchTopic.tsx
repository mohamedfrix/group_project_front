import SwiperCustom from "../components/swiperCustom";

export default function ResearchTopicSection({ num }: { num: number }) {
  const categories: CategoryIdentifier[] = [
    { id: 1, name: "NLP" },
    { id: 2, name: "ML" },
    { id: 3, name: "DL" },
  ];
  return (
    <div
      className={`flex flex-col gap-20 ${
        num === 0 ? "hidden" : ""
      } absolute top-0 left-0 max-w-full`}
    >
      {categories.map((category) => (
        <div className="flex flex-col gap-5 w-full" key={category.id}>
          <div className="font-lexend font-medium text-2xl ">
            {category.name}
          </div>
          <SwiperCustom
            key={category.id}
            id={category.id}
            name={category.name}
          />
        </div>
      ))}
    </div>
  );
}
