import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import AvatarImage from '/PROJECT_SWP/SV_MARKET-FE/sv_market/src/assets/images/avatar-default.jpg';
import ChangeAvatarServices from '../services/ChangeAvatarServices'; // Import the service
import { FaEdit } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
import { InputField } from './Authenfication/InputField';
export const ProfileInfor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [PhoneNum, setPhoneNum] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(AvatarImage);
    const [selectedFile, setSelectedFile] = useState(null); // Store the selected file

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setImage(parsedUser.profilePicture || AvatarImage);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setSelectedFile(file); // Store the file to send later
        }
    };

    const triggerFileInput = () => {
        document.getElementById('image-upload').click();
    };

    // Function to upload the selected image
    const uploadImage = async () => {
        if (!selectedFile) {
            alert("Please select an image first");
            return;
        }

        try {
            // Use the service to upload the avatar
            const response = await ChangeAvatarServices.uploadAvatar(selectedFile);
            console.log('Avatar uploaded successfully:', response);

            // Optionally, update the user's profile picture in localStorage
            const updatedUser = { ...user, profilePicture: response.avatarUrl };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
        } catch (error) {
            console.error('Error uploading avatar:', error);
        }
    };

    return (
        <>
            <form  className='mx-auto ml-[30px] mr-[50px] '>
                <div className='flex justify-between '>
                <div>
                    <a
                        href="#"
                        title="User Profile"
                        className="flex  space-x-2 relative"
                    >
                        <img
                            className="w-[100px] h-[100px] rounded-full object-cover cursor-pointer "
                            src={image}
                            alt="Profile"
                            onClick={triggerFileInput}
                        />
                        <FaEdit className='absolute top-[60px]  left-[60px]   text-[20px]' />

                    </a>

                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />

                </div>
                <div>
                    <button className='flex items-center bg-primary text-white p-4 rounded-lg w-[135px] mt-[15px]'>
                        <LuFileEdit />
                        <div className='ml-[10px]'>Save Edit </div>
                    </button>
                </div>

                </div>
                
                <div className='mt-[20px]'>
                    <div className='flex '>
                        <div className='mr-[50px] w-1/2'>
                        <InputField
                            title="First Name"
                            type="text"
                            id="FirstName"
                            content="Robert"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                           
                        />
                        </div>
                        <div className='w-1/2'>
                        <InputField
                            title="Last Name"
                            type="text"
                            id="LastName"
                            content="Fox"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        </div>

                       

                    </div>
                    <div className='flex '>
                        <div className='mr-[50px] w-1/2'>
                        <InputField
                            title="PhoneNum"
                            type="text"
                            id="PhoneNum"
                            content="092101022"
                            value={PhoneNum}
                            onChange={(e) => setFirstName(e.target.value)}
                           
                        />
                        </div>
                     <div className='w-1/2'>
                    <InputField 
                                    title="Address"
                                    type="text"
                                    id="Adress"
                                    content="75 Nguyen Van An, Hoan Dieu Street"
                                    value={Address}
                                    onChange={(e) => setEmail(e.target.value)} // Capture email input
                                />

                    </div>
                        

                       

                    </div>
                    


                </div>
            </form>




        </>
    );
};
