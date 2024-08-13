'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Divider from '../display elements/Divider'

type Props = {}

const Footer = (props: Props) => {

  return (
    <div className='flex flex-col w-full gap-2 px-10 lg:px-24 py-4 shadow-up'>
      <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-2 text-footnote' >
        {/* email contact */}
        <p className='flex gap-2'>
          Contactez moi : 
          <a 
          href="mailto:contact@naturofemme.fr" 
          className=" underline"
          target="_blank"
          >
            contect@naturofemme.fr
          </a>
        </p>
        {/* menu reminder */}
        <div className='flex gap-4'>
          <Link href={"/"}>Pressothérapie</Link>
          <Link href={"/"}>Naturopatie</Link>
          <Link href={"/"}>Tarifs</Link>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center gap-2 text-footnote' >
        <p className='flex gap-2'>Développé par : 
          <a 
          href="https://www.devvv3.com" 
          className=" underline"
          target="_blank"
          >
            Devvv3
          </a>
        </p>
      </div>

    </div>
  )
}

export default Footer