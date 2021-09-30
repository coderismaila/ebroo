import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import ceo from '../public/md_ibro_fura.jpg';

export default function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <Head>
        <title>Ebroo Group</title>
      </Head>
      <Header />
      <main>
        <section>
          <div className='min-h-screen px-5 md:px-10 lg:px-32 mx-auto mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-20 h-full'>
              <div className='flex justify-center'>
                <div>
                  <h3 className='text-xs text-[#F61067] font-extrabold uppercase tracking-[6px]'>
                    Intro
                  </h3>
                  <h2 className='text-[#30233D] text-[45px] font-medium mt-4'>
                    Our Vision
                  </h2>
                  <p className='text-[18px] text-[#30233D] font-extrabold mt-4'>
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle.
                  </p>
                  <p className='text-[18px] text-[#776C82] mt-10'>
                    By the same illusion which lifts the horizon of the sea to
                    the level of the spectator on a hillside, the sable cloud
                    beneath was dished out, and the car seemed to float in the
                    middle of an immense dark sphere, whose upper half was
                    strewn with silver.
                  </p>
                  <div className='mt-10'>
                    <Link href='/'>
                      <a className='text-[13.5px] text-[#FCFCFC] bg-[#F61067] px-10 py-2 rounded-full tracking-[2px]'>
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='min-h-screen mt-20 md:mt-0 md:h-full w-full'>
                <div className='relative h-full w-full'>
                  <div className='absolute left-56 md:left-60 lg:left-80 z-20 w-full h-4/6 bg-[#30124E]'></div>
                  <div className='absolute left-44 md:left-52 lg:left-60 z-0 w-full h-4/6 bg-[#30124E]'></div>
                  <div className='relative top-10 md:top-10 left-0 h-full w-full flex'>
                    <Image
                      src={ceo}
                      layout='fill'
                      objectFit='contain'
                      objectPosition='0 0'
                      alt='ceo'
                      className='z-10 w-full'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
