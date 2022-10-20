import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hr from './../components/Hr';
import Image from 'next/future/image'
import academyBg from '/public/academyBg.webp'
import { Login } from './../components/Login/Login';

export default function login() {
  return (
    <>
      <Login />
    </>
  )
}
