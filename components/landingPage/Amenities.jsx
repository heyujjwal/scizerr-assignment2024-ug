"use client";

import Image from "next/image";
import Harbour from "../../public/Harbour.svg";
import AmenitiesCard from "../ui/AmenityCards";
import { featuresAndAmenitiesData } from "../../utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Poppins, Oswald } from "next/font/google";

const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const poppinsNormal = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
});

function Amenity() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="flex flex-col mt-[57px] mb-[29px] px-[16px] md:px-[100px] lg:px-[200px] items-center"
      data-aos="fade-in"
      data-aos-duration="4000"
    >
      <Image
        src={Harbour}
        alt="Harbour Lights by de Grisogono _ DAMAC Harbour Lights, Dubai Maritime City 1"
        className="mb-[25.96px]"
      />
      <h2
        className={`mb-[11px] text-[#00357B] text-[31px] md:text-[36px] font-medium leading-[47px] uppercase text-center ${oswald.className}`}
      >
        Features & Amenities
      </h2>
      <p
        className={`mb-[25.96px]  text-center text-[16px] font-normal leading-[24px] ${poppinsNormal.className}`}
      >
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront
        <br className="max-xl:hidden" /> lifestyle. Its maritime-inspired
        amenities provide an unmatched seaside experience, offering a{" "}
        <br className="max-xl:hidden" /> life of tranquility and bliss.
      </p>
      <div
        className="flex flex-wrap justify-center gap-[25px] md:gap-[60px] mb-[17px]"
        data-aos="fade-in"
        data-aos-duration="4000"
      >
        {featuresAndAmenitiesData.map((data) => (
          <AmenitiesCard data={data} key={data.id} />
        ))}
      </div>
      <p
        className={`text-[#686868] md:self-end self-center text-[10px] font-light md:leading-[47px] leading-[14px] mt-[17px] mb-[27px] md:mr-6 ml-[46.6px] tracking-[0.3px] ${poppinsLight.className}`}
      >
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.{" "}
        <span className="underline">Source 1</span> |{" "}
        <span className="underline">Source 2</span>
      </p>
      <div
        className="flex gap-[11px] self-center md:self-end"
        data-aos="fade-in"
        data-aos-duration="4000"
      >
        <button
          className={`hover:scale-110 transition-all duration-300 active:scale-100 uppercase flex items-center justify-center text-[13px] text-[#fff] py-[14px] px-[39.5px] rounded-[5px] font-bold tracking-[0.39px] bg-[#00357B] ${poppinsBold.className}`}
        >
          EXTERIORS
        </button>
        <button
          className={`hover:scale-110 transition-all duration-300 active:scale-100 uppercase text-[13px] flex items-center justify-center border border-[#00357B] bg-[#fff] py-[14px] px-[41px] rounded-[5px] font-bold tracking-[0.39px] text-[#00357B] ${poppinsBold.className} `}
        >
          INTERIORS
        </button>
      </div>
    </div>
  );
}

export default Amenity;
