import Image from "next/image";
import user from "/public/assets/images/user1.png";


const AdminDashBoard = () => {
    return (
        <main>
            <section className='flex justify-center items-center py-4 md:py-32'>
                <div className='w-[400px] h-full rounded-lg shadow p-6 space-y-2 bg-gray-100 cursor-pointer'>
                    <h1 className='text-center text-2xl text-pink-500 font-bold'>Wellcome to Jerin,s Parlour</h1>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={user}
                            alt='user picture'
                            className='w-20 h-20 border-4 border-pink-500 rounded-full hover:grayscale hover:scale-110 duration-500'
                        />
                    </div>

                    <h3 className='text-xl text-center font-semibold'>Sujon Sheikh</h3>
                    <p className='text-slate-500 text-center'>sujonsheikh@gmail.com</p>
                </div>
            </section>
        </main>
    )
}

export default AdminDashBoard