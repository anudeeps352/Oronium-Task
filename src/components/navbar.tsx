'use client';
import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { LuBookmarkMinus } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import useAsync from '@/hooks/useAsync';
import fetchweatherData from '@/services/weatherService';
import Image from 'next/image';
import Profile from '../../public/profile.jpeg';
import NotificationBadge from './ui/notificationBadge';
function Navbar() {
  const latitude = 11.642966;
  const longitude = 75.562068;
  const { data, loading, error } = useAsync(() =>
    fetchweatherData(latitude, longitude)
  );

  return (
    <div className="w-[95%]  flex items-center mt-8 justify-between px-8 py-8 bg-white rounded-full gap-16 ">
      <h2 className="text-5xl font-bold">trrvat</h2>
      <div className="flex text-4xl mx-auto">
        {loading && <span>Loading...</span>}
        {error && <span>Error loading data: {error.message}</span>}
        {data && (
          <>
            <span className="text-3xl">
              {new Date(data.time).toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
              })}
            </span>
          </>
        )}
      </div>
      <div className="toggle ml-auto">
        <div className="bg-gray-200 rounded-full flex px-1 py-2 items-center gap-6">
          <h2 className="bg-white rounded-full px-3 py-1">EN</h2>
          <h2 className="px-3 py-1">IN</h2>
        </div>
      </div>
      <div className="relative">
        <LuBookmarkMinus size={'28px'} />
        <NotificationBadge
          count={21}
          className={'absolute -top-5 -right-3 bg-yellow-500'}
        />
      </div>
      <div className="relative">
        <LuShoppingCart size={'28px'} />
        <NotificationBadge
          count={1}
          className={'absolute -top-5 -right-3 bg-yellow-500'}
        />
      </div>
      <div className="px-2 py-1 border-gray-300 border-2 rounded-full flex justify-between gap-4 items-center">
        <GiHamburgerMenu />
        <div className="rounded-full w-9 h-9 relative overflow-hidden">
          <Image
            src={Profile}
            quality={100}
            alt="Hero-Image"
            fill
            objectFit="center"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
