import React from 'react'
import Image from 'next/image'
import gambar from '../public/ini.jpg'


export const About = () => {

  return (
    <div className='w-full md:h-screen p-12 flex py-16' id='about'>
        <div className='max-2-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 justify-center'>
                <p className='text-xl uppercase tracking-widest text-[#1f6d7d]'>ABOUT</p>
                <h2 className='text-xl font-bold py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am Agus Salim</p>
                <p className='py-2 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt praesentium sit doloremque cumque eos aliquid esse? Quasi, laudantium hic laborum soluta aperiam, exercitationem non corporis odit at, dolores nisi ipsum? Ullam dicta quisquam officia tempora vel! Fugit, corrupti blanditiis repudiandae omnis delectus fugiat sint hic nesciunt vero quas temporibus doloremque?</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi, eos magnam assumenda aspernatur placeat. Accusamus recusandae asperiores numquam excepturi in illum eos blanditiis quis, aut ea et ab aliquid error atque explicabo beatae sapiente quos magnam libero ad accusantium commodi omnis. Accusantium optio aspernatur non blanditiis amet, omnis libero error, possimus voluptatum quis tempora.</p>
                <p className='py-2 text-blue-600 underline cursor-pointer'>Check out some of my projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded' src={gambar} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About;