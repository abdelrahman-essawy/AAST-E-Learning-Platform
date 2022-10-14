import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AASTLogo from '../../components/AASTLogo'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-3xl lg:pb-28 xl:pb-32">
          {/* <svg
            className="absolute inset-y-0 right-0 hidden h-full w-8 translate-x-1/4 transform text-gray-200 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-center text-gray-300 leading-tight sm:text-5xl lg:text-start md:text-6xl">
                <span className="block xl:inline">Platform to enrich your <br /></span>
                <span className="block text-indigo-600 xl:inline">Learning Experience</span>
              </h1>
              <p className="mt-3 text-base text-center text-gray-500 lg:text-start sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                <br /> For <span className='font-bold'>Instructors</span> who wish to add additional accessibility to their courses. <br /> For <span className='font-bold'>Students</span> who seek online sources that will help them increase their knowledge.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
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
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className='lg:bottom-1/4 flex justify-start'>

          <AASTLogo className='lg:block hidden ' fill={'#d1d5db'} width='500' height='600' />
          {/* <AASTLogo className='mobile sm:hidden sm:top-0 block' fill={'#d1d5db'} width='600' height='300' /> */}
        </div>
      </div>
    </div>
  )
}
