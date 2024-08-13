'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Profiler, useState } from 'react'

type Props = {}

const DesktopMenu = (props: Props) => {

  //* LOCAL STATE
  const currentPathname = usePathname()

    const isActive = (pathname: string) => {
        // Specific logic for homepage route "/"
        if (pathname === "/") {
            return currentPathname === pathname;
        }
        // other cases
        return currentPathname.startsWith(pathname);
    };

  return (
    <>
      <div className='fixed inset-0 flex justify-between items-center w-full h-20 px-10 pt-2 drop-shadow-lg dark:shadow-white bg-mainColor dark:bg-mainColorDark z-20 '>
          <Link href={"/"} className='flex justify-start items-center italic gap-4 font-thin'>
            <Image alt='logo' src={"/images/logo/logo_naturofemme_small.png"} width={50} height={50} />
            <p>Naturofemme</p>
          </Link>
          <div className='flex justify-between items-center  text-h3  w-1/2 h-full italic'>
            <Link href={'/'} className={`px-4 py-1 border-b-2 ${isActive("/t") ? " border-accentColor":"border-transparent"} transition-all`}>La pressothérapie</Link>
            <Link href={'/'} className={`px-4 py-1 border-b-2 ${isActive("/t") ? " border-accentColor":"border-transparent"} transition-all`}>A propos</Link>
            <Link href={'/'} className={`px-4 py-1 border-b-2 ${isActive("/t") ? " border-accentColor":"border-transparent"} transition-all`}>Tarifs</Link>
          </div>
      </div>
    </>
  )
}

export default DesktopMenu