import Link from 'next/link';
import Footer from '../../components/shared/Footer';
import NavBar from '../../components/shared/Navbar';
import getServices from '../../../helpers/getServices';
import Image from 'next/image';
const Service = async () => {

    const services = await getServices()


    return (
        <main>
            <NavBar />
            <div className='py-20 px-5 lg:px-[200px]'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-6'>Explore Our <span className='text-green-500'>Services</span></h1>
                </div>

                {/* card section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {services?.map((service) => (
                        <Link key={service?._id} href={`/service/${service?._id}`}>
                            <div className='group block rounded-md overflow-hidden hover:shadow-lg relative'>
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
                                    <p className='text-green-500 mb-1'>{service?.price}</p>
                                    <p className='text-gray-500'>{service?.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>

    )
}

export default Service