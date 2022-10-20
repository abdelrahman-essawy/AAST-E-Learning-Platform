import Image from "next/future/image";
import React from "react";
import AASTLogo from './../AASTLogo';
import Link from 'next/link';



export function Login({ }) {

  // const asd = <div>
  //   <div classname="flex">
  //     <div className="lg:flex ">
  //       <div className="hidden lg:flex items-center justify-center bg-gray-800 flex-1 h-[calc(100vh_-_257px)]">
  //         <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer w-full">
  //           <AASTLogo className="w-full mx-auto scale-"

  //             fill="#535461" width="100" height="100" />

  //         </div>
  //       </div>
  //       <div className="lg:w-1/2 xl:max-w-screen-sm">
  //         <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
  //           <div className="cursor-pointer flex items-center">
  //             <div>
  //               <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
  //                 <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
  //                 <g transform="matrix( 1, 0, 0, 1, 0,0) ">
  //                   <g>
  //                     <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
  //                   </g>
  //                 </g>
  //               </svg>
  //             </div>
  //             <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">blockify</div>
  //           </div>
  //         </div>
  //         <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
  //           <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
  //   xl:text-bold">Log in</h2>
  //           <div className="mt-12">
  //             <form>
  //               <div>
  //                 <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
  //                 <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="mike@gmail.com" />
  //               </div>
  //               <div className="mt-8">
  //                 <div className="flex justify-between items-center">
  //                   <div className="text-sm font-bold text-gray-700 tracking-wide">
  //                     Password
  //                   </div>
  //                   <div>
  //                     <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
  //                       cursor-pointer">
  //                       Forgot Password?
  //                     </a>
  //                   </div>
  //                 </div>
  //                 <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Enter your password" />
  //               </div>
  //               <div className="mt-10">
  //                 <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
  //               font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
  //               shadow-lg">
  //                   Log In
  //                 </button>
  //               </div>
  //             </form>
  //             <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
  //               Don&apos;t have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  // </div>


  return <>
    {/* <div>
  <div classname="flex">
        <div className="lg:flex ">
          <div className="hidden lg:flex items-center justify-center bg-gray-800 flex-1 h-[calc(100vh_-_257px)]">
            <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer w-full">
             <AASTLogo className="w-full mx-auto scale-"
                
              fill="#535461" width="100" height="100"/> 

            </div>
          </div>
          <div className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
              <div className="cursor-pointer flex items-center">
                <div>
                  <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                      <g>
                        <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">blockify</div>
              </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Log in</h2>
              <div className="mt-12">
                <form>
                  <div>
                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="mike@gmail.com" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                      </div>
                      <div>
                        <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                  cursor-pointer">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type placeholder="Enter your password" />
                  </div>
                  <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
                      Log In
                    </button>
                  </div>
                </form>
                <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                  Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div> */}
    <header>
      <title>
        AAST | Login
      </title>
    </header>
    <main className="relative h-[calc(100vh_-_245px)] sm:h-[calc(100vh_-_209px)] md:h-[calc(100vh_-_241px)] lg:h-[calc(100vh_-_257px)]">
      <div className="bg-gray-800 h-full flex text-sm sm:text-xl ">
        <div className="w-full mx-3  md:max-w-xl  md:mx-auto md:border-gray-700 md:px-3 md:pb-10 md:mt-12 md:rounded-lg">
          <div className="flex justify-center h-20 my-6 " >
            <AASTLogo width='70' height='70' fill={'#d1d5db'} className='self-center' />
            <h1 className="text-gray-50  text-4xl self-center" ><span className="opacity-30" >|</span> Login</h1>
          </div>

          <form className="">
            <div>
              <div className="text-sm font-bold text-gray-300 tracking-wide">Email Address</div>
              <input className="bg-gray-800 w-full text-white text-md py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='email' placeholder="abdelrahman.essawy@studentaast.edu" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-300 tracking-wide">
                  Password
                </div>
                <div>
                  <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                        cursor-pointer">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input className="bg-gray-800 w-full text-white text-md py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='password' placeholder="Enter your password" />
            </div>
            <div className="mt-12">
              <Link href='/' >
                <button className="bg-indigo-500 text-gray-100 p-3 w-full  rounded-md tracking-wide
                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                shadow-lg">
                  Login
                </button>

              </Link>
            </div>
            <div className="flex justify-center mt-4 mx-auto text-sm font-display font-semibold text-gray-400 text-start">
              Don&apos;t have an account ? <Link href={'/signup'}>
                <a className="cursor-pointer mx-2 text-indigo-600 hover:text-indigo-800">Sign up</a>
              </Link>
            </div>
          </form>



        </div>
      </div>
    </main>

  </>;
}
