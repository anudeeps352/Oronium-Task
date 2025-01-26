import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
function Contact() {
  return (
    <div className="">
      <div className="absolute h-16 w-16 p-20 rounded-full border-white border-2 bottom-[20%] z-10 left-[5%] bg-background/100 backdrop-blur-md flex justify-center items-center text-white text-xl md:text-2xl">
        Contact
      </div>
      <button className="absolute h-16 w-16 p-20 rounded-full border-white border-2 bottom-[5%] left-[5%] flex items-center justify-center text-white">
        <span>
          <BsArrowDown size={'28px'} />
        </span>
      </button>
    </div>
  );
}

export default Contact;
