import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import {useRouter} from 'next/router'


const Main = () => {
  const router = useRouter();

  const redirectToLinkedIn = () => {
    router.push('https://www.linkedin.com')
  };
  const redirectToInstagram = () => {
    router.push('https://www.instagram.com/agsslmmm_/')
  };
  const redirectToFacebook = () => {
    router.push('https://www.facebook.com/melOodrasagus/')
  };
  const redirectToGithub = () => {
    router.push('https://github.com/Agsslmmmmm')
  }
  return (
   <div className='w-full h-screen text-center' id='header'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <p className='uppercase text-sm tracking-widest text-gray-700'>LET'S BUILD SOMETHING TOGETHER</p>
         <h1 className='py-4 text-gray-700 text-5xl'>Hi I'm <span className='text-blue-600'>Agus Salim</span></h1>
         <h1 className='py-4 text-gray-700 text-4xl'>A Full-Stack Web Developer</h1>
           <p className='py-4 text-gray-600 max-w-[70%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam natus veniam ad placeat non.</p>

           <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
           <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={redirectToLinkedIn}>
            <AiFillLinkedin />
            </div>
           <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={redirectToGithub}>
            <AiFillGithub />
            </div>
           <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={redirectToInstagram}>
            <AiFillInstagram />
            </div>
           <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={redirectToFacebook}>
            <AiFillFacebook />
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Main;