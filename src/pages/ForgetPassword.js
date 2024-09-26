import { HeaderAuth } from '/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/HeaderAuth.js';
import { InputField } from '/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/InputField';
import loginImage from '../assets/images/img_login.svg';
import { TiArrowLeft } from "react-icons/ti";   
import React, { useState } from 'react';  // Import useState
import { ForgetPasswordServices } from '../services/ForgetPasswordServices';
export const ForgetPassword=()=>{
const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
    console.log(email)
      const response = await ForgetPasswordServices(email);
      setMessage(response.message || 'Check your email for the password reset link.');
    } catch (err) {
      setError('Failed to send password reset link. Please try again.');
    }
  };
    return (
        <>
            <div className="flex w-auto box-border">
                <div className="w-[845px] h-[1024px]"><img src={loginImage} className="object-cover w-full" alt="Login" /></div>
                <div className="ml-[110px] mt-[311px] w-auto  ">
                    <div className='flex items-center'>
                    <TiArrowLeft />
                       <div className='text-[16px] font-normal text-primary ml-[5px]'>Back</div>
                    </div>
                    <HeaderAuth

                        title="Forgot Password "
                        desc="Enter your registered email address. we’ll send you a code to reset your password."
                    />
                    <div className="">
                        <form className="w-[445px]" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col ">

                            <InputField 
                                    title="Email Address"
                                    type="email"
                                    id="email"
                                    content="robertfox@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Capture email input
                                />

                               
                                <button
                                    className="w-full p-[20px] border  border-primary bg-primary text-white rounded-lg "
                                    onclick="login()">
                                    Send OTP
                                </button>
                            </div>

                        </form>
                    </div>

                </div>




            </div>



        </>
    )


}