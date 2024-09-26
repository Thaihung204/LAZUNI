import { HeaderAuth } from '/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/HeaderAuth.js';
import { InputField } from '/Users/mb/Desktop/Java/LAZUNI/src/components/Authenfication/InputField';
import loginImage from '../assets/images/img_login.svg';
import React, { useState } from 'react';
import { SignupService } from '../services/SignupServices';
import { useNavigate } from 'react-router-dom';  // Import React Router's useNavigate

export const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [message, setMess] = useState('');

    const navigate = useNavigate();  // Initialize navigate to use React Router

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!agreeToTerms) {
            alert('You must agree to the terms and conditions to sign up.');
            return;
        }

        const signupData = { firstName, lastName, email, password };

        const { otpData } = await SignupService(signupData, navigate);

        if (otpData) {

            sessionStorage.setItem('signupData', JSON.stringify(signupData));
            sessionStorage.setItem('otp', otpData);


            navigate('/enterOtp');
        } else {
            setMess('Signup failed. Please try again.');
        }

        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setAgreeToTerms(false);
    };


    return (
        <>
            <div className="flex w-auto box-border">
                <div className="w-[845px] h-[1024px]"><img src={loginImage} className="object-cover w-full" alt="Login" /></div>
                <div className="ml-[110px] mt-[311px] w-auto">
                    <HeaderAuth title="Create New Account" desc="Please enter details" />
                    <div className="">
                        <form className="w-[445px]" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col ">
                                <InputField
                                    title="First Name"
                                    type="text"
                                    id="FirstName"
                                    content="Robert"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <InputField
                                    title="Last Name"
                                    type="text"
                                    id="LastName"
                                    content="Fox"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <InputField
                                    title="Email Address"
                                    type="email"
                                    id="email"
                                    content="robertfox@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputField
                                    title="Password"
                                    type="password"
                                    id="password"
                                    content="••••••••••••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <div className="items-center flex mb-[30px]">
                                    <input
                                        type="checkbox"
                                        className="mr-[16px] w-[20px] h-[20px] accent-primary"
                                        name="persist"
                                        id="persist"
                                        checked={agreeToTerms}
                                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    />
                                    <label className="text-[16px] font-normal text-primary" htmlFor="persist">
                                        I agree to the <strong>Terms & Conditions</strong>
                                    </label>
                                </div>

                                <button type="submit" className="w-full p-[20px] border border-primary bg-primary text-white rounded-lg">
                                    Signup
                                </button>
                            </div>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};
