import { HeaderAuth } from '../components/Authenfication/HeaderAuth';
import { InputField } from '../components/Authenfication/InputField';
import loginImage from '../assets/images/img_login.svg';
import { TiArrowLeft } from "react-icons/ti";   
import React, { useState } from 'react';  
import { ForgetPasswordServices } from '../services/ForgetPasswordServices';
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use navigate from React Router

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const { otpData } = await ForgetPasswordServices(email); // Call the forget password service
            
            localStorage.setItem('email', email);// Store email
            sessionStorage.setItem('otp', otpData);
            // Store OTP response

            // Navigate to EnterOtp and pass the `/NewPassword` link
            navigate('/enterOtp', { state: { link: '/NewPassword' } });
        } catch (err) {
            setError('Failed to send password reset link. Please try again.');
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
                    <HeaderAuth
                        title="Forgot Password"
                        desc="Enter your registered email address. We’ll send you a code to reset your password."
                    />
                    <div className="">
                        <form className="w-[445px]" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col">
                                <InputField
                                    title="Email Address"
                                    type="email"
                                    id="email"
                                    content="robertfox@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Capture email input
                                />

                                <button
                                    type="submit"
                                    className="w-full p-[20px] border border-primary bg-primary text-white rounded-lg"
                                >
                                    Send OTP
                                </button>
                            </div>
                        </form>

                        {error && <p className="text-red-500">{error}</p>}
                        {message && <p className="text-green-500">{message}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};
