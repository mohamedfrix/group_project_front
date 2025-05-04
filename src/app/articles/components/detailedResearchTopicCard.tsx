import reseearchIcons from "@/app/assets/Paperclip.svg";
import Image from "next/image";

export default function DetailedResearchTopicCard() {
  return (
    <div className="flex flex-col gap-6  border-primary border-3 p-10 rounded-lg">
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
  );
}
