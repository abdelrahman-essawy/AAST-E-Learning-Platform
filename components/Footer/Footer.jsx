import Link from 'next/link';
import React from 'react'
import AASTLogo from '../AASTLogo';
import Hr from './../Hr';

export default function Footer() {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#' },
        { name: 'Courses', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
    ]

    return (
        <>
        <Hr/>
        <footer className="p-4 bg-gray-200 shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" >
                <a className="flex mb-4 sm:mb-0">
                    <AASTLogo className='mr-1' width={35} height={35} fill={'#f9fafb'} />
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-gray-200">AAST</span>
                </a>
            </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li> */}
                    {
                        navigation.map((item, index) => {
                            return (
                                <li key={index} >
                                <Link href={item.href}>
                                    <a className="mr-4 hover:underline md:mr-6 ">{item.name}</a>
                                </Link>
                                </li>)
                        })
                    }

                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://aast.edu/" className="hover:underline">AAST</a>. All Rights Reserved.
            {console.log('footer')}
            </span>
        </footer>
        </>

    )
}
