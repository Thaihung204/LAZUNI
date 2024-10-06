import logoImage from '/PROJECT_SWP/SV_MARKET-FE/sv_market/src/assets/images/logo.png';
import AvatarImage from '/PROJECT_SWP/SV_MARKET-FE/sv_market/src/assets/images/avatar-default.jpg';
import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
export const Header = () => {
    // const mockUser = {
    //     userName: 'John Doe',
    //     email: 'john.doe@example.com',
    //     profilePicture: ''  // Use a placeholder image URL for testing
    // };
    // localStorage.setItem('user', JSON.stringify(mockUser));
    // localStorage.removeItem('user')

    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);    
    const handleLogout = () => {
      
        localStorage.removeItem('user')
        
   
        window.location.href = '/login';
    };

    // Check for user data in localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse and set the user
        }
    }, []);

    return (
        <>
            <header className="pb-6 bg-white lg:pb-0">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between items-center mt-[10px]">
                    {/* Logo */}
                    <div className="flex-shrink-0 mr-2">
                        <a href="/" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src={logoImage} alt="Logo" />
                        </a>
                    </div>

                    {/* Category Dropdown */}
                    <div className="flex items-center">
                        <div><CiMenuBurger /></div>
                        <select className="px-4 py-2 rounded-md focus:outline-none focus:border-primary">

                            <option value="">Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="books">Books</option>
                            <option value="clothing">Clothing</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>

                    {/* Search Bar with Icon */}
                    <div className="search relative w-full max-w-md mx-4 mt-[5px]">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-500" />
                    </div>

                    {/* Icons */}
                    <div className="flex h-auto items-center space-x-6">

                        <a href="#">
                            <IoChatboxEllipsesOutline size={24} className="hover:text-stone-600" />
                        </a>
                        <a href="#">
                            <IoCartOutline size={24} className="hover:text-stone-600" />
                        </a>
                        <a href="#">
                            <FiShoppingBag size={24} className="hover:text-stone-600" />
                        </a>
                        <a href="#" className="flex items-center space-x-2">
                            <RiProductHuntLine size={24} className="hover:text-stone-600" />
                            <a className="text-base font-medium">Manage Products</a>
                        </a>
                    </div>

                    {/* Profile or Login */}
                    <div className='ml-[15px]'>
                        {user ? (
                            <div className="relative">
                                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src={user.profilePicture || AvatarImage}  // Fallback image if profilePicture doesn't exist
                                        alt="Profile"
                                    />
                                    <span className="text-base font-medium text-black">{user.userName}</span>
                                </div>

                                {/* Dropdown Menu */}
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</a>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                href="/login"
                                className="px-6 py-2 text-base font-medium text-white bg-primary border border-primary rounded-lg hover:bg-slate-500"
                            >
                                Login
                            </a>
                        )}
                    </div>

                </div>
            </header>
        </>
    );
};
