'use client'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GrMenu, GrClose } from "react-icons/gr";



type Props = {}

const MobileMenu = (props: Props) => {
  
  //* LOCAL STATE
    const currentPathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const isActive = (pathname: string) => {
        // Specific logic for homepage route "/"
        if (pathname === "/") {
            return currentPathname === pathname;
        }
        // other cases
        return currentPathname.startsWith(pathname);
    };

    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    //* TEST
    // console.log("menuOpen",isMenuOpen);
      
  
    return (
      <>
        <div className='fixed inset-0 flex justify-between items-center w-full h-20 px-10 pt-3 drop-shadow-lg bg-mainColor dark:bg-mainColorDark dark:shadow-white z-30'>
            <button onClick={()=>setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <GrClose size={25}/> : <GrMenu size={25}/>}</button>
            <Image alt='logo' src={"/images/logo/logo_naturofemme_small.png"} width={50} height={50} />
        </div>
        <div /*style={{ display: isMenuOpen ? 'flex' : 'none' }} */ className={`fixed inset-y-20 left-0 flex flex-col justify-start items-center gap-10 pt-10 bg-mainColor dark:bg-mainColorDark  text-h3 w-full h-full transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0 " : "-translate-x-full"} z-20`}>
            <Link href={'/myart'} onClick={handleLinkClick} className={`px-4 py-1 border-b-2 ${isActive("/") ? " border-accentColor":"border-transparent"} transition-all`}>La pressothérapie</Link>
            <Link href={'/collections'} onClick={handleLinkClick} className={`px-4 py-1 border-b-2 ${isActive("/") ? " border-accentColor":"border-transparent"} transition-all`}>A propos</Link>
            <Link href={'/about'} onClick={handleLinkClick} className={`px-4 py-1 border-b-2 ${isActive("/") ? " border-accentColor":"border-transparent"} transition-all`}>Tarifs</Link>
        </div>
      </>      
    )
}

export default MobileMenu