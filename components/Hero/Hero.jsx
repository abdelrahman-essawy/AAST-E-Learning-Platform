import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AASTLogo from '../AASTLogo'

export default function Hero() {
  return (
    <article className="relative overflow-hidden min-w-full bg-gray-800">
      <div className="max-w-7xl mx-auto mb-12 mt-4 lg:my-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <articale className="">
            <AASTLogo className='mobile lg:hidden m-auto' fill={'#d1d5db'} width='300' height='300' />

            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-center text-gray-300 leading-tight sm:text-5xl lg:text-start md:text-6xl">
                <span className="block xl:inline">Platform to enrich your <br /></span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 xl:inline ">Learning Experience</span>
              </h1>


              <p className="mt-3 text-base text-center text-gray-500 lg:text-start sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                <br /> For <span className='font-bold'>Instructors</span> who wish to add additional accessibility to their courses. <br /> For <span className='font-bold'>Students</span> who seek online sources that will help them increase their knowledge.
              </p>


              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="animate-pulse flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Instructor
                  </a>
                </div>
              </div>
            </div>
          </articale>
          <AASTLogo className='lg:block hidden' fill={'#e5e7eb'} width='500' height='600' />
        </div>
      </div>
    </article>
  )
}
