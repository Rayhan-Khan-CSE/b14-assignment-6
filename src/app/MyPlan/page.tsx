"use client"
import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bounce, toast } from 'react-toastify';
import logo from "@/assets/SVG (6).png"
import { FcCheckmark } from 'react-icons/fc';
import logo1 from "@/assets/SVG (7).png"
import logo2 from "@/assets/SVG (8).png"
import logo3 from "@/assets/SVG (9).png"


const MyPlan = () => {
    const { addPlan, saveLater, setAddPlan, setSaveLater,id, setId } = useContext(LibraryContext);
    const [active, setActive] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState('duration');
    const presentCards = active === "plan" ? addPlan : saveLater;
    const designCards = [...presentCards].sort((x,y)=>{
        if(sortBy === 'duration'){
            return x.duration - y.duration;
        }
        if(sortBy === 'calories'){
            return x.caloriesBurned - y.caloriesBurned;
        }
        if(sortBy === 'rating'){
            return Number(x.rating) - Number(y.rating);
        }
        if(sortBy === 'name'){
            return x.name.localeCompare(y.name);
        }
        return 0;
    });
    const totalExercise = presentCards.length;
    const totalMinutes = presentCards.reduce((total, item) => total + item.duration,0);
    const totalCalories = presentCards.reduce((total, item) => total + item.caloriesBurned,0);

    return (
        <div>
            <section className='m-5 max-w-300 mx-auto pl-3'>
                <h2 className='font-bold text-2xl text-[#FFFFFF]'>MY PLAN</h2>
                <p className='text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </section>
            <section className='max-w-300 mx-auto grid grid-cols-3 items-start bg-base-200 p-4 rounded-xl '>
                <div className='border-r border-[#8A92A0]'>
                    <p className='text-[#8A92A0] text-sm'>Exercises</p>
                    <p className='text-2xl text-[#CCFF00] font-extrabold'>{totalExercise}</p>
                </div>
                <div className='border-r border-[#8A92A0]'>
                    <p className='ml-5 text-[#8A92A0] text-sm'>Minutes</p>
                    <p className='ml-5 text-[#FFFFFF] text-2xl font-extrabold'>{totalMinutes}</p>
                </div>
                <div>
                    <p className='ml-5 text-[#8A92A0] text-sm'>Calories</p>
                    <p className='ml-5 text-[#FFFFFF] text-2xl font-extrabold'>{totalCalories}</p>
                </div>
            </section>
            <section className="m-5 max-w-300 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex bg-[#15171D] border border-[#272C35] rounded-xl p-1">
                        <button
                            onClick={() => setActive("plan")}
                            className={`px-5 py-2 rounded-xl text-sm ${active === "plan" ? "bg-[#252A33] text-[#FFFFFF] font-bold" : "text-[#8A92A0]"}`}
                        >
                        {"Today's Plan"}
                        </button>
                        <button
                            onClick={() => setActive("saved")}
                            className={`px-6 py-2 rounded-xl text-sm ${active === "saved" ? "bg-[#252A33] text-[#FFFFFF] font-bold" : "text-[#8A92A0]"}`}
                        >
                        Saved
                        </button>
                    </div>


                    <div className="flex items-center gap-2">
                        <span className="text-sm text-[#8A92A0]">
                        Sort By
                        </span>
                        <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}
                            className="bg-[#15171D] border border-[#272C35] text-[#E5E7EB] 
                             rounded-lg px-3 py-2 text-sm outline-none">
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>

                <div className='mt-5 space-y-3'>
                    { designCards.length === 0 ? 
                    (
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
                    )
                    : (designCards.map((library) => (
                        <div key={library.id} className=' flex-col lg:flex-row border border-[#272C35] bg-[#15171D] rounded-xl p-3 flex justify-between items-center'>
                            <div className='flex items-center gap-4 '>
                                <Image src={library.image} alt='Image'width={30} height={20} className='w-30 h-20 object-cover rounded-xl'></Image>
                                <div>
                                    <h2 className='text-[#FFFFFF] font-extrabold uppercase'>{library.name}</h2>
                                    <p className='text-[#8A92A0]'>{library.equipment}</p>
                                    <div className='flex gap-3 mt-2 text-sm text-[#D1D5DB]'>
                                        <span className='flex items-center gap-2'><Image src={logo1} alt='Img' width={10} height={10}></Image>{library.duration} min</span>
                                        <span className='flex items-center gap-2'><Image src={logo2} alt='Img' width={10} height={10}></Image>{library.caloriesBurned}</span>
                                        <span className='flex items-center gap-2'><Image src={logo3} alt='Img' width={10} height={10}></Image>{library.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 my-6 lg:my-0'>

                                <Link href={`/DetailsPage/${library.id}`} className='border border-[#39404D] text-[#E5E7EB] px-4 py-2 rounded-full text-sm'>
                                    View Details
                                </Link>
                                {
                                    active==="plan" && (
                                        <button 
                                        onClick={()=>{
                                            if(!id.includes(library.id)){
                                            setId([...id, library.id]);
                                            toast.success(`${library.name} marked as done.`, {
                                                    position: "bottom-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                    transition: Bounce,
                                                    });}
                                        }} className='flex gap-2 items-center bg-[#C2F800] text-black px-4 py-2 rounded-full text-sm font-bold'
                                        >
                                            <FcCheckmark />{id.includes(library.id) ? "Done" : "Mark as Done"}
                                        </button>
                                    )
                                }
                                <button onClick={()=>{
                                    setId(id.filter(newId => newId !== library.id));
                                    if (active === "plan"){
                                        setAddPlan(addPlan.filter((item) => item.id !== library.id));
                                    }
                                    else {
                                        setSaveLater(saveLater.filter((item) => item.id !== library.id));
                                    }
                                }} className='text-[#8A92A0] text-xl px-2 hover:text-[#FFFFFF]'>
                                    <Image src={logo} alt='Image' width={30} height={30}></Image>
                                </button>
                            </div>
                        </div>
                    )))}
                </div>
               
            </section>
        </div>
    );
};

export default MyPlan;