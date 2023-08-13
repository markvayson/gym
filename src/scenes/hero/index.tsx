import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import LogoText from "@/assets/LogoText.png";
import HeroImage from "@/assets/HeroImage.png";
import SponsorHydroFlask from "@/assets/SponsorHydroFlask.png";
import SponsorApple from "@/assets/SponsorApple.png";
import SponsorNike from "@/assets/SponsorNike.png";
import SponsorReebok from "@/assets/SponsorReebok.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="evofit" className="gap-16 bg-slate-50 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.evofit)}
        className="flex flex-col md:flex-row gap-5 mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:opacity-1 before:-left-20 before:z-[-1]">
                <img alt="Logo Text" src={LogoText} />
                <p className="text-5xl font-thin">
                  where evolution meets fitness
                </p>
              </div>
            </div>
            <p className="mt-8 text-base text-justify ">
              Our dynamic space is dedicated to helping you evolve into the best
              version of yourself. With modern equipment, expert guidance, and a
              vibrant community, we're more than a gym – we're your fitness
              evolution partner. Join EvoFit Hub today and transform your body
              and mindset.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-indigo-600 hover:underline hover:text-indigo-400"
              onClick={() => setSelectedPage(SelectedPage.contactus)}
              href={`#${SelectedPage.contactus}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="relative flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="Hero" className="rounded-xl shadow-xl" src={HeroImage} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-white p-10 rounded-xl absolute  -top-10 -right-10 md:top-auto md:right-auto md:-bottom-10 md:-left-20 shadow-xl"
          >
            <div className="tracking-wider text-2xl font-bold">
              {SelectedPage.evofit}
            </div>
            <div className="flex flex-col items-center p-10">
              <p>Earn Weekly</p>
              <p className="text-3xl font-bold">2.784</p>
            </div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Early Access
            </ActionButton>
          </motion.div>
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-indigo-600 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                alt="sponsor"
                src={SponsorNike}
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                alt="sponsor"
                src={SponsorApple}
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                alt="sponsor"
                src={SponsorReebok}
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                alt="sponsor"
                src={SponsorHydroFlask}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
