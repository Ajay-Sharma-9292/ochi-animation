import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full px-[4vw] py-20 bg-[#CEEA67] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4.1vw] leading-[4.5vw] tracking-tight font-light '>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="info font-light font-['Neue_Montreal']  py-[1vw] w-full border-t-[1px] border-b-[1px] border-[#94a555] mt-[4vw] ">
        <div className="mb-[5vw] flex gap-[15vw] justify-between">
          <div className="w-[70vw] ">
            <h1>What you can expect:</h1>
          </div>
          <div className="w-[60vw] flex flex-col gap-[3vw] ">
            <h1>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </h1>
            <h1>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
          <div className="w-[60vw] flex flex-col gap-[1.5vw] mt-[5vw] ">
            <h1>S:</h1>
            <div>
              <p>anchor tag using map</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-1/2">
          <h1 className="text-[4.5vw] mt-[1vw] leading-none">Our approach:</h1>
          <button className="px-8 py-4 mt-[2vw] bg-zinc-900 rounded-full text-white font-light flex gap-[2vw] items-center">
            READ MORE
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] mt-[1vw] bg-[#9cb053] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
