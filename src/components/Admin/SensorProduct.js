import React, { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa'; // Import the close and check icons

export const SensorProduct = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: 'Laptop',
            category: 'Electronics',
            price: 500,
            description: 'High performance laptop.',
            status: 'Pending',
            images: [
                'https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-tu-nhien-650x650.png',
                'https://kenh14cdn.com/thumb_w/640/203336854389633024/2024/8/29/45731208022207560349249525728124825370502434n-1724909957122798918811.jpg'
            ],
        },
        {
            id: 2,
            productName: 'Smartphone',
            category: 'Electronics',
            price: 300,
            description: 'Latest model smartphone.',
            status: 'Pending',
            images: [
                'https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-tu-nhien-650x650.png',
                'https://kenh14cdn.com/thumb_w/640/203336854389633024/2024/8/29/45731208022207560349249525728124825370502434n-1724909957122798918818811.jpg'
            ],
        },
        {
            id: 3,
            productName: 'Smartphone',
            category: 'Electronics',
            price: 300,
            description: 'Latest model smartphone.',
            status: 'Pending',
            images: [
                'https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-tu-nhien-650x650.png',
                'https://kenh14cdn.com/thumb_w/640/203336854389633024/2024/8/29/45731208022207560349249525728124825370502434n-1724909957122798918818811.jpg'
            ],
        },
        {
            id: 4,
            productName: 'Smartphone',
            category: 'Electronics',
            price: 300,
            description: 'Latest model smartphone.',
            status: 'Pending',
            images: [
                'https://cdn.tgdd.vn/Products/Images/42/329143/s16/iphone-16-pro-tu-nhien-650x650.png',
                'https://kenh14cdn.com/thumb_w/640/203336854389633024/2024/8/29/45731208022207560349249525728124825370502434n-1724909957122798918818811.jpg'
            ],
        },
    ]);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleAccept = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, status: 'Accepted' } : product
            )
        );
    };

    const handleReject = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, status: 'Rejected' } : product
            )
        );
    };

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="mx-auto ml-[20px] mt-[50px]">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-[13px] uppercase text-primary">
                        <tr>
                            <th className="px-6 py-3">Tên sản phẩm</th>
                            <th className="px-6 py-3">Danh mục</th>
                            <th className="px-6 py-3">Giá</th>
                            <th className="px-6 py-3">Mô tả</th>
                            <th className="px-6 py-3">Trạng thái</th>
                            <th className="px-6 py-3">Hình ảnh</th>
                            <th className="px-6 py-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {product.productName}
                                </td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.price} VNĐ</td>
                                <td className="px-6 py-4">{product.description}</td>
                                <td className="px-6 py-4">{product.status}</td>
                                <td className="px-6 py-4 ">
                                    <div className='flex  space-x-2'>
                                    {product.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Product ${product.productName}`}
                                            className="w-14 h-14 object-cover cursor-pointer"
                                            onClick={() => openImageModal(img)}
                                        />
                                    ))} 
                                    </div>
                                   
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className='flex space-x-2'>
                                    <button
                                        onClick={() => handleAccept(product.id)}
                                        className="bg-green-500 text-white p-2 rounded flex items-center justify-center"
                                    >
                                        <FaCheck size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleReject(product.id)}
                                        className="bg-red-500 text-white p-2 rounded flex items-center justify-center"
                                    >
                                        <FaTimes size={18} />
                                    </button>
                                    </div>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white rounded-lg p-5 shadow-md">
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-lg font-bold text-center mb-2">Hình ảnh sản phẩm</h2>
                        <img src={selectedImage} alt="Selected Product" className="w-80 h-auto mt-2 mx-auto" />
                        <div className="mt-4 flex justify-end">
                            <button onClick={closeImageModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};