import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
type CardProps = {
  title?: string;
  footerContent?: React.ReactNode;
};

function Card({ title, footerContent }: CardProps) {
  return (
    <div
      className=" bg-white rounded-3xl flex flex-col p-6 md:p-8 w-3/12 md:absolute md:right-16 md:-bottom-20"
      style={{
        clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%, 0% 40%)',
      }}
    >
      <div className="flex w-full justify-end">
        <button className="rounded-full border-2 border-black p-4 md:p-6">
          <FaArrowRight />
        </button>
      </div>

      <div className="p-4 mt-24">
        {title && <h3 className="text-base md:text-4xl ">{title}</h3>}
      </div>
      <hr className="bg-gray-300 h-0.5" />
      {footerContent && (
        <div className="p-4 flex justify-between font-medium text-sm md:text-xl">
          {footerContent}
        </div>
      )}
    </div>
  );
}

export default Card;
