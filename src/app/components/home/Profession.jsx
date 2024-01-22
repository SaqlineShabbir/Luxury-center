import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper'
import Image from 'next/image'
import professionImage from "/public/assets/images/facewasing.png";

const Profession = () => {
    return (
        <main className='bg-slate-100 py-2 md:py-20'>
            <MaxWidthWrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-2'>
                    {/* image section  */}
                    <div>
                        <Image
                            src={professionImage}
                            alt='banner image'
                            width={400}
                            height={400}
                            className='rounded-md grayscale hover:grayscale-0 duration-500 cursor-pointer'
                        />
                    </div>

                    {/* content section  */}
                    <div className='space-y-6 w-full'>
                        <h2 className='text-3xl font-bold text-slate-700'>Let us handle<br /> Design <span className='text-green-300'>Professionally</span></h2>

                        <p className='text-slate-500'>
                            Allow us to be your sanctuary for beauty and wellness, where every detail is meticulously curated to cater to your individual needs. Book your appointment today and embark on a journey to timeless beauty and serenity.
                        </p>

                        <div className='flex justify-start items-center space-x-8'>
                            <div className='flex flex-col'>
                                <span className='text-3xl font-bold text-green-300'>500+</span>
                                <span className='text-sm text-slate-500'>Happy Customer</span>
                            </div>

                            <div className='flex flex-col'>
                                <span className='text-3xl font-bold text-green-300'>16+</span>
                                <span className='text-sm text-slate-500'>Total Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </main >
    )
}

export default Profession