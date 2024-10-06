import React from 'react';

const ReportPopup = ({ isOpen, onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to API)
        onClose(); // Close the popup after submission
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded shadow-lg">
                    <h2 className="text-lg font-semibold">Report Product</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div>
                            <label className="block mb-2">Title:</label>
                            <input type="text" className="border w-full p-2" required />
                        </div>
                        <div className="mt-2">
                            <label className="block mb-2">Description:</label>
                            <textarea className="border w-full p-2" rows="4" required></textarea>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button type="button" className="mr-2 bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default ReportPopup;
