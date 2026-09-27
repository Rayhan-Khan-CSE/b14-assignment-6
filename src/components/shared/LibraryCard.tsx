import React from 'react';
import Image from 'next/image';
import logo1 from "@/assets/SVG (7).png"
import logo2 from "@/assets/SVG (8).png"
import logo3 from "@/assets/SVG (9).png"
import { ILibrary } from '@/types/library.type';
import Link from 'next/link';
interface ILibraryCardProps {
    library: ILibrary
}

const LibraryCard = ({ library }:ILibraryCardProps) => {
    return (
        <Link href={`/DetailsPage/${library.id}`}>
        <div className="card bg-[#15171D] shadow-sm overflow-hidden">
            <figure className='relative w-full h-75'>
                <Image
                    src={library.image}
                    alt="Shoes"
                    width={500} height={300}
                    sizes='100vw'
                    className='object-cover'
                    />
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
                    <span className='flex items-center gap-2'><Image src={logo1} alt='Img' width={20} height={20}></Image>{library.duration} min</span>
                    <span className='flex items-center gap-2'><Image src={logo2} alt='Img' width={20} height={20}></Image>{library.caloriesBurned} kcal</span>
                   <span className='flex items-center gap-2'> <Image src={logo3} alt='Img' width={20} height={20}></Image>{library.rating}</span>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default LibraryCard;