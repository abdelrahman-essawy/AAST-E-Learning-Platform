import Head from 'next/head'
import { useEffect, useContext } from 'react';
import Hr from './../components/Hr';
import Hero from './../components/Hero/Hero';
import Features from './../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Navbar from './../components/Navbar/Navbar';
import AlertBadge from './../components/Badge/AlertBadge';



export default function Home() {
  return (
    <>
      <Head>
        <title>AAST | E-Learning</title>
        <meta name="description" content="Platform to enrich your Learning Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
        <Hero />
        <Hr />
        <Features />

      </main>
    </>

  )
}
