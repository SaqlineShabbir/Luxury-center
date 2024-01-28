'use client'

import { useEffect } from 'react';
import { GrPowerReset } from "react-icons/gr";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className='flex justify-center items-center h-screen'>
            <div className='w-[500px] my-4 md:my-20'>
                <h2 className='text-red-500 text-center text-xl md:text-4xl font-bold'>⚠ Something went wrong!</h2>

                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center space-x-2 bg-red-500 text-slate-100 py-2 px-6 rounded-md w-60 cursor-pointer my-6 text-center'>
                        <GrPowerReset className='w-8 h-8' />
                        <button
                            className='text-lg'
                            onClick={
                                () => reset()
                            }
                        >
                            Try again
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}