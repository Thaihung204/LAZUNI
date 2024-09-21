import axios from 'axios';

export const ForgetPasswordServices = async (email) => {
  try {
    const response = await axios.post('http://localhost:3000/api/forget-password', { email });
    console.log(email)
    return response.data; 
  } catch (error) {
    console.error("Error sending password reset request:", error);
    throw error; 
  }
};