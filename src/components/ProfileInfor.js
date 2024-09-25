import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import AvatarImage from '/PROJECT_SWP/SV_MARKET-FE/sv_market/src/assets/images/avatar-default.jpg';
import { ChangeInformationService, ChangeInformationServices } from '../services/ChangeInformationServices'; // Import the service
import { InputField } from '../components/Authenfication/InputField';
import '../assets/css/style.css';

export const ProfileInfor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(AvatarImage);
    const [selectedFile, setSelectedFile] = useState(null); // Store the selected file
    const [isEditMode, setIsEditMode] = useState(false); // Add state to control edit mode

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            // Split userName into firstName and lastName based on spaces
            const nameParts = parsedUser.userName.split(' ');
            const firstNameValue = nameParts[0];
            const lastNameValue = nameParts.slice(1).join(' '); // Join the remaining parts as last name

            setUser(parsedUser);
            setImage(parsedUser.profilePicture || AvatarImage);
            setFirstName(firstNameValue || '');
            setLastName(lastNameValue || '');
            setPhoneNum(parsedUser.phoneNum || '');
            setAddress(parsedUser.address || '');
            setEmail(parsedUser.email || '');
        }
    }, []);

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImage(URL.createObjectURL(file)); // Preview the image
        }
    };

    // Trigger file input when image clicked
    const triggerFileInput = () => {
        document.getElementById('image-upload').click();
    };

    // Handle profile update
    const updateProfile = async () => {
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phoneNum', phoneNum);
        formData.append('address', address);
        formData.append('email', email);
        if (selectedFile) {
            formData.append('profilePicture', selectedFile); // Include the file if it was changed
        }

        try {
            const response = await ChangeInformationService(formData); // Update user profile
            console.log('Profile updated successfully', response);
            // Optionally, refresh user data in localStorage if needed
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <>
            <form className='mx-auto ml-[30px] mr-[50px]' onSubmit={(e) => e.preventDefault()}>
                <div className='flex justify-between'>
                    <div>
                        <a
                            href="#"
                            title="User Profile"
                            className="flex space-x-2 relative"
                        >
                            <img
                                className="w-[100px] h-[100px] rounded-full object-cover cursor-pointer"
                                src={image}
                                alt="Profile"
                                onClick={triggerFileInput}
                            />
                            <FaEdit className='absolute top-[60px] left-[60px] text-[20px]' />
                        </a>

                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                    <div className='flex items-center'>
                        <div className='font-[700px] text-[18px]'>
                            Enable edit
                        </div>
                        <label className="switch ml-5">
                            <input type="checkbox"
                                checked={isEditMode}
                                onChange={(e) => setIsEditMode(e.target.checked)} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div className='mt-[20px]'>
                    <div className='flex'>
                        <div className='mr-[50px] w-1/2'>
                            <InputField
                                title="First Name"
                                type="text"
                                id="FirstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                readOnly={!isEditMode} // Disable editing when not in edit mode
                            />
                        </div>
                        <div className='w-1/2'>
                            <InputField
                                title="Last Name"
                                type="text"
                                id="LastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                readOnly={!isEditMode} // Disable editing when not in edit mode
                            />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-[50px] w-1/2'>
                            <InputField
                                title="Phone Number"
                                type="number"
                                id="PhoneNum"
                                value={phoneNum}
                                onChange={(e) => setPhoneNum(e.target.value)}
                                readOnly={!isEditMode} // Disable editing when not in edit mode
                            />
                        </div>
                        <div className='w-1/2'>
                            <InputField
                                readOnly={true} // Always read-only for email
                                title="Email Address"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-full'>
                            <InputField
                                title="Address"
                                type="text"
                                id="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                readOnly={!isEditMode} // Disable editing when not in edit mode
                            />
                        </div>
                    </div>
                </div>
                {isEditMode && (
                    <div>
                        <button
                            className='flex items-center bg-primary text-white p-4 rounded-lg w-[135px] mt-[15px]'
                            onClick={updateProfile} // Call the new updateProfile function
                        >
                            <LuFileEdit />
                            <div className='ml-[10px]'>
                                Save Edit
                            </div>
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};
