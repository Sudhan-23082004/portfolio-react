import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between sticky top-0 px-10 py-3 bg-[#2f2fa2] rounded-xl ml-2 mr-2 mb-2 mt-2">
        <a className="text-xl text-white font-Acme" href="#">Sudhan R</a>
        <nav className="hidden md:block">
            <ul className="flex text-white gap-6 font-semibold">
                <li class="font-another-font text-sm rounded-2xl px-5 py-1 bg-[#8d8741] hover:bg-gray-400 transition-all duration-500 ease-in-out"><a href="/">Home</a></li>
                <li class="font-another-font text-sm rounded-2xl px-5 py-1 bg-[#8d8741] hover:bg-gray-400 transition-all duration-500 ease-in-out"><a href="/#about">About</a></li>
                <li class="font-another-font text-sm rounded-2xl px-5 py-1 bg-[#8d8741] hover:bg-gray-400 transition-all duration-500 ease-in-out"><a href="/#projects">Projects</a></li>
                <li class="font-another-font text-sm rounded-2xl px-5 py-1 bg-[#8d8741] hover:bg-gray-400 transition-all duration-500 ease-in-out"><a href="/#resume">Resume</a></li>
                <li class="font-another-font text-sm rounded-2xl px-5 py-1 bg-[#8d8741] hover:bg-gray-400 transition-all duration-500 ease-in-out"><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col  text-white  mobile-nav">
                <li class="font-another-font font-semibold flex justify-center items-center bg-[#8d8741] transition-all duration-500 ease-in-out"><a href="#">Home</a></li>
                <li class="font-another-font font-semibold flex justify-center items-center bg-[#8d8741] transition-all duration-500 ease-in-out"><a href="#about">About</a></li>
                <li class="font-another-font font-semibold flex justify-center items-center bg-[#8d8741] transition-all duration-500 ease-in-out"><a href="#projects">Projects</a></li>
                <li class="font-another-font font-semibold flex justify-center items-center bg-[#8d8741] transition-all duration-500 ease-in-out"><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
    </header>
}