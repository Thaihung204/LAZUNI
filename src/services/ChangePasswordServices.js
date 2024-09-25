import axios from 'axios';

// ChangePassword service similar in structure to LoginServices
export const ChangePasswordServices = async (newPassword) => {
  try {
    // Retrieve user email from localStorage
    let email = localStorage.getItem('email');
    
    if (!email) {
      console.log('User email not found.');
      return null;
    }

    // Clean the email string if it contains extra quotes
    email = email.replace(/^"|"$/g, ''); // Removes leading and trailing quotes

    // Prepare data to be sent to the server
    const data = {
      email: email, // The cleaned email
      password: newPassword, // The new password
    };

    console.log('Data being sent:', data); // For debugging

    // Send PUT request to change the password
    const response = await axios.put('http://localhost:8080/client/changepassword', data);
  
    console.log('Password change response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Error changing password');
  }
};
