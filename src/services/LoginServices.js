import axios from 'axios';

export const LoginServices = async (email, password) => {
    try {
        // Create the login payload
        const data = { email:email, password:password };
        console.log(data    )

        // Send a POST request to the login endpoint
        const response = await axios.post('http://localhost:8080/login', data);

        // Check if the login is successful
        if (response.data) {
            console.log('Login successful:', response.data);
            return response.data;
        } else {
            console.log('Login failed: No user data returned');
            return null;
        }
    } catch (error) {
        // Log error details for easier debugging
        console.error('Login failed due to error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
