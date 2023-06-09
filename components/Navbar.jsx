import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineCloseCircle, AiFillGithub, AiFillMail, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
import {useEffect} from 'react'

import {useRouter} from 'next/router'



export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };


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
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-white'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/../public/assets/logo.png' width='125' height='25' />
        <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>


        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
            <div className='flex items-center justify-between'>
                <Image src='/../public/assets/logo.png' width='87' height='35' alt='/' />
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineCloseCircle />
                </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
            </div>
        </div>
        <div className='py-4 flex-col'>
            <ul className='uppercase'>
                <Link href='/'>
                    <li className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='#about'>
                    <li className='py-4 text-sm'>About</li>
                </Link>
                <Link href='#skills'>
                    <li className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='#projects'>
                    <li className='py-4 text-sm'>Projects</li>
                </Link>
            </ul>
            <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={redirectToLinkedIn}>
                <AiFillLinkedin />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={redirectToGithub}>
                <AiFillGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={redirectToFacebook}>
                <AiFillFacebook />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' onClick={redirectToInstagram}>
                <AiFillInstagram />
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}
export default Navbar;