import React from 'react'

type Props = {
    label:string
    isDisabled?:boolean
}

const MainButtonLabel = (props: Props) => {
  return (
    <div className={`flex justify-center items-center ${props.isDisabled? "bg-secondColor/50 dark:bg-neutral-600":"bg-secondColor dark:bg-mainButtonDark"}  text-h3 text-white dark:text-black text-center px-2 py-4 transition-all rounded-full hover:bg-secondColor/50 `}>{props.label.toUpperCase()}</div>
  )
}

export default MainButtonLabel