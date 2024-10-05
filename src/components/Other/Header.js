import logoImage from '../../assets/images/logo.png';
import AvatarImage from '../../assets/images/avatar-default.jpg';
import React, { useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../Popup/LogoutModal';
// Import modal component

export const Header = () => {
    const [keyWord, setKeyWord] = useState('');
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false); // State để hiển thị modal

    const navigate = useNavigate();

    const handleLogout = () => {
        setShowLogoutModal(true); // Hiển thị modal khi người dùng nhấn đăng xuất
    };

    const confirmLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    const cancelLogout = () => {
        setShowLogoutModal(false); // Đóng modal nếu người dùng nhấn hủy
    };

    // Check for user data in localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Parse and set the user
        }
    }, []);

    // Handle search submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (keyWord) {
            navigate(`/products?keyword=${keyWord}&page=1`);
        }
        else{
            navigate(`/products?page=1`);
        }
    };

    return (
        <>
            <header className="pb-6 bg-white lg:pb-0 ">
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
                    <form className="search relative w-full max-w-md mx-4 mt-[5px]" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                            value={keyWord}
                            onChange={(e) => setKeyWord(e.target.value)} // Update the keyword state
                        />
                        <button type="submit">
                            <FaSearch className="absolute right-3 top-3 text-gray-500" />
                        </button>
                    </form>

                    {/* Icons */}
                    <div className="flex h-auto items-center space-x-6">
                        <Link to="#">
                            <IoChatboxEllipsesOutline size={24} className="hover:text-stone-600" />
                        </Link>
                        <Link to="/Cart">
                            <IoCartOutline size={24} className="hover:text-stone-600" />
                        </Link>
                        <Link to="#">
                            <FiShoppingBag size={24} className="hover:text-stone-600" />
                        </Link>
                        <Link to="#" className="flex items-center space-x-2">
                            <RiProductHuntLine size={24} className="hover:text-stone-600" />
                            <a className="text-base font-medium">Manage Products</a>
                        </Link>
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
                                            onClick={handleLogout} // Mở modal khi nhấn nút
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

            {/* Hiển thị Modal Logout khi cần */}
            <LogoutModal
                isOpen={showLogoutModal} 
                onClose={cancelLogout} 
                onConfirm={confirmLogout} 
            />
        </>
    );
};
