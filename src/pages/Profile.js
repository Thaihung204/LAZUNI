import React, { useState } from 'react';

import { Sider } from '../components/sider/Sider';

import { ChangePassword } from '../components/Profile/ChangePassword';
import { ProfileInfor } from '../components/Profile/ProfileInfor';
import { UpradeAccount } from '../components/Profile/UpradeAccount'; // Assuming "UpradeAccount" is the correct component name
import { ReportHistory } from '../components/ReportHistory';

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
