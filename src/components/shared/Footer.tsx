import React from 'react';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import logo2 from "@/assets/Copyright Notice.png"

const Footer = () => {
    return (
        <footer className="border-t border-[#27282D] bg-base-100 shadow-sm flex justify-between px-5 py-6 mt-4 items-center">
            <div className='flex items-center gap-2'>
                <div><Image src={logo} alt='Icon'width={20} height={20}></Image></div>
                <div><p>FITLOG</p></div>
            </div>
            <div>
                <Image src={logo2} alt='Icon'></Image>
            </div>
        </footer>
    );
};

export default Footer;