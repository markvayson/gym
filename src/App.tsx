import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Hero from "@/scenes/hero";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "./scenes/footer";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.evofit,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.evofit);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
