import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex items-center justify-between px-3 py-2 bg-[#05001c] text-white shadow-md">

            <nav className='desktop hidden md:flex gap-8'>
                <ul>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-gray-400"
                    }> <li>Home</li></NavLink>
                    <NavLink to='/favourite' className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-gray-400"
                    }>  <li>Favourites</li></NavLink>
                    <NavLink to='/about' className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-gray-400"
                    }><li>About</li></NavLink>
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-gray-400"
                    }><li>Contact us</li></NavLink>
                </ul>
            </nav>
            <div className="search hidden md:block"><input type="text" placeholder='Search' className='border-2 rounded-md px-2 py-1' /></div>
            <button className='md:hidden' onClick={() => setIsOpen(true)}><Menu size={28} /></button>
            {isOpen && (<div className='fixed inset-0 backdrop-blur-lg z-50' onClick={() => setIsOpen(false)}> </div>)}
            <div className={`fixed top-0 left-0 h-full w-70 bg-[#05001c] text-white p-1 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className='mb-6' onClick={() => setIsOpen(false)}><X size={28} /></button>
                <nav className='flex flex-col gap-6'>
                    <NavLink to='/' onClick={() => { setIsOpen(false) }} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-gray-400"
                    }> Home</NavLink>
                    <NavLink to='/favourite' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-shadow-gray-400"
                    }>Favourites</NavLink>
                    <NavLink to='/about' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-shadow-gray-400"
                    }>About</NavLink>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                        isActive ? "font-bold text-yellow-400" : "hover:text-shadow-gray-400"
                    }>Contact us</NavLink>

                </nav>
            </div>
        </div>
    )
}

export default Navbar
