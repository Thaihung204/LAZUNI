import React, { useState } from 'react';

export const UpradeAccount = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    { name: 'Standard', price: 'Gói hiện tại', isClickable: false },
    { name: 'Trader', price: '250.000đ', isClickable: true },
    { name: 'Seller', price: '250.000đ', isClickable: true },
    { name: 'Business', price: '500.000đ', isClickable: true },
  ];

  const handlePackageClick = (pkg) => {
    if (pkg.isClickable) {
      setSelectedPackage(pkg);
    }
  };

  const handleBuyClick = () => {
    if (selectedPackage) {
      setIsModalOpen(true);
    }
  };

  const confirmPurchase = () => {
    // Handle the purchase confirmation logic here
    console.log(`Purchased: ${selectedPackage.name}`);
    setIsModalOpen(false);
  };

  const cancelPurchase = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" mx-auto ml-[50px]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[13px] uppercase text-primary">
            <tr>
              <th className="px-6 py-3"></th>
              {packages.map((pkg, index) => (
                <th 
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-center ${selectedPackage?.name === pkg.name ? 'bg-primary text-white' : 'bg-gray-' + (index * 100)}`}
                  onClick={() => handlePackageClick(pkg)}
                >
                  {pkg.name}
                  <div className="my-[2px]">-</div>
                  <div>{pkg.price}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800">
                Số lượt mua / tháng
              </th>
              {packages.map((pkg, index) => (
                <td key={index} className={`px-6 py-4 ${selectedPackage?.name === pkg.name ? 'bg-primary text-white' : 'bg-gray-' + (index * 100)}`}>
                  Không giới hạn
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Số lượt bán / tháng
              </th>
              {packages.map((pkg, index) => (
                <td key={index} className={`px-6 py-4 ${selectedPackage?.name === pkg.name ? 'bg-primary text-white' : 'bg-gray-' + (index * 100)}`}>
                  {pkg.name === 'Trader' || pkg.name === 'Standard' ? '3 lần' : 'Không giới hạn'}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Số lượt trao đổi / tháng
              </th>
              {packages.map((pkg, index) => (
                <td key={index} className={`px-6 py-4 ${selectedPackage?.name === pkg.name ? 'bg-primary text-white' : 'bg-gray-' + (index * 100)}`}>
                  {pkg.name === 'Seller' || pkg.name === 'Standard' ? '3 lần' : 'Không giới hạn'}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Sản phẩm lưu trong kho
              </th>
              {packages.map((pkg, index) => (
                <td key={index} className={`px-6 py-4 ${selectedPackage?.name === pkg.name ? 'bg-primary text-white' : 'bg-gray-' + (index * 100)}`}>
                  {pkg.name === 'Standard' ? '3 vật phẩm' : 'Không giới hạn'}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Show Buy Button only when a package is selected */}
      {selectedPackage && (
        <div className="flex justify-center mt-[30px]">
          <button
            className={`p-4 bg-primary text-white rounded-lg w-[150px] text-center`}
            onClick={handleBuyClick}
          >
            Buy
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5">
            <h2 className="text-lg font-bold mb-2">Xác nhận mua gói</h2>
            <p className="mb-2">Bạn đang muốn mua gói: <strong>{selectedPackage.name}</strong></p>
            <p className="mb-4">Giá: <strong>{selectedPackage.price}</strong></p>
            <div className="flex justify-between">
              <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={cancelPurchase}>Hủy</button>
              <button className="bg-green-500 text-white rounded-lg px-4 py-2" onClick={confirmPurchase}>Xác nhận</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
