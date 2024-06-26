import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-[4vw]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] h-[5.7vw] relative top-[1.5vw] rounded-[.5vw] overflow-hidden"
                  >
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className='pt-[2vw] -mb-[1vw] text-[8.2vw] leading-[5.5vw] tracking-tight font-["Founders_Grotesk_Condensed"] font-semibold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-[4vw] py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
