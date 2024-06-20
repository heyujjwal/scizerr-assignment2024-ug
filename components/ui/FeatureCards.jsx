import Image from "next/image";
import { Poppins, Oswald } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
});

function FeatureCards({ data }) {
  const { icon, title, subTitle } = data;
  return (
    <div className="flex flex-col items-center flex-shrink-0 ">
      <Image src={icon} alt="icon" />
      <p
        className={`text-[#00357B] font-normal mt-[14px] text-[12px] md:text-[16px] leading-[16px] ${poppins.className}`}
      >
        {title}
      </p>
      <p
        className={`text-[#00357B] mt-1 font-medium text-[25px] md:text-[30px] leading-[30px] md:tracking-[3%] tracking-[0.75px] ${oswald.className} `}
      >
        {subTitle}
      </p>
      <div className="w-[73px] bg-slate-300 mt-[11px] h-[5px] rounded-[13px]"></div>
    </div>
  );
}

export default FeatureCards;
