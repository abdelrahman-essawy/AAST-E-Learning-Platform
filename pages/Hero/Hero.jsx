import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AASTLogo from '../../components/AASTLogo'

export default function Hero() {
  return (
    <article className="relative overflow-hidden bg-gray-800">
      <div className="mx-auto  max-w-7xl 2xl:mb-20">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-3xl lg:pb-28 overflow-visible xl:pb-32 2xl:h-[calc(50vh-184px)] lg:h-[calc(100vh-184px)] h-fit">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mb-12 md:mb-0 ">
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
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 md:translate-x-28 lg:w-1/2">
        <div className='lg:bottom-1/4 flex justify-start'>

          <AASTLogo className='lg:block hidden' fill={'#e5e7eb'} width='500' height='600' />
        </div>
      </div>
    </article>
  )
}
