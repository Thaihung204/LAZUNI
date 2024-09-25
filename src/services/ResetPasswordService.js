import axios from 'axios';

export const ResetPasswordService = async (data) => {
  try {
    const response = await axios.post('http://localhost:8080/client/reset-password', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to reset password';
  }
};
