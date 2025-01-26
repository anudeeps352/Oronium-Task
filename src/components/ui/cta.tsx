import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Cta() {
  return (
    <div className="flex md:absolute top-[40%] left-[20%]">
      <div className="rounded-full px-8  bg-white flex justify-center items-center text-2xl ">
        Learn more
      </div>
      <a className="h-16 w-16 rounded-full bg-indigo-950 border-4 border-white transform -translate-x-4 flex justify-center items-center">
        <MdOutlineArrowOutward className="text-white" />
      </a>
    </div>
  );
}

export default Cta;
