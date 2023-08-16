import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  const links = Object.values(SelectedPage);
  return (
    <footer className=" bg-indigo-600 pt-5 text-white">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.contactus)}
      >
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <h1 className="text-xl font-bold tracking-wider">
              EVO
              <span className="rounded-r-lg bg-white text-indigo-600">FIT</span>
            </h1>
            <p className="my-5">
              Join us and evolve your fitness journey today to a stronger and
              healthier you.
            </p>
          </div>

          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="py-4 font-bold">Links</h4>
            <ul className="flex flex-col">
              {links.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  onClick={() => setSelectedPage(link)}
                  key={`footer-${link}`}
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          <div className="my-5 mt-16 flex basis-1/4 cursor-pointer flex-col gap-10  md:mt-0">
            <h4 className="font-bold">Get in Touch</h4>
            <div className="flex flex-col gap-5 pl-2">
              <a target="_blank" href="https://github.com/markvayson">
                GitHub
              </a>
              <p>Download the app</p>
              <p
                onClick={() => setSelectedPage(SelectedPage.contactus)}
                className=" "
              >
                Support
              </p>
              <p className="">+333 2322 123</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 border-t-4 p-10 pb-10 md:flex-row md:justify-between ">
          <p className="p-2">
            Copyright © 2023{" "}
            <a
              target="_blank"
              className="p-2 hover:bg-white hover:text-indigo-600"
              href="https://github.com/markvayson"
            >
              Mark Vayson{" "}
            </a>
            | EvoFit
          </p>
          <p className="text-right">Terms & Conditions ◙ Privacy Policy </p>
        </div>
      </motion.div>
    </footer>
  );
};
export default Footer;
