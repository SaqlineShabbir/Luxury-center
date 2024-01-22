import Pinkbtn from '@/app/components/Pinkbtn';
import React from 'react'

const MakeAdmin = () => {
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form className='bg-pink-50 w-[500px] p-10 shadow space-y-4 rounded'>

                        <div>
                            <label className='text-lg text-slate-500'>Email</label>
                            <input type="text" placeholder='someone@gmail.com' className='rounded-md py-2 px-2 border w-full' />
                        </div>


                        <Pinkbtn label="Submit" />
                    </form>
                </div>
            </section>
        </main>
    )
}
export default MakeAdmin;