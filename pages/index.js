import Head from 'next/head'
import Image from 'next/image'
import Hero from './Hero/Hero'
import { useEffect, useContext } from 'react';
import { WindowDimentionsContextProvider } from './api/Context/WindowDimentionsContext';
import Navbar from './../components/Navbar';
import Courses from './Courses/Courses';

export default function Home() {
  return (
    <WindowDimentionsContextProvider>

      <div className='scroll-smooth'>
        <Head>
          <title>AAST | E-Learning</title>
          <meta name="description" content="Platform to enrich your
Learning Experience" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar />

        </header>

        <main className='scroll-smooth'>
          <Hero />
          <Courses />
        </main>

        <footer >

        </footer>
      </div>
    </WindowDimentionsContextProvider>
  )
}
