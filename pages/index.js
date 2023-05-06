import Image from 'next/image'
import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import Main from '../components/Main'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import {useRef} from 'react'



export default function Home() {
  return (
   <div>
    <Head>
      <title>Agus | Front-End Developer</title>
      <meta name="description" content='Generate by create next app' />
      <link rel="icon" href="/public/assets/pr.jpg" />
    </Head>

    
    <Navbar />

    <div className="header">

    <Main />
    </div>
    <div className="about">

    <About />
    </div>
    <div className="skills">

    <Skills />
    </div>
    <div className="projects">

    <Projects />
    </div>

    
   </div>
  )
}
