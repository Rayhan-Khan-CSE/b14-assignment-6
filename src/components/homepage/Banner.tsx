import React from 'react';
import Image from 'next/image';
import logo2 from "@/assets/banner.png"

const Banner = () => {
    return (
        <div className='flex items-center justify-between mx-6 p-12 my-16 rounded-2xl bg-[#15171D]'>
            <div>
                <h4 className='font-bold text-[#C2F800]'>WORKOUT LIBRARY</h4>
                <h1 className='font-extrabold text-5xl mt-5'>TRAIN WITH INTENT. LOG
                    <br/>EVERY SET.</h1>
                <p className='text-[#9CA3AF] my-5'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
                    into today's plan, and watch the week's work add up.</p>
                <button className='bg-[#C2F800] font-bold text-[#000000] rounded-xl p-3'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={logo2} width={300} height={300} alt='Banner'></Image>
            </div>
        </div>
    );
};

export default Banner;