import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const links = <>
        <li className='text-[#C2F800] font-bold bg-[#1A2312] rounded-full'><Link href="/">Workouts</Link></li>
        <li className='text-[#9CA3AF] font-bold'><a>My Plan</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm border-b border-[#27282D]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><Image src={logo} width={20} height={20} alt='Fit Log'></Image> FITLOG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-6 mr-4">
                <div className='flex gap-3 items-center'>
                    <div>
                        <p>Plan</p>
                    </div>
                    <div className='bg-[#C2F800] py-0.2 px-1.5 rounded-full'>
                        <p className='text-[#000000] font-bold'>0</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div>
                        <p>Saved</p>
                    </div>
                    <div className='py-0.2 px-1.5 rounded-full border border-[#D1D5DB]'>
                        <p className='font-bold'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;