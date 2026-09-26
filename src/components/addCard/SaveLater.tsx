"use client";
import React, { useContext } from 'react';
import logo2 from "@/assets/SVG (4).png"

import Image from 'next/image';
import { ILibrary } from '@/types/library.type';
import { LibraryContext } from '@/context/LibraryContext';
import { Bounce, toast } from 'react-toastify';

const SaveLater = ({library}:{library:ILibrary}) => {
    const {saveLater, setSaveLater} = useContext(LibraryContext);
    const handleAddPlan = () => {
        setSaveLater([...saveLater,library]);
        toast.success(`${library.name} successfully add to save for later.`, {
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
       <button className="btn  rounded-xl text-[#E5E7EB] " onClick={() => handleAddPlan()}><Image src={logo2} alt='button'></Image>Save for later</button> 
    );
};

export default SaveLater;