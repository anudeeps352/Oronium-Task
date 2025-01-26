import Image from 'next/image';
import React from 'react';
import Hero from '../../../public/hero.jpg';

function HeroImage() {
  return (
    <>
      <Image
        src={Hero}
        quality={100}
        alt="Hero-Image"
        fill
        objectFit="center"
      ></Image>
    </>
  );
}

export default HeroImage;
