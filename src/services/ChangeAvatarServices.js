import axios from 'axios';

const API_URL = 'https://your-backend-api.com'; // Replace with your actual backend URL

const ChangeAvatarServices = {
  uploadAvatar: async (file) => {
    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Make a POST request to the backend to upload the avatar
      const response = await axios.post(`${API_URL}/upload-avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add authorization header if needed:
          // 'Authorization': `Bearer ${yourToken}`,
        },
      });

      // Return the response data
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the upload
      console.error('Error uploading avatar:', error);
      throw error;
    }
  },
};

export default ChangeAvatarServices;
