import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import AlertBadge from './Badge/AlertBadge';

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <AlertBadge />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}