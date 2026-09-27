"use client";
import { ILibrary } from '@/types/library.type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface ILibraryContext {
    addPlan: ILibrary[];
    setAddPlan: Dispatch<SetStateAction<ILibrary[]>>;
    saveLater: ILibrary[];
    setSaveLater: Dispatch<SetStateAction<ILibrary[]>>;
    id: number[];
    setId: Dispatch<SetStateAction<number[]>>;
}
export const LibraryContext = createContext<ILibraryContext>({}as ILibraryContext);

const LibraryProvider = ({children}:{children:ReactNode}) => {
    const [addPlan, setAddPlan] = useState<ILibrary[]>([]);
    const [saveLater, setSaveLater] = useState<ILibrary[]>([]);
    const [id, setId] = useState<number[]>([]);
    
    return (
    <LibraryContext.Provider value={{
        addPlan,
        setAddPlan,
        saveLater,
        setSaveLater,
        id,
        setId,
    }}> {children} </LibraryContext.Provider>
);
};

export default LibraryProvider;