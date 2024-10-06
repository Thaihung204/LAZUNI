import React, { useState } from 'react';
import { InputField } from './Authenfication/InputField'; // Adjust the import based on your file structure
import { ChangePasswordServices } from '../services/ChangePasswordServices'; // Ensure this is the correct import
import loginImage from '../assets/images/img_login.svg';
import { useLocation, useNavigate } from 'react-router-dom';
export const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Basic validation
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    console.log(newPassword);

    try {
      // Call the ChangePasswordServices with the new password
      const response = await ChangePasswordServices(newPassword);
      // Assuming response contains a success message or status
      setSuccess("Password changed successfully!");
      setError('');
      navigate('/login')
      // Reset fields
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setError("Failed to change password. Please try again.");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="flex w-auto box-border">
      <div className="w-[845px] h-[1024px]">
        <img src={loginImage} className="object-cover w-full" alt="Login" />
      </div>
      <div className="ml-[110px] mt-[311px] w-auto">
        <h2 className="text-xl font-semibold mb-4">Enter a new password</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-500 mb-2">{success}</div>}

        <form className="w-[445px] space-y-4" onSubmit={handleChangePassword}>
          <InputField
            title="New Password"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <InputField
            title="Confirm New Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className='mb-[20px]'>

          </div>
          <button
            type="submit"
            className="w-full  p-[20px] border border-primary bg-primary text-white rounded-lg"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};
