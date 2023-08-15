import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import { AnimatePresence, motion } from "framer-motion";
import HText from "@/shared/HText";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

const classes: Array<ClassType> = [
  {
    name: "ZenFlow Yoga",
    description:
      "Discover harmony between body and mind in our ZenFlow Yoga class. Unwind and rejuvenate as you move through a series of gentle yoga poses, synchronized with conscious breathing. This class focuses on enhancing flexibility, balance, and inner calm. Guided by our experienced yoga instructors, you'll find relaxation in every breath and leave with a renewed sense of tranquility. ZenFlow Yoga is perfect for all fitness levels, providing a serene escape from the demands of daily life.",
    image: image1,
  },
  {
    name: "HIIT Fusion Blast",
    description:
      "Get ready to ignite your metabolism and push your limits in our HIIT Fusion Blast class. This high-intensity interval training session combines cardio and strength exercises in a dynamic format. Led by our expert trainers, you'll experience quick bursts of intense effort followed by short recovery periods. HIIT Fusion Blast torches calories, improves endurance, and boosts overall fitness. Join us for an exhilarating workout that delivers results in less time, leaving you energized and empowered.",
    image: image2,
  },
  {
    name: "Strength Unleashed",
    description:
      "Sculpt your body and unleash your inner strength with our Strength Unleashed class. This resistance-based training session is designed to target major muscle groups, promoting muscle growth and toning. Under the guidance of our skilled trainers, you'll utilize a variety of equipment such as dumbbells, resistance bands, and bodyweight exercises. Whether you're a beginner or an experienced lifter, Strength Unleashed will help you build a foundation of strength, confidence, and functional fitness.",
    image: image3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  const [selectedClass, setSelectedClass] = useState<ClassType>(classes[0]);

  return (
    <section id="ourclasses" className=" h-[1024px] w-full pt-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ourclasses)}
      >
        <div className="flex flex-col items-center justify-center whitespace-nowrap px-40 pb-10 md:flex-row">
          <HText>
            <span className="">OUR CLASSES</span>
          </HText>
          <ul className="flex basis-4/5 items-center justify-between">
            {classes.map((item, index) => (
              <li
                onClick={() => setSelectedClass(item)}
                key={`class-${index}`}
                className={`${
                  selectedClass === item && " border-indigo-600"
                } cursor-pointer border-b-4 p-4 font-bold uppercase tracking-wider  transition-all duration-300`}
              >
                {item.name.replace("Classes", "")}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex h-full w-full flex-col  bg-indigo-600 text-white md:flex-row ">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              key={selectedClass ? selectedClass.name : "empty"}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: -100,
                opacity: 0,
              }}
              transition={{ duration: 0.4 }}
              className="absolute z-10 flex h-full  flex-col justify-center bg-indigo-600/50 p-10  md:static md:basis-5/12 md:p-40 "
            >
              <h1 className="text-3xl font-medium ">{selectedClass.name}</h1>
              <p className="h-[320px pt-10 text-justify leading-7">
                {selectedClass.description}
              </p>
              <div className="pt-10 text-right">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Learn More
                </ActionButton>
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                x: 100,
              }}
              key={selectedClass ? selectedClass.image : "empty"}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: 100,
                opacity: 0,
              }}
              transition={{ duration: 0.4 }}
              className="h-full w-full basis-7/12 "
            >
              <img
                className="m-0 h-[678px] w-full p-0"
                src={selectedClass.image}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ourClasses;
