import Image from 'next/image'
import React from 'react'
import beautyQueen from "/public/assets/images/banner-queen.png";
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';
import Pinkbtn from '../Pinkbtn';

const Banner = () => {
    return (
        <main className='w-full'>
            <MaxWidthWrapper>
                <div className='md:flex px-2 justify-around my-4 md:my-32 items-center bg-slate-100 space-y-2'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl md:text-5xl font-bold md:leading-tight'>
                            We Build <br />
                            Your <span className='text-green-300'>DREAM</span>
                        </h1>

                        <p className='text-medium text-slate-500'>
                            Unleash your beauty at our salon. Tailored treatments, <br /> expert care—because every woman deserves to feel stunning. <br /> Elevate your confidence and embrace the allure. <br /> Beauty redefined, just for you.
                        </p><br />

                        <Pinkbtn label="Get on Appoinment" />
                    </div>

                    <div className='md:w-[400px]'>
                        <Image
                            src={beautyQueen}
                            alt='Banner image'
                            className='rounded'
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Banner