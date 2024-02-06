
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';


import Pinkbtn from '../shared/Pinkbtn';
import getServices from '../../../helpers/getServices';
import Image from 'next/image';
import Link from 'next/link';
const Services = async () => {
    const services = await getServices()


    return (
        <main className='bg-white py-20'>
            <MaxWidthWrapper>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-center'>Our Awesome <span className='text-green-300 md:text-4xl'>Services</span></h1>
                </div><br /><br />

                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>
                    {services?.slice(-3).map((service) => (
                        <Link key={service?._id} href={`/service/${service?._id}`}>
                            <div className='group block rounded-md overflow-hidden hover:shadow-lg relative border'>
                                <div className='relative w-full h-48'>
                                    <Image
                                        src={service?.photo}
                                        alt='service image'
                                        layout='fill'
                                        objectFit='cover'
                                        className='group-hover:opacity-75 transition-opacity'
                                    />
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                        <span className='text-white text-4xl'>?</span>
                                    </div>
                                </div>
                                <div className='p-4 bg-white'>
                                    <h3 className='text-xl font-semibold mb-2'>{service?.title}</h3>
                                    <p className='text-green-500 mb-1'>$ {service?.price}</p>
                                    <p className='text-gray-500'>{service?.description.slice(0, 170)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div><br /> <br />

                {/* button section  */}
                <div className='flex justify-center items-center'>
                    <Pinkbtn label="Explore more" href="/service" />
                </div>

            </MaxWidthWrapper>
        </main>
    );
};

export default Services;
