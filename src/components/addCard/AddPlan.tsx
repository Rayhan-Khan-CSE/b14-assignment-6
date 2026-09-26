"use client";
import React, { useContext } from 'react';
import logo1 from "@/assets/SVG (3).png"

import Image from 'next/image';
import { ILibrary } from '@/types/library.type';
import { LibraryContext } from '@/context/LibraryContext';
import { Bounce, toast } from 'react-toastify';

const AddPlan = ({library}:{library:ILibrary}) => {
    const {addPlan, setAddPlan} = useContext(LibraryContext);
    const handleAddPlan = () => {
        setAddPlan([...addPlan,library]);
        toast.success(`${library.name} successfully add to todays plan.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    return (
       <button className="btn bg-[#CCFF00] rounded-xl text-[#0F1115] " onClick={() => handleAddPlan()}><Image src={logo1} alt='button'></Image>Add to today's plan</button> 
    );
};

export default AddPlan;