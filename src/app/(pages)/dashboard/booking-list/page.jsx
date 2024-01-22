import staticServices from "@/app/lib/StaticServices"
import Image from "next/image"

const page = () => {
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <div className='bg-green-50 w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4 rounded shadow'>
                        {
                            staticServices.map((selectService) => (
                                <div className="bg-white p-6 rounded-lg space-y-4 shadow">
                                    <div className="flex justify-between items-center">
                                        <Image
                                            src={selectService.image}
                                            alt="service icon"
                                            className="w-16 h-16"
                                        />

                                        <button className="px-4 py-2 rounded bg-green-100 text-pink-500">Pending</button>
                                    </div>

                                    <h2 className="text-xl text-slate-700 font-bold">{selectService.title}</h2>
                                    <p className="text-slate-500 text-sm">{selectService.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default page