// src/components/Popup/ConfirmPurchasePopup.js

import React from 'react';

const ConfirmPurchasePopup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Xác nhận mua hàng</h2>
                <p>Bạn có chắc chắn muốn mua sản phẩm này?</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className="mr-2 px-4 py-2 border rounded">Hủy</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-primary text-white rounded">Xác nhận</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPurchasePopup;
