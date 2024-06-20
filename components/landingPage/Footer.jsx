import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function FooterSection() {
  return (
    <div className="flex items-center justify-center py-[31px] md:py-[44px]  bg-[#091D41]">
      <p
        className={`text-[14px] text-[#FCFCFC] font-normal leading-[20px] poppins-thin-italic ${poppins.className}`}
      >
        © DAMAC Copyright 2024 All rights reserved.
      </p>
    </div>
  );
}

export default FooterSection;
