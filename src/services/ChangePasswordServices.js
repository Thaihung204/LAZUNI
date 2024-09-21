import axios from 'axios';


export const ChangePasswordServices = {
  changePassword: async (newPassword) => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      throw new Error('User not found in local storage.');
    }

    // Parse the stored user data
    const user = JSON.parse(storedUser);
    
    // Ensure userId is present
    if (!user.userId) {
      throw new Error('User ID is missing');
    }

    // Prepare data to be sent to the server
    const data = {
      userId: user.userId, // Ensure this is valid
      newPassword: newPassword // Ensure this is a simple string
    };

    console.log(data); // Check data being sent

    try {
      // Send request to change the password
      const response = await axios.put('http://localhost:8080/changePassword', data);
      return response.data; // Return the response data (e.g., success message)
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error changing password');
    }
  }
};
