import axios from 'axios';


export const SignupService = async (signupData, navigate) => {  // Add navigate as a parameter
    try {
        const newUser = {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            password: signupData.password,
            email: signupData.email,
        };
      
        // Make the signup request
        const response = await axios.post('http://localhost:8080/client/signup', newUser);
        console.log('Signup Response:', response.data);
        

        // Request OTP for the user based on the email
        const responseOTP = await axios.get(`http://localhost:8080/client/${signupData.email}`);
        console.log('OTP Response:', responseOTP.data);
       
       
      
    
       

        // Return both signup and OTP data if needed
        return {  otpData: responseOTP.data };

    } catch (error) {
        console.error('Sign-up failed:', error);
        return error.response?.data?.message || 'Sign-up failed. Please try again.';
    }
}