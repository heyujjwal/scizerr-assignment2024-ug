import Image from "next/image";
import imageoverlay from "../../public/imageoverlay.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

function AmenityCards({ data }) {
  const { image, title } = data;
  return (
    <div className="relative flex flex-col items-center transition-all duration-300 hover:scale-110">
      <Image
        src={image}
        alt={title}
        height={500}
        width={500}
        className="md:h-[193px] md:w-[193px] h-[116px] w-[116px] z-50 rounded-full absolute top-[6.5px]"
      />
      <Image
        src={imageoverlay}
        alt=""
        className="md:h-[117.304px] w-[124px] md:w-[206px]"
      />
      <div className="bg-[#FCFCFC] shadow-custom-shadow h-[102px] md:h-[157px] relative w-[145px] md:w-[227px] rounded-[20px] flex justify-center flex-shrink-0">
        <p
          className={`text-[#003578] w-[118px] text-center absolute bottom-[10px] md:bottom-[19px] text-[12px] md:text-[14px] font-semibold leading-[20px] ${poppins}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default AmenityCards;
