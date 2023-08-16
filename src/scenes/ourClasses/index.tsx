import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import HText from "@/shared/HText";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const classes: Array<ClassType> = [
  {
    name: "ZenFlow Yoga",
    description:
      "Discover harmony between body and mind in our ZenFlow Yoga class. Unwind and rejuvenate as you move through gentle yoga poses, synchronized with conscious breathing. Focus on flexibility, balance, and inner calm. Led by experienced instructors. Perfect for all fitness levels.",
    image: image1,
  },
  {
    name: "HIIT Fusion Blast",
    description:
      "Ignite metabolism in our HIIT Fusion Blast class. Intense interval training combines cardio and strength exercises. Expert trainers guide you through bursts of effort and quick recovery. Torch calories, improve endurance, boost fitness.",
    image: image2,
  },
  {
    name: "Strength Unleashed",
    description:
      "Unleash your inner strength in our Strength Unleashed class. Resistance-based training targets muscle groups. Skilled trainers, variety of equipment. Build strength, confidence, and functional fitness.",
    image: image3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [selectedClass, setSelectedClass] = useState<ClassType>(classes[0]);
  return (
    <section id="ourclasses" className=" w-full pt-24  ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ourclasses)}
      >
        <div className=" flex flex-col pb-10  md:flex-row md:px-40">
          <HText>
            <p className="px-10 pt-10  md:px-0">
              @<span className="border-b-4 border-indigo-600">classes</span>
            </p>
          </HText>
        </div>
        <div className="flex flex-col gap-10 pb-10 md:flex-row md:px-40">
          {classes.map((item, index) =>
            isAboveMediumScreens ? (
              <button
                key={`class-button-${index}`}
                onClick={() => setSelectedClass(item)}
                className={`${
                  item === selectedClass && "pointer-events-none opacity-0"
                } border-b-4 font-bold uppercase tracking-wider transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600`}
              >
                {item.name}
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index / 4 + 0.3 }}
                key={`classes-${index}`}
                className="relative "
              >
                <div className="absolute left-0 top-0 flex h-full flex-col justify-between bg-indigo-600/80 p-5 text-white ">
                  <h2 className="text-xl font-bold uppercase">{item.name}</h2>
                  <p className="text-justify">{item.description}</p>
                </div>

                <div>
                  <img src={item.image} />
                </div>
              </motion.div>
            ),
          )}
        </div>
        {isAboveMediumScreens && (
          <div className="flex justify-between gap-10 bg-indigo-600 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClass.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex basis-1/2 flex-col gap-10 px-40 pr-10 pt-40"
              >
                <h2 className="text-xl font-bold uppercase">
                  {selectedClass.name}
                </h2>
                <p className="text-justify text-lg">
                  {selectedClass.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`class-${selectedClass.image}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="basis-1/2"
              >
                <img src={selectedClass.image} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ourClasses;
