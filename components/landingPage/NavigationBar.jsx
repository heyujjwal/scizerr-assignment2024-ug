import Image from "next/image";
import logo from "../../public/Logo.svg";
import options from "../../public/options.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

function NavigationBar() {
  return (
    <nav className="absolute mt-[46px] pl-[26px] pr-[21px] top-0 z-40 flex items-center justify-between object-cover w-full md:pr-10 md:pl-20 lg:px-20 xl:px-[160px] md:mt-5 lg:mt-11 bg-no-repeat">
      <Image src={logo} alt="logo" />
      <button
        className={`h-12 hover:scale-110 transition-all duration-300 active:scale-100 hidden md:block font-bold text-[13px] poppins-bold leading-[19.5px] tracking-[3%] w-[153px] border-primary text-primary border-[2px] rounded-btn ${poppins.className}`}
      >
        ENQUIRE NOW
      </button>
      <Image src={options} alt="" className="md:hidden" block />
    </nav>
  );
}

export default NavigationBar;
