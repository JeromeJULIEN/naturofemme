import React from 'react'

type Props = {
    label:string
}

const SectionTitle = (props: Props) => {
  return (
    <h1 className='w-full text-h1 mb-8 border-b-4 border-accentColor'>{props.label}</h1>
  )
}

export default SectionTitle