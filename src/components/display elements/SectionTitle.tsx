import Image from 'next/image'
import React from 'react'

type Props = {
    label:string
}

const SectionTitle = (props: Props) => {
  return (
    <div className='flex justify-start w-full '>
      <Image alt='image' src={'/images/leaf1.png'} width={50} height={20} className='aspect-square'/>
      <h1 className='w-full text-h1 border-b-4 border-accentColor'>{props.label}</h1>
    </div>
  )
}

export default SectionTitle