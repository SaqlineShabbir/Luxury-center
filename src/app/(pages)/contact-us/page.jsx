import Footer from '@/app/components/shared/Footer';
import NavBar from '@/app/components/shared/Navbar';
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';
import { MdOutlineMarkEmailRead, MdLocationCity } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';

const ContactUs = () => {
    const contactMethods = [
        {
            icon: <MdOutlineMarkEmailRead className="w-20 h-20 text-blue-500 mb-2" />,
            label: 'Email',
            value: 'sujonsheikh.dev@gmail.com',
        },
        {
            icon: <FaPhoneVolume className="w-20 h-20 text-green-500 mb-2" />,
            label: 'Phone',
            value: '+880 1999-986919',
        },
        {
            icon: <MdLocationCity className="w-20 h-20 text-red-500 mb-2" />,
            label: 'Location',
            value: 'Magura, Bangladesh',
        },
    ];

    return (
        <main className="bg-green-50">
            <NavBar />
            <MaxWidthWrapper>
                <div className="container mx-auto my-10 p-8 bg-white shadow rounded-lg text-center">
                    <h1 className="text-3xl text-center font-bold mb-6 md:mb-20 text-slate-500">Contact with Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center space-y-2'
                            >
                                {method.icon}
                                <p className='text-xl font-semibold text-slate-500'>{method.label}</p>
                                <p className="text-gray-600">{method.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 md:mt-12">
                        <p className="text-2xl font-bold mb-2 text-slate-700">Office Hours</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </main>
    );
};

export default ContactUs;
