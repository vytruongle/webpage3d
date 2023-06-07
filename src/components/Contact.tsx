import { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// ZCUSvV8cjSOkd5PK4
// template_nxu46dg
// service_b5qfq0q
const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        `service_b5qfq0q`, //service ID
        `template_nxu46dg`, //template ID
        {
          from_name: form.name,
          to_name: "Vy Truong Le",
          from_email: form.email,
          to_email: "truongvy18121999@gmail.com",
          message: form.message,
        },
        "ZCUSvV8cjSOkd5PK4" //public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!. I will get back to you as soon as posible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      id="contact"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave your message"
              className="py-4 bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 bg-tertiary outline-none rounded-xl duration-500 hover:duration-500 hover:text-tertiary hover:bg-white-100 w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
