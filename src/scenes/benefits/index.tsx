import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Tailored Workouts for Your Journey",
    description:
      "Our expert trainers craft personalized workout plans that adapt to your fitness level and goals. Whether you're a beginner or an experienced athlete, we'll guide you every step of the way.",
  },
  {
    icon: <BeakerIcon className="h-6 w-6" />,
    title: "Cutting-Edge Equipment",
    description:
      "Train with state-of-the-art equipment designed to challenge and inspire. From the latest cardio machines to advanced strength-training gear, EvoFit Hub is your playground for progress.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Community that Inspires",
    description:
      " Surround yourself with like-minded individuals who share your passion for growth. Our vibrant community supports, motivates, and celebrates each other's achievements, creating an environment where you thrive.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Mind-Body Transformation",
    description:
      " EvoFit Hub isn't just about physical gains – we emphasize holistic wellness. Engage in yoga classes, mindfulness workshops, and meditation sessions to nurture your mental and emotional well-being.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>
            @<span className="border-b-4 border-indigo-600">evofithub</span>
          </HText>
          <p className="my-5 text-base">
            we're not just a gym – we're your catalyst for transformation. Join
            our evolving community today and unlock a new chapter in your
            fitness journey. Your evolution starts here. You will experience the
            of <b>Evolution of Fitness</b>:
          </p>
        </motion.div>
        <motion.div
          className="mt-5 grid grid-cols-1 items-center  gap-2 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
