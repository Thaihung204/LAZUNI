import axios from 'axios';

// Replace with your actual backend URL
const API_URL = 'https://your-backend-api.com'; 

// Function to update user profile
export const ChangeInformationService = async ( formData) => {
    try {
        // Logs to verify if formData is being sent correctly
        console.log('Sending data:', formData);

        // Axios POST request to update the user profile
        // const response = await axios.post(`${API_URL}/users/${userId}/update-profile`, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data', // Important for handling file uploads
        //     },
        // });

        // Log the successful response
        // console.log('Profile updated successfully:', response.data);
        // return response.data; // Return the response data if needed
    } catch (error) {
        // Log the error and re-throw for further handling
        console.error('Error updating profile:', error);
        throw error; // Optionally re-throw the error to handle it at a higher level
    }
};
