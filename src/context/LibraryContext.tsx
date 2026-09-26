"use client";
import { ILibrary } from '@/types/library.type';
import React, { createContext, ReactNode, useState } from 'react';
export const LibraryContext = createContext({});

const LibraryProvider = ({children}:{children:ReactNode}) => {
    const [addPlan, setAddPlan] = useState<ILibrary[]>([]);
    const [saveLater, setSaveLater] = useState<ILibrary[]>([]);
    
    return (
    <LibraryContext.Provider value={{
        addPlan,
        setAddPlan,
        saveLater,
        setSaveLater,
    }}> {children} </LibraryContext.Provider>
);
};

export default LibraryProvider;