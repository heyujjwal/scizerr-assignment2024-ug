import { Poppins, Oswald } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
});

const oswaldMedium = Oswald({
  subsets: ["latin"],
  weight: "500",
});

function Pricing() {
  return (
    <div className="hover:scale-105 transition-all duration-300 flex-shrink-0  h-[321px] sp:self-start self-center overflow-hidden w-[303.8px] bg-[#5790BE1F] backdrop-blur-md rounded-base ">
      <p
        className={`px-[27px] mt-[33px] text-[#FCFCFC] uppercase font-normal text-[13px] leading-[19.5px] tracking-[15%] ${poppins.className}`}
      >
        PRICING STARTS FROM
      </p>
      <p
        className={`px-6 mt-2 text-[#FCFCFC] font-medium text-[48px] leading-[62.4px] ${oswaldMedium.className}`}
      >
        $ 425,000
      </p>
      <p
        className={`px-6  text-[#FCFCFC] uppercase font-normal text-[24px] leading-[35.57px] ${oswald.className}`}
      >
        AED 1.3 Million
      </p>
      <button
        className={`hover:scale-110 transition-all duration-300 active:scale-100 uppercase rounded-btn font-bold text-[13px] leading-[19.5px] tracking-[3%] mx-6 w-[248px] h-[48px] mt-[25px] text-[#fff] bg-[#17ABFF] ${poppinsBold.className} `}
      >
        GET A PRESENTATION
      </button>
      <div
        className={`w-full border-t-[1px] border-[#000] mt-[30.5px] pl-[25.8px] pr-[10px] text-[#98C5E8] text-[13px] text-start leading-[17px] font-normal py-[12.5px] ${poppins.className}`}
      >
        Get an Expert’s Presentation of Real
        <br /> Estate in Dubai for Life and investment
      </div>
    </div>
  );
}

export default Pricing;
