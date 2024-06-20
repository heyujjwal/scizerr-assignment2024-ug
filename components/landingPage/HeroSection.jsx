"use client";
import Image from "next/image";
import heroImg from "../../public/hero.png";
import PricingCard from "../ui/Pricing";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const poppinsMedium = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function HeroSection() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section>
      <div className="w-full">
        <Image
          src={heroImg}
          alt="Hero Image"
          className="object-cover h-[800px] sp:h-[750px] lg:h-[500px] xl:h-full md:h-[450px]  w-full cursor-pointer "
        />
      </div>
      <div
        className="absolute top-[0] mt-[96px] w-full z-50 flex sm:justify-between lg:px-20 xl:px-40 md:pl-20  xl:mt-[193px] md:flex-row flex-col px-[26px]"
        data-aos="fade-in"
        data-aos-duration="4000"
      >
        <div className="lg:scale-100 max-md:mb-[28px] ">
          <p
            className={`lg:text-[48px] text-[37px] font-medium uppercase lg:leading-[62.4px] leading-[46px] text-[#fff] ${oswald.className} `}
          >
            Harbour Lights <br /> de{" "}
            <span className="text-primary">GRESOGONO</span>
          </p>
          <p
            className={`lg:text-[25px] text-[14px] text-[#FCFCFC] font-bold lg:leading-[33px] mt-2 leading-[22px] lg:mt-[19px] ${poppinsBold.className}`}
          >
            1, 2 & 3 Bedrooms Seaside Apartments
            <br /> in Dubai Maritime City
          </p>
          <div className="flex flex-col gap-[11.5px] lg:mt-[45px] mt-[14.5px]">
            <p
              className={`border-l-2 border-[#17ABFF] h-[39px] flex items-center gap-1 pl-5 text-[14px] leading-[15px] font-normal text-[#E7EBEF] bg-[#00000042] sp:w-[305px] ${poppinsMedium.className}`}
            >
              Rental Returns of{" "}
              <span
                className={`${poppinsBold.className} text-[16px] leading-[15px] font-medium`}
              >
                {" "}
                UPTO 11%**
              </span>
            </p>
            <p
              className={`border-l-2 border-[#17ABFF] h-[39px] flex items-center gap-1 pl-5 text-[14px] leading-[15px] font-normal text-[#E7EBEF] bg-[#00000042] sp:w-[305px] ${poppinsMedium.className}`}
            >
              Capital Appreciation of{" "}
              <span
                className={`${poppinsBold.className} text-[16px] leading-[15px] font-medium`}
              >
                {" "}
                UPTO 32%**
              </span>
            </p>
          </div>
        </div>
        <PricingCard />
      </div>
    </section>
  );
}

export default HeroSection;
