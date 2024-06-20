"use client";
import Image from "next/image";
import { imageSectionData } from "../../utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import leftbutton from "../../public/leftbutton.svg";
import rightbutton from "../../public/rightbutton.svg";

function ImageSection() {
  const [currImage, setCurrImage] = useState(0);

  useEffect(() => {
    Aos.init();
  }, []);

  function handleClick() {
    if (currImage === 4) {
      setCurrImage(-1);
    }
    setCurrImage((curr) => curr + 1);
  }
  function handleClickPrev() {
    if (currImage === 0) {
      setCurrImage(5);
    }
    setCurrImage((curr) => curr - 1);
  }

  return (
    <div
      className="flex items-center lg:px-[195px] flex-col mb-[37px] md:mb-[68px]"
      data-aos="fade-in"
      data-aos-duration="5000"
    >
      <div className="relative">
        <Image
          src={imageSectionData[currImage].image}
          alt={imageSectionData[currImage].imageAlt}
          className="object-cover rounded-[14px]"
        />
        <Image
          src={leftbutton}
          alt=""
          className="absolute cursor-pointer top-[50%] md:left-[14.5px] left-[21px] w-[25px] h-[25px]  md:w-[34px] md:h-[34px] "
          onClick={handleClickPrev}
        />
        <Image
          src={rightbutton}
          alt=""
          className="absolute cursor-pointer w-[25px] h-[25px]  md:w-[34px] md:h-[34px] top-[50%] right-[21px] md:right-[14.5px] "
          onClick={handleClick}
        />
      </div>
      <div className="flex gap-[5px] md:gap-5 mt-5">
        {imageSectionData.slice(1, imageSectionData.length).map((data) => (
          <Image
            src={data.image}
            alt={data.imageAlt}
            key={data.id}
            className="object-cover rounded-[14px]  lg:w-[140px]  xl:w-[265px] max-md:w-[86px]"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSection;
