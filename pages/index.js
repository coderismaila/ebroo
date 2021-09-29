import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import banner from '../public/banner2.png';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full'>
      <Head>
        <title>Ebroo Group</title>
      </Head>
      <header className='relative w-full h-screen'>
        <div className='absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-[#5E239D] to-[#c4c4c4] mix-blend-multiply'></div>
        <div className='absolute top-0 left-0 w-full h-full z-0 bg-hero-image'></div>
        <Image src={banner} alt='' layout='fill' objectFit='cover' />
        <div className='absolute top-0 left-0 w-full h-full z-0 bg-[#5E239D] mix-blend-multiply'></div>
        <div className='relative pt-10 mx-auto z-10'>
          <nav className='relative px-5 md:px-10 lg:px-32 mx-auto flex flex-wrap items-center justify-between text-white text-sm font-bold'>
            <Link className='font-bol' href='/'>
              <a className='font-black text-2xl tracking-[0.125em]'>
                Ebroo Group
              </a>
            </Link>
            <div
              className='md:hidden cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
            <div
              className={`${!isOpen ? 'hidden md:flex' : 'flex'}
                
                  absolute top-10 left-0 md:top-auto md:left-auto md:relative w-full bg-[#F61067] md:bg-transparent md:w-auto flex-col md:flex-row items-center justify-between md:justify-center md:space-x-5 space-y-10 md:space-y-0 mt-5 p-10 md:p-0 md:mt-0 tracking-[0.125em]`}
            >
              <Link href='/'>
                <a className='tracking-[0.125em] '>About Us</a>
              </Link>
              <Link href='/'>
                <a className='tracking-[0.125em]'>Businesses</a>
              </Link>
              <Link href='/'>
                <a className='tracking-[0.125em]'>Contact Us</a>
              </Link>
              <Link href='/' passHref>
                <div className='flex items-center cursor-pointer'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                  </span>
                  <a className='tracking-[0.125em]'>08062132407</a>
                </div>
              </Link>
            </div>
          </nav>
          <div>
            <div className='mx-5 md:mx-10 lg:mx-32   text-white my-20 items-center justify-center '>
              <p className='text-sm mb-5 font-extrabold uppercase'>
                What we do
              </p>
              <h1 className='text-5xl sm:text-7xl lg:text-8xl text-white font-extrabold tracking-[0%] leading-[118.8%] '>
                We grow <br />
                <span className='text-[#F61067]'>great business</span>
              </h1>
            </div>
            <div className='inline-block items-center border-[1px] border-l-0 border-[#c4c4c4] p-6 pl-0 mr-5'>
              <div className='flex items-center'>
                <p className='ml-5 md:ml-32 text-[#fcfcfc] font-normal text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='w-12 min-w-[3rem] ml-5 h-12 md:ml-9 text-white flex items-center justify-center border-[1px]  rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1>Welcome to Ebroo Group of Companies</h1>
      </main>
      <footer></footer>
    </div>
  );
}
