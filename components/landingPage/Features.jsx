"use client";
import FeaturesCard from "../ui/FeatureCards";
import { featuresData } from "../../utils";

function Feature() {
  return (
    <div className="md:px-[222px] px-[30px] pt-[18px] pb-[20px] items-center flex bg-[#F4F9FF] justify-start lg:justify-center gap-[60px] md:gap-[160px] overflow-x-scroll hide-scrollbar  w-full">
      {featuresData.map((data) => (
        <FeaturesCard data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Feature;
