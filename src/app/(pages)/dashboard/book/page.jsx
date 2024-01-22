import { Radio, RadioGroup } from '@nextui-org/react'
import Image from 'next/image'
import card from "/public/assets/icons/card.png";
import paypal from "/public/assets/icons/paypal.png";
import Pinkbtn from '@/app/components/Pinkbtn';


const Book = () => {
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form className='bg-green-50 w-[500px] p-10 shadow space-y-4 rounded'>
                        <input type="text" placeholder='Enter user card name' className='rounded-md py-2 px-2 border w-full' />

                        <input type="email" placeholder='Enter user mail address' className='rounded-md py-2 px-2 border w-full' />

                        <input type="text" placeholder='Enter service title name' className='rounded-md py-2 px-2 border w-full' />
                        <br /><br />
                        <span className='text-slate-500'>Pay with</span>

                        {/* payment icon  */}
                        <div>
                            <RadioGroup
                                orientation="horizontal"
                            >

                                {/* card  */}
                                <div className='flex justify-start items-center space-x-6'>
                                    <Radio className='flex' value="card">
                                        <div className='flex justify-start items-center space-x-2'>
                                            <Image
                                                src={card}
                                                alt='card icon'
                                                className='w-7'
                                            />
                                            <span>Creadit Card</span>
                                        </div>
                                    </Radio>



                                    {/* paypal  */}
                                    <Radio className='flex' value="paypal">
                                        <div className='flex justify-start items-center space-x-2'>
                                            <Image
                                                src={paypal}
                                                alt='paypal icon'
                                                className='w-7'
                                            />
                                            <span>Paypal</span>
                                        </div>
                                    </Radio>
                                </div>
                            </RadioGroup>
                        </div>

                        <input type="number" placeholder='Enter card number' className='rounded-md py-2 px-2 border w-full' />

                        <div className='flex items-center space-x-2'>
                            <input type="date" placeholder='MM/YY' className='rounded-md py-2 px-2 border' />

                            <input type="text" placeholder='CVC' className='rounded-md py-2 px-2 border w-full' />
                        </div>

                        <div className='flex justify-between items-center py-2'>
                            <p className='text-sm md:text-medium text-cyan-500'>Service charged will be $100</p>

                            <Pinkbtn label="Pay" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Book