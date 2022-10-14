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
          <title>Practise1</title>
          <meta name="description" content="Practise1 Next.js" />
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
