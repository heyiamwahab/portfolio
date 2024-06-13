import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1, x:1}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }} // Move up and down
          transition={{
            duration: 2.5, // Animation duration
            repeat: Infinity, // Repeat forever
            repeatType: "loop", // Loop the animation
            delay: 0.1, // Add a delay to make animations out of sync
          }}
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.3, // Add a different delay
          }}
        >
          <TbBrandNextjs className="text-6xl text-white" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5, // Add a different delay
          }}
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.7, // Add a different delay
          }}
        >
          <SiExpress className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.9, // Add a different delay
          }}
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.1, // Add a different delay
          }}
        >
          <BiLogoPostgresql className="text-6xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
