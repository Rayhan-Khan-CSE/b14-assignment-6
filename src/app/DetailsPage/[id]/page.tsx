import { ILibrary } from '@/types/library.type';
import React from 'react';
import Image from 'next/image';
interface IDetailsPage {
    params: Promise<{
        id: string;
    }>;
}
const getLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const DetailsPage = async ({ params }: IDetailsPage) => {
    const { id } = await params;
    const libraryData = await getLibrary();
    const library = libraryData.find((library: ILibrary) => library.id === Number(id)) as ILibrary;
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <Image src={library.image} alt='Details' width={500} height={500}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;