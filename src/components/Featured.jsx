import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const Featured = () => {
  const allcards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    allcards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    allcards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 ">
      <div className="w-full px-[4vw] border-b-[.5px] border-zinc-500 pb-[4vw] ">
        <h1 className='text-[4vw] font-light font-["Neue_Montreal"]  '>
          Featured projects
        </h1>
      </div>

      <div className="cards font-['Neue_Montreal'] px-[4vw] w-full flex gap-[2vw] py-[5vw] ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="relative w-full  "
        >
          <h1 className="absolute z-[9] flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight text-[#CEEA67] text-9xl font-semibold font-['Founders_Grotesk_Condensed']">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={allcards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="flex gap-[1vw] items-center mb-[1vw] ">
            <div className="w-[1vw] h-[1vw] bg-zinc-100 rounded-full "></div>
            <h1 className=" text-zinc-100">FYDE</h1>
          </div>
          <div className="card w-full h-[70vh] bg-zinc-700 rounded-xl overflow-hidden ">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className=" w-full relative "
        >
          <h1 className="absolute z-[9] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight text-[#CEEA67] text-9xl font-semibold font-['Founders_Grotesk_Condensed']">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={allcards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div>
            <div className="flex gap-[1vw] items-center mb-[1vw] ">
              <div className="w-[1vw] h-[1vw] bg-zinc-100 rounded-full "></div>
              <h1 className="text-zinc-100">VISE</h1>
            </div>
          </div>
          <div className="card w-full h-[70vh] bg-zinc-700 rounded-xl overflow-hidden ">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
