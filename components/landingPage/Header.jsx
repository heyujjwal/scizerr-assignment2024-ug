import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";

function HeaderSection() {
  return (
    <header className="relative">
      <div className="absolute top-0 z-20 w-full h-full bg-custom-gradient"></div>
      <NavigationBar />
      <HeroSection />
    </header>
  );
}

export default HeaderSection;
