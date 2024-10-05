import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa'; // Nhập icon để đổi trạng thái tài khoản

export const AccountList = () => {
  const [accounts, setAccounts] = useState([
    { username: 'Nguyễn Văn A', phoneNumber: '0123456789', role: 'User', email: 'nguyenvana@example.com', address: 'Hà Nội', balance: 100.0, status: 'Active' },
    { username: 'Trần Thị B', phoneNumber: '0987654321', role: 'Admin', email: 'tranthib@example.com', address: 'TP.HCM', balance: 200.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
    { username: 'Lê Văn C', phoneNumber: '0112233445', role: 'User', email: 'levanc@example.com', address: 'Đà Nẵng', balance: 50.0, status: 'Active' },
 
  ]);
  
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Hàm cập nhật trạng thái của tài khoản
  const handleToggleStatus = (username) => {
    setSelectedAccount(username);
    setShowPopup(true);
  };

  const confirmToggleStatus = () => {
    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.username === selectedAccount
          ? { ...account, status: account.status === 'Active' ? 'Inactive' : 'Active' }
          : account
      )
    );
    setShowPopup(false);
    setSelectedAccount(null);
  };

  const cancelToggleStatus = () => {
    setShowPopup(false);
    setSelectedAccount(null);
  };

  return (
    <div className="mx-auto mt-[50px] ml-[20px]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[13px] uppercase text-primary">
            <tr>
              <th className="px-4 py-3">Tên người dùng</th>
              <th className="px-4 py-3">Số điện thoại</th>
              <th className="px-4 py-3">Vai trò</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Địa chỉ</th>
              <th className="px-4 py-3">Số dư</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {account.username}
                </td>
                <td className="px-4 py-4">{account.phoneNumber}</td>
                <td className="px-4 py-4">{account.role}</td>
                <td className="px-4 py-4">{account.email}</td>
                <td className="px-4 py-4">{account.address}</td>
                <td className="px-4 py-4">{account.balance}</td>
                <td className={`px-4 py-4 ${account.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                  {account.status}
                </td>
                <td className="px-4 py-4">
                  <button onClick={() => handleToggleStatus(account.username)}>
                    {account.status === 'Active' ? (
                      <FaToggleOn className="text-green-600" />
                    ) : (
                      <FaToggleOff className="text-red-600" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup xác nhận */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Xác nhận thay đổi trạng thái</h2>
            <p>Bạn có chắc chắn muốn thay đổi trạng thái tài khoản của {selectedAccount} không?</p>
            <div className="flex justify-end mt-4">
              <button onClick={cancelToggleStatus} className="mr-2 px-4 py-2 bg-gray-300 rounded">Hủy</button>
              <button onClick={confirmToggleStatus} className="px-4 py-2 bg-blue-500 text-white rounded">Xác nhận</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
