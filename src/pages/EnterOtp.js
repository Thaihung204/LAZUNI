import loginImage from '../assets/images/img_login.svg';
import { TiArrowLeft } from "react-icons/ti";
import { HeaderAuth } from "/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/HeaderAuth.js";
import { InputField } from "/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/InputField.js";
import React, { useState } from 'react';
import { VerifyEmailServices } from '../services/VerifyEmailServices'; // Import the service
import { useNavigate } from 'react-router-dom';

export const EnterOtp = () => {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleVerify = async (event) => {
        event.preventDefault();
        try {
            const response = await VerifyEmailServices(otp);
            setMessage('Verification successful!'); // Handle successful verification
            console.log(response);
            navigate('/login'); // Change to the desired route after success
        } catch (error) {
            setMessage(error.message); // Display error message
        }
    };

    return (
        <>
            <div className="flex w-auto box-border">
                <div className="w-[845px] h-[1024px]">
                    <img src={loginImage} className="object-cover w-full" alt="Login" />
                </div>
                <div className="ml-[110px] mt-[311px] w-auto">
                    <div className='flex items-center' onClick={() => navigate(-1)}>
                        <TiArrowLeft />
                        <div className='text-[16px] font-normal text-primary ml-[5px]'>Back</div>
                    </div>
                    <HeaderAuth title="Enter OTP" desc="We have shared a code to your registered email address." />
                    <div className="">
                        <form className="w-[445px]" onSubmit={handleVerify}>
                            <div className="mb-1 flex flex-col">
                                <InputField
                                    title="OTP"
                                    type="text"
                                    id="OTP"
                                    content="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="w-full p-[20px] border border-primary bg-primary text-white rounded-lg"
                                >
                                    Verify
                                </button>
                            </div>
                        </form>
                        {message && <p className="mt-2 text-red-600">{message}</p>} {/* Display message */}
                    </div>
                </div>
            </div>
        </>
    );
};
