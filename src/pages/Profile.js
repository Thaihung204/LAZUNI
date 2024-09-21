import React, { useState } from 'react';
import { Footer } from "../components/Authenfication/Footer";
import { Header } from "../components/Authenfication/Header";
import { Sider } from '../components/sider/Sider';
import { ProfileInfor } from '../components/ProfileInfor';
import { ChangePassword } from '../components/ChangePassword';

export const Profile = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggleProfileInfo = () => {
    setActiveSection('profileInfo');
  };

  const handleToggleChangePassword = () => {
    setActiveSection('changePassword');
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-[150px]">
        <div className="flex">
          <div className="w-auto">
            <Sider 
              activeSection={activeSection} // Pass the active section
              onToggleProfileInfo={handleToggleProfileInfo} 
              onToggleChangePassword={handleToggleChangePassword} 
            />
          </div>
          <div className="flex-1 ml-[20px]">
            <main className="mb-[120px]">
              {activeSection === 'profileInfo' && <ProfileInfor />}
              {activeSection === 'changePassword' && <ChangePassword/>} {/* Render ChangePassword */}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
