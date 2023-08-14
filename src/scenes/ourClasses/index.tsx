import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos neque quas vitae quidem unde ullam sunt adipisci laudantium, recusandae beatae, incidunt aut perspiciatis alias repudiandae excepturi. Minima, ex architecto.",
    image: image1,
  },
  {
    name: "Adventure Training Classes",
    image: image2,
  },
  {
    name: "Fitness Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos neque quas vitae quidem unde ullam sunt adipisci laudantium, recusandae beatae, incidunt aut perspiciatis alias repudiandae excepturi. Minima, ex architecto.",
    image: image3,
  },
  {
    name: "Yoga Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos neque quas vitae quidem unde ullam sunt adipisci laudantium, recusandae beatae, incidunt aut perspiciatis alias repudiandae excepturi. Minima, ex architecto.",
    image: image4,
  },
  {
    name: "Weight Training Classes",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quos neque quas vitae quidem unde ullam sunt adipisci laudantium, recusandae beatae, incidunt aut perspiciatis alias repudiandae excepturi. Minima, ex architecto.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-indigo-600 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ourclasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              exercitationem sed possimus tenetur at ipsam impedit vitae, animi
              illo dolor voluptate iste reiciendis voluptatibus harum labore,
              provident dicta sapiente obcaecati!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
