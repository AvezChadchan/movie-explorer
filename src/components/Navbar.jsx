import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="flex items-center justify-around px-4 py-2 ">
            <nav>
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
            <div className="search "><input type="text" placeholder='Search' className='border-2 rounded-md px-2 py-1' /></div>
        </div>
    )
}

export default Navbar
