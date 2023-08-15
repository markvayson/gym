import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "w-full mt-5 rounded-lg bg-indigo-600 px-5 py-3 placeholder:text-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.contactus)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            GET STARTED FOR
            <span className="text-indigo-600"> FREE</span>
          </HText>
          <p className="my-5">
            Connect with EvoFit Hub today and take the first step towards your
            fitness evolution. Our team is here to answer your questions,
            provide information, and guide you on your journey to a healthier
            lifestyle. Reach out to us to discover how we can help you achieve
            your fitness goals
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/78badd66c62d772caf0f544d3060bcc6"
              method="POST"
              target="_blank"
              onSubmit={onSubmit}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-indigo-400">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9.+%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-indigo-400">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalied email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="message"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-indigo-400">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max Length is 2000 char."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-indigo-400 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="h-[450px] w-full"
                alt="contact-us-image"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
