import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-12 md:h-full py-10"
    >

        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveLarge ? (
          
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="assets/Photo.jpeg"
              />
            
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/Photo.jpeg"
            />
          )}
        </div>

        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Shawn {""}
              <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
                Smith
              </span>
            </p>

            <p className="mt-10 mb-7 text-m text-center md:text-start">
              I am a full stack web developer with a passion for learning and creating new things. I am a graduate of Flatiron School Full Stack Web Development Bootcamp. I am looking for a position where I can continue to grow and learn as a developer. In addition, my strong communication and interpersonal skills enable me to collaborate effectively with colleagues at all levels, fostering a positive and productive work environment.

            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >

            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className=" hover:text-blue transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                Let's talk.
              </div>
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
      );
};

      export default Landing;