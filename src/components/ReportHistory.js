import React, { useState } from 'react';

export const ReportHistory = () => {
  const [reports] = useState([
    { title: 'Report 1', description: 'Issue with product delivery', productName: 'Laptop', state: 'Đã giải quyết', result: 'Refunded' },
    { title: 'Report 2', description: 'Wrong item received', productName: 'Smartphone', state: 'Chờ giải quyết', result: 'Pending' },
    { title: 'Report 3', description: 'Damaged item', productName: 'Headphones', state: 'Đã giải quyết', result: 'Replaced' },
    { title: 'Report 4', description: 'Late delivery', productName: 'Book', state: 'Chờ giải quyết', result: 'Pending' },
  ]);

  const getStateColor = (state) => {
    return state === 'Đã giải quyết' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800';
  };

  return (
    <div className=" mx-auto ml-[50px]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[13px] uppercase text-primary">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Product Name</th>
              <th className="px-6 py-3">State</th>
              <th className="px-6 py-3">Result</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {report.title}
                </td>
                <td className="px-6 py-4">
                  {report.description}
                </td>
                <td className="px-6 py-4">
                  {report.productName}
                </td>
                <td className={`px-6 py-4 ${getStateColor(report.state)}`}>
                  {report.state}
                </td>
                <td className="px-6 py-4">
                  {report.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
