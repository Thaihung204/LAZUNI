import React, { useEffect, useState } from 'react';
import { CiUser, CiHeart } from "react-icons/ci";
import { GrUpgrade } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import AvatarImage from '/Users/mb/Desktop/Java/LAZUNI/src/assets/images/avatar-default.jpg';

export const Sider = ({ activeSection, onToggleProfileInfo, onToggleChangePassword }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="border border-b-2 items-center">
      <a href="#" title="User Profile" className="flex ml-[30px] mr-[50px] my-[20px] space-x-2 items-center">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={user?.profilePicture || AvatarImage}
          alt="Profile"
        />
        <strong className="text-base font-[700px] text-primary">{user?.userName || 'Guest'}</strong>
      </a>

      <div 
        className={`hover:bg-primary  hover:text-white p-4 font-medium ${activeSection === 'profileInfo' ? 'bg-primary text-white' : ''}`} 
        onClick={onToggleProfileInfo}
      >
        <a href="#" className='flex items-center'>
          <div className='mr-[10px]'><CiUser /></div>
          <h2>Personal Information</h2>
        </a>
      </div>

      <div 
        className={`hover:bg-primary hover:text-white p-4 font-medium ${activeSection === 'changePassword' ? 'bg-primary text-white' : ''}`} 
        onClick={onToggleChangePassword}
      >
        <a href="#" className='flex items-center'>
          <div className='mr-[10px]'><IoSettingsOutline /></div>
          <h2>Change Password</h2>
        </a>
      </div>

      <div className='hover:bg-primary hover:text-white p-4 font-medium'>
        <a href="" className='flex items-center'>
          <div className='mr-[10px]'><GrUpgrade /></div>
          <h2>Upgrade Account</h2>
        </a>
      </div>
 
      <div className='hover:bg-primary  hover:text-white p-4 font-medium'>
        <a href="" className='flex items-center'>
          <div className='mr-[10px]'><CiHeart /></div>
          <h2>My Wishlists</h2>
        </a>
      </div>
    </div>
  );
};
