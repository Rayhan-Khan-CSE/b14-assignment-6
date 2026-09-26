"use client"
import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';

const MyPlan = () => {
    const { addPlan, saveLater } = useContext(LibraryContext)
    console.log(addPlan, saveLater);
    return (
        <div>
            <section className='m-5'>
                <h2 className='font-bold text-2xl text-[#FFFFFF]'>MY PLAN</h2>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </section>
            <section className='grid grid-cols-3 items-start mx-5 bg-base-200 p-4 rounded-xl '>
                <div className='border-r border-[#8A92A0]'>
                    <p className='text-[#8A92A0] text-sm'>Exercises</p>
                    <p className='text-2xl text-[#CCFF00] font-extrabold'>2</p>
                </div>
                <div className='border-r border-[#8A92A0]'>
                    <p className='ml-5 text-[#8A92A0] text-sm'>Minutes</p>
                    <p className='ml-5 text-[#FFFFFF] text-2xl font-extrabold'>23</p>
                </div>
                <div>
                    <p className='ml-5 text-[#8A92A0] text-sm'>Calories</p>
                    <p className='ml-5 text-[#FFFFFF] text-2xl font-extrabold'>190</p>
                </div>
            </section>
            <section className="m-5">
                <div className="flex items-center justify-between">
                    <div className="flex bg-[#15171D] border border-[#272C35] rounded-xl p-1">
                        <button
                            className="px-5 py-2 rounded-lg text-sm text-[#8A92A0]"
                        >
                        Today's Plan
                        </button>
                        <button
                            className="px-7 py-2 rounded-lg bg-[#252A33] text-white text-sm font-bold"
                        >
                        Saved
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-[#8A92A0]">
                        Sort By
                        </span>
                        <select
                            className="bg-[#15171D] border border-[#272C35] text-[#E5E7EB] 
                             rounded-lg px-3 py-2 text-sm outline-none"
                            defaultValue="duration">
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 min-h-62.5 border border-dashed border-[#272C35] 
                    rounded-xl flex flex-col items-center justify-center">
                    <h2 className="text-white font-extrabold text-lg">
                        NOTHING HERE YET
                    </h2>
                    <p className="text-[#8A92A0] text-sm mt-2">
                        Browse the library and add a lift to get today moving.
                    </p>
                    <button
                        className="mt-5 bg-[#C2F800] text-black font-bold 
                        px-6 py-2 rounded-full text-sm">
                    Go to workouts
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MyPlan;