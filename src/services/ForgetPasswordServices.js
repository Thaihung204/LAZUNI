import axios from 'axios';

export const ForgetPasswordServices = async (email) => {  
    try {
        // Wrap the email in an object, as the server likely expects it
        const data = { email: email };
      
        // Make the POST request to initiate password reset
        await axios.post(
            'http://localhost:8080/client/signup', 
            data,  // Ensure we're sending a JSON object
            {
                headers: {
                    'Content-Type': 'application/json', // Set content-type to JSON
                },
            }
        );
        
        // Assuming the server provides an endpoint to get OTP based on email
        const responseOTP = await axios.get(`http://localhost:8080/client/${email}`);
        console.log('OTP Response:', responseOTP.data);
     
        
        // Return the OTP data
        return { otpData: responseOTP.data };

    } catch (error) {
        console.error('Request failed:', error);
        return error.response?.data?.message || 'Request failed. Please try again.';
    }
};
