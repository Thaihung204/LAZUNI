import React, { useState } from 'react';
import { InputField } from '../Authenfication/InputField'; // Adjust the import based on your file structure
import { ChangePasswordServices } from '../../services/ChangePasswordServices'; // Ensure this is the correct import

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    try {
      // Call the ChangePasswordServices with currentPassword and newPassword
      const response = await ChangePasswordServices(currentPassword, newPassword);

      // Assuming response contains a success message or status
      setSuccess(response);
      setError('');

      // Reset fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError("Failed to change password. Please try again.");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="mx-auto p-4 items-center">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-500 mb-2">{success}</div>}
      
      <form onSubmit={handleChangePassword} className="space-y-4">
        <div className='w-1/2'>
          <InputField
            title="Current Password"
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        
        <div className='w-1/2'>
          <InputField
            title="New Password"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        
        <div className='w-1/2'>
          <InputField
            title="Confirm New Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="bg-primary text-white p-3 rounded-lg w-[200px]">
          Change Password
        </button>
      </form>
    </div>
  );
};
