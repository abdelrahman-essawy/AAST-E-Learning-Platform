import Head from 'next/head'
import Hero from './Hero/Hero'
import { useEffect, useContext } from 'react';
import Navbar from './../components/Navbar';
import Courses from './Courses/Courses';



export default function Home() {
  return (
    <div className='scroll-smooth'>
        <Head>
          <title>AAST | E-Learning</title>
          <meta name="description" content="Platform to enrich your Learning Experience" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar />

        </header>
        <main>
          <Hero />

          <Courses />
        </main>

        <footer >

        </footer>
    </div>

  )
}
