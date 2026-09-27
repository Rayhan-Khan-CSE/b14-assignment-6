import React from 'react';
import Link from 'next/link';

const notfound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold text-white'>404</h1>
            <p className='text-2xl mt-4'>Page Not Found</p>
            <Link href="/" className='mt-5 text-black px-4 py-4 rounded-xl font-bold bg-[#C2F800]'>
            Back Home
            </Link>
        </div>
    );
};

export default notfound;