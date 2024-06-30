import React from 'react'
import { Link } from 'react-router-dom'
interface CardProps{
    image:string
    name:string,
    title:string,
    description:string,
    socialicon:JSX.Element,
    socialLink:string
}
export const Card:React.FC<CardProps>=({
    image,
    name,
    title,
    description,
    socialicon,
    socialLink
})=>{
    return(
       <>
       <div className='w-[20rem] h-[25rem] bg-white border border-gray-400 flex flex-col '>
             <div className='h-1/2 bg-gray-800'>
            {image}
             </div>
             <div className='p-2 pl-4'>
             <h1 className='font-semibold mt-4 text-xl'>{name}</h1>
             <h2 className='font-normal text-gray-600 mt-4 text-md'>{title}</h2>
             <p className='mt-4 text-gray-400'>{description}</p>
             <div className='bg-gray-200 rounded-full w-[2rem] h-[2rem] flex justify-center items-center mt-4'>
             {socialLink ? (
            //   <Link to={socialLink}>
                socialicon
            //   </Link>
            ) : (
              socialicon
            )}
                </div>
             </div>
            </div>
       </>
    )
}