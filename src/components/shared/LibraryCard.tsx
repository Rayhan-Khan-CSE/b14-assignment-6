import React from 'react';
import Image from 'next/image';
import logo1 from "@/assets/SVG.png"
import logo2 from "@/assets/SVG (1).png"
import logo3 from "@/assets/SVG (2).png"
import { ILibrary } from '@/types/library.type';
import Link from 'next/link';
interface ILibraryCardProps {
    library: ILibrary
}

const LibraryCard = ({ library }:ILibraryCardProps) => {
    return (
        <Link href={`/DetailsPage/${library.id}`}>
        <div className="card bg-[#15171D] shadow-sm overflow-hidden">
            <figure className='w-full'>
                <Image
                    src={library.image}
                    alt="Shoes" width={500} height={300} className='w-full h-[300] object-full' />
            </figure>
            <div className="card-body p-4">
                <div className="card-actions">
                    <div className="flex flex-wrap gap-2">
                        {
                            library.muscleGroups?.map((item, ind) =>{
                                return <div key={ind} className='bg-[#C2F800] rounded-full text-[#000000] p-2 font-bold'>
                                    {item.toUpperCase()}
                                </div> 
                            })
                        }
                    </div>
                </div>
                <h2 className="card-title uppercase text-[#FFFFFF] text-2xl">
                    {library.name}
                </h2>
                <p className='text-[#9CA3AF]'>{library.equipment}</p>
                <div className="divider"></div>
                <div className='flex gap-4'>
                    <Image src={logo1} alt='Duration'></Image>{library.duration} min
                    <Image src={logo2} alt='Duration'></Image>{library.caloriesBurned} kcal
                    <Image src={logo3} alt='Duration'></Image>{library.rating}
                </div>
            </div>
        </div>
        </Link>
    );
};

export default LibraryCard;