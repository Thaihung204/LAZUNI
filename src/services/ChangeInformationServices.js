import axios from 'axios';

// Function to update user profile
export const ChangeInformationService = async (formData) => {
    try {
        console.log(formData.avatar);
        
        // Axios PUT request to update the user profile
        const response = await axios({
            method: 'put',
            
            url: 'http://localhost:8080/client/update',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', // axios handles the boundary automatically
            },
        });

        // Convert the response data (likely an object) to a JSON string before storing in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
         
        // Log the successful response
        console.log('Profile updated successfully:', response.data);
        return response.data; // Return the response data if needed
    } catch (error) {
        // Log the error and re-throw for further handling
        console.error('Error updating profile:', error.response || error.message);
        throw error; // Optionally re-throw the error to handle it at a higher level
    }
};
