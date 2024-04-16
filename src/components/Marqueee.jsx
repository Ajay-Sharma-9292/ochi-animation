import React from "react";
import { motion } from "framer-motion";

const Marqueee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01" className="w-full py-[7vw] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10}}
          className='text-[25vw] font-bold pr-20 font-["Founders_Grotesk_Condensed"] -mt-[11vw] -mb-[8vw] tracking-tight'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[25vw] font-bold pr-20 font-["Founders_Grotesk_Condensed"] -mt-[11vw] -mb-[8vw] tracking-tight'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marqueee;
