
import React from 'react';
import LibraryCard from '../shared/LibraryCard';
import { ILibrary } from '@/types/library.type';

const getLibrary = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const Library = async() => {
    const libraryData = await getLibrary();
    return (
        <div className='mx-6'>
            <h2 className='font-extrabold text-[#FFFFFF] text-2xl'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
            {
                libraryData.map((library:ILibrary, ind:number) => {
                    return <LibraryCard key={ind} library={library}/>;
                })
            }
            </div>
        </div>
    );
};

export default Library;