import React, { useState } from 'react';
import { FaReply } from 'react-icons/fa'; // Nhập icon để phản hồi báo cáo

export const ReportList = () => {
  const [reports, setReports] = useState([
    { title: 'Báo cáo 1', description: 'Vấn đề với giao hàng sản phẩm', productName: 'Laptop', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 2', description: 'Nhận sai sản phẩm', productName: 'Smartphone', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 3', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 4', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 5', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 6', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 7', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 8', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
    { title: 'Báo cáo 9', description: 'Giao hàng trễ', productName: 'Sách', state: 'Chưa giải quyết', result: '' },
  ]);

  const [responseText, setResponseText] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Hàm xác định màu nền dựa trên trạng thái báo cáo
  const getStateColor = (state) => {
    return state === 'Chưa giải quyết' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800';
  };

  // Hàm xử lý phản hồi báo cáo
  const handleRespond = (report) => {
    setSelectedReport(report); // Lưu báo cáo đang phản hồi
    setIsPopupOpen(true); // Mở popup
  };

  // Hàm gửi phản hồi
  const handleSubmitResponse = () => {
    if (selectedReport) {
      // Cập nhật báo cáo với phản hồi và thay đổi trạng thái thành 'Đã giải quyết'
      const updatedReport = {
        ...selectedReport,
        result: responseText,
        state: 'Đã giải quyết' // Thay đổi trạng thái thành Đã giải quyết
      };

      // Cập nhật trạng thái báo cáo
      setReports(prevReports => prevReports.map(report => report.title === updatedReport.title ? updatedReport : report));

      // Xóa nội dung và đóng popup
      setResponseText('');
      setIsPopupOpen(false);
      setSelectedReport(null);
    }
  };

  return (
    <div className="mx-auto ml-[20px] mt-[50px]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[13px] uppercase text-primary">
            <tr>
              <th className="px-6 py-3">Tiêu đề</th>
              <th className="px-6 py-3">Mô tả</th>
              <th className="px-6 py-3">Tên sản phẩm</th>
              <th className="px-6 py-3">Trạng thái</th>
              <th className="px-6 py-3">Kết quả</th>
              <th className="px-6 py-3">Phản hồi</th>
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
                  {report.result || 'Chưa có phản hồi'}
                </td>
                <td className="px-6 py-4">
                  {report.state === 'Chưa giải quyết' && (
                    <button onClick={() => handleRespond(report)} className="text-blue-500">
                      <FaReply />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup để nhập phản hồi */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <h2 className="text-lg font-bold">Phản hồi cho báo cáo</h2>
            <textarea 
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Nhập phản hồi của bạn ở đây..."
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="mt-4 flex justify-end">
              <button onClick={handleSubmitResponse} className="bg-blue-500 text-white px-4 py-2 rounded">
                Gửi
              </button>
              <button onClick={() => setIsPopupOpen(false)} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded">
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
