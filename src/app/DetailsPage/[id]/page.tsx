import { ILibrary } from '@/types/library.type';
import React from 'react';
import Image from 'next/image';
interface IDetailsPage {
    params: Promise<{
        id: string;
    }>;
}
const getLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const DetailsPage = async ({ params }: IDetailsPage) => {
    const { id } = await params;
    const libraryData = await getLibrary();
    const library = libraryData.find((library: ILibrary) => library.id === Number(id)) as ILibrary;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 pt-8 pb-16">
            <figure className='w-full'>
                <Image src={library.image} alt='Details' width={400} height={620} className='w-full h-155 object-cover rounded-xl'></Image>
            </figure>
            
                <div>
                    <h2 className=" font-extrabold text-2xl text-[#ffffff] uppercase">{library.name}</h2>
                    <p className='mt-3 w-full text-lg text-[#9CA3AF]'>{library.description}</p>
                
                <div className="mt-3 flex gap-2">
                    {
                        library.muscleGroups?.map((item, ind) => {
                            return <div key={ind} className='bg-[#C2F800] rounded-full text-[#000000] px-2 py-1 font-bold'>
                                {item.toUpperCase()}
                            </div>
                        })
                    }
                </div>
                <div className='mt-5 overflow-hidden rounded-xl border border-[#272C35] bg-[#171A20]'>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>EQUIPMENT</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.equipment}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>DIFFICULTY</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.difficulty}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>SETS</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.sets}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>REPS</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.reps}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>DURATION</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.duration}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>CALORIES</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.caloriesBurned}</p>
                    </div>
                    <div className='flex h-9 items-center justify-between border-b border-[#272C35] px-4'>
                        <p className='text-lg font-bold text-[#9CA3AF]'>RATING</p>
                        <p className='text-lg text-[#E5E7EB]'>{library.rating}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-lg font-extrabold text-[#FFFFFF]'>INSTRUCTIONS</h2>
                    <ol className='mt-4 space-y-3 mb-4'>
                        {
                            library.instructions.map((ins, ind) => {
                                return <div key={ind} className='flex gap-2 text-[#D1D5DB]'>
                                    <div>{ind+1}.</div>
                                    <div>{ins}</div>
                                </div>
                            })
                        }
                    </ol>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Add to today's plan</button>
                    <button className="btn btn-primary">Save for later</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;