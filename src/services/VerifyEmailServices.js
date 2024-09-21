

import axios from 'axios';

export const VerifyEmailServices = async (otpUser) => {
    const storedOtp = sessionStorage.getItem('otp');
    console.log(otpUser)
    console.log(storedOtp)
    const storedSignupData = JSON.parse(sessionStorage.getItem('signupData'));
    console.log(storedSignupData)

    if (storedOtp ===otpUser) {
        // If OTP matches, send the signup data to the backend
        try {
            const response = await axios.post('http://localhost:8080/client/verify', storedSignupData);

            sessionStorage.removeItem('otp');
            sessionStorage.removeItem('signupData')
            return response.data;  // Handle the response as needed
        } catch (error) {
            console.error('Error verifying email:', error);
            throw new Error('Verification failed. Please try again.');
        }
    } else {
        throw new Error('Invalid OTP. Please try again.');
    }
};