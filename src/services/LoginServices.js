
import axios from 'axios';

export const LoginServices = async (email, password) => {
    try {
        // Fetch users data using a GET request
        const response = await axios.get('http://localhost:8080/users');
        
        const users = response.data;  // Assuming this is an array
       
        console.log('Users fetched:', users);  
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            console.log('Login successful:', user);
            return user;
        } else {
            console.log('Login failed: User not found');
            return null;
        }
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};
