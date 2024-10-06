import React, { useState } from 'react';



import { Footer } from '../components/Authenfication/Footer';
import { ChangePassword } from '../components/ChangePassword';
import { ProfileInfor } from '../components/ProfileInfor';
import {Sider} from '../components/sider/Sider'
import { Header } from '../components/Authenfication/Header';
export const Profile = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleToggleProfileInfo = () => {
        setActiveSection('profileInfo');
    };

  const handleToggleChangePassword = () => {
    setActiveSection('changePassword');
  };

  const handleToggleUpgradeAccount = () => {
    setActiveSection('upgradeAccount');
  };

  const handleToggleReportHistory = () => { // Updated function name
    setActiveSection('reportHistory');
  };

  return (
    <>

      <div className="container mx-auto my-[150px]">
        <div className="flex">
          <div className="w-auto">
            <Sider 
              activeSection={activeSection} 
              onToggleProfileInfo={handleToggleProfileInfo} 
              onToggleChangePassword={handleToggleChangePassword} 
              onToggleUpgradeAccount={handleToggleUpgradeAccount} 
              onToggleReport={handleToggleReportHistory} // Updated prop name
            />
          </div>
          <div className="flex-1 ml-[20px]">
            <main className="mb-[120px]">
              {activeSection === 'profileInfo' && <ProfileInfor />}
              {activeSection === 'changePassword' && <ChangePassword />} 
              {activeSection === 'upgradeAccount' && <UpradeAccount />} 
              {activeSection === 'reportHistory' && <ReportHistory />} {/* Updated section */}
            </main>
          </div>
        </div>
      </div>
 
    </>
  );
};
