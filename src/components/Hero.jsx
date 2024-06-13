import {HERO_CONTENT} from "../constants"
import profile from "../assets/profile.jpg"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1 initial={{x: -100, opacity: 0 }}
           animate={{ x:0, opacity: 1 }}
           transition={{duration:0.8, delay: 0.7}}
           exit={{ opacity: 0 }} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Sumit Nagrikar
            </motion.h1>
            <motion.span initial={{x: -100, opacity: 0 }}
           animate={{ x:0, opacity: 1 }}
           transition={{duration:0.8, delay: 1.2}}
           exit={{ opacity: 0 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Web Developer</motion.span>
            <motion.p initial={{x: -100, opacity: 0 }}
           animate={{ x:0, opacity: 1 }}
           transition={{duration:0.8, delay: 1.7}}
           exit={{ opacity: 0 }} className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div initial={{x: 100, opacity: 0 }}
           animate={{ x:0, opacity: 1 }}
           transition={{duration:1, delay: 1.2}}
           exit={{ opacity: 0 }} className="relative flex justify-center">
                <img src={profile} alt="Sumit Nagrikar"  className=" rounded-xl border-0 ring-inset-2 ring-4 ring-neutral-800 w-3/4"/>
                <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0, 0, 0, 0.3), transparent 70%)",
              }}
            ></div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
