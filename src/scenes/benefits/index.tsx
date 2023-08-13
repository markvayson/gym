import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsImage from "@/assets/BenefitsImage.png";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Tailored Workouts for Your Journey",
    description:
      "Our expert trainers craft personalized workout plans that adapt to your fitness level and goals. Whether you're a beginner or an experienced athlete, we'll guide you every step of the way.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
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
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Expert Guidance",
    description:
      "Our certified trainers are more than instructors; they're your partners in progress. Receive personalized guidance, form correction, and performance tracking to ensure you're always on the path to success.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Innovative Classes",
    description:
      "Discover a variety of innovative group fitness classes designed to challenge your limits, from high-intensity interval training (HIIT) to functional circuit workouts.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Wellness Ecosystem",
    description:
      "Enjoy access to partnerships with premium wellness brands, offering discounts on nutrition supplements, activewear, and recovery services, enhancing your overall fitness journey.",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Goal-Oriented Challenges",
    description:
      "Participate in exciting fitness challenges that push you beyond your comfort zone. Set new benchmarks, achieve milestones, and relish the thrill of your own evolution.",
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
          className="md:grid-cols-4 grid-cols-2 grid gap-2  items-center mt-5"
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
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto rounded-xl shadow-md"
            alt="benefits-logo"
            src={BenefitsImage}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY GETTING{" "}
                    <span className="text-indigo-400">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus unde, laborum odit excepturi rerum qui facilis neque
                harum, iste provident voluptatibus possimus molestias quidem
                nisi praesentium? Blanditiis sint tenetur minus!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis voluptates adipisci fugit velit iusto voluptas, omnis
                sit cupiditate eum id, eius iure illo ad pariatur officia.
                Repellendus ex incidunt atque?
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
