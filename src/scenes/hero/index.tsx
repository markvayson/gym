import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HeroImage from "@/assets/HeroImage.png";
import LogoText from "@/assets/LogoText.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Apple from "@/assets/SponsorApple.png";
import HydroFlask from "@/assets/SponsorHydroFlask.png";
import Nike from "@/assets/SponsorNike.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const sponsors = [Nike, Apple, HydroFlask];
  return (
    <section id="evofit">
      <motion.div
        className="flex flex-col gap-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.evofit)}
      >
        <div className="relative flex flex-col gap-10 px-10 pt-40 md:flex-row  md:items-center md:gap-20 md:px-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={"flex flex-col gap-5 md:basis-2/3 "}
          >
            <div className="relative flex flex-col">
              <div
                className={`${
                  isAboveMediumScreens &&
                  "before:absolute before:-top-16 before:left-10 before:z-[-1] before:content-evolvetext"
                }`}
              ></div>
              <img src={LogoText} />
              <h2 className="text-xl font-thin">
                where evolution meets fitness
              </h2>
            </div>
            <p className="text-justify text-base">
              Our dynamic space is dedicated to helping you evolve into the best
              version of yourself. With modern equipment, expert guidance, and a
              vibrant community, we're more than a gym – we're your fitness
              evolution partner. Join EvoFit Hub today and transform your body
              and mindset.
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center justify-around md:justify-start md:gap-10"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                <span className="text-lg">Join Now</span>
              </ActionButton>
              <p className="font-bold text-indigo-600">Learn More</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative"
          >
            <img src={HeroImage} className="rounded-lg shadow-xl" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="absolute -bottom-5 -left-5 flex flex-col items-center justify-center gap-5 bg-slate-50 p-5 text-sm shadow-xl md:-right-5 md:left-auto"
            >
              <h2>
                50% <span>OFF</span>
              </h2>
              <ActionButton setSelectedPage={setSelectedPage}>
                Get Early Access
              </ActionButton>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="rod absolute -right-5 -top-5 bg-indigo-600 p-5 text-white shadow-xl"
            >
              <h2>
                <span className="font-bold">300+</span> Users Joined
              </h2>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-10 bg-indigo-600 py-5 md:justify-around  md:p-10">
          {sponsors.map((image, index) => (
            <motion.img
              key={`sponsor-${index}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index / 5 + 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="h-full w-16 md:w-32 "
              src={image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
