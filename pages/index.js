import Head from 'next/head'
import Image from 'next/image'
import Hero from './hero/Hero'
import { useEffect, useContext } from 'react';
import { WindowDimentionsContextProvider } from './api/Context/WindowDimentionsContext';
import Navbar from './../components/Navbar';

export default function Home() {
  return (
    <WindowDimentionsContextProvider>

      <div>
        <Head>
          <title>AAST | E-Learning</title>
          <meta name="description" content="Platform to enrich your
Learning Experience" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar />

        </header>

        <main >
          <Hero />
        </main>

        <footer >

        </footer>
      </div>
    </WindowDimentionsContextProvider>
  )
}
