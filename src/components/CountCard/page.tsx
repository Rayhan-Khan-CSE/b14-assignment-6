"use client"
import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';

const CountCard = () => {
    const {addPlan, saveLater} = useContext(LibraryContext)
    console.log(addPlan,saveLater);
    return (
        <div className="navbar-end gap-6 mr-4">
                <div className='flex gap-3 items-center'>
                    <div>
                        <p>Plan</p>
                    </div>
                    <div className='bg-[#C2F800] py-0.2 px-1.5 rounded-full'>
                        <p className='text-[#000000] font-bold'>{addPlan.length}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>
                        <p>Saved</p>
                    </div>
                    <div className='py-0.2 px-1.5 rounded-full border border-[#D1D5DB]'>
                        <p className='font-bold'>{saveLater.length}</p>
                    </div>
                </div>
            </div>
    );
};

export default CountCard;