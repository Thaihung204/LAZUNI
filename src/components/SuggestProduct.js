import React, { useEffect, useState } from 'react';
import { SuggestProductServices } from '../services/SuggestProductServices';
import { MdOutlineReport } from "react-icons/md";
import ReportPopup from '../components/Popup/ReportProduct';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";
// Function to format price with period as a thousands separator
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
};

export const SuggestProduct = () => {
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]); // State for displayed products
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [isReportPopupOpen, setReportPopupOpen] = useState(false); // Popup state
    const [itemsToShow, setItemsToShow] = useState(18); // Number of items to show

    useEffect(() => {
        // Fetch product suggestions when the component mounts
        const fetchProducts = async () => {
            try {
                const data = await SuggestProductServices();
                setProducts(data.products); // Set the products into state
                setDisplayedProducts(data.products.slice(0, itemsToShow)); // Initialize displayed products
            } catch (error) {
                console.error("Error fetching suggested products:", error);
            } finally {
                setIsLoading(false); // Stop loading after fetch
            }
        };

        fetchProducts();
    }, [itemsToShow]);

    const openReportPopup = () => {
        setReportPopupOpen(true);
    };

    const closeReportPopup = () => {
        setReportPopupOpen(false);
    };

    const loadMore = () => {
        setItemsToShow(prev => prev + 12); // Increase the number of items to show
        setDisplayedProducts(products.slice(0, itemsToShow + 6)); // Update displayed products
    };

    return (
        <>
            <div className="my-[30px] bg-white">
                <div className="font-semibold text-[20px] my-[20px] ml-[20px]">Gợi ý hôm nay</div>
                {/* Loading state */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <span>Đang tải sản phẩm...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 border border-gray-100">
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <div key={product.id} className="border border-gray-100 p-[10px]">
                                    <Link
                                        to={`/products/${product.id}`}  // Use dynamic route here
                                        className="flex flex-col items-center justify-center transition-transform transform hover:scale-105 relative"
                                    >
                                        <div className="w-full text-left">
                                            {/* Display the first image from the images array or fallback */}
                                            <img
                                                src={product.images[0] || '/default-image.png'}
                                                alt={product.title}
                                                className="w-full h-[190px] object-cover"
                                                onError={(e) => { e.target.src = '/default-image.png'; }}
                                            />
                                        </div>
                                        <div className="mb-4 mt-2 w-full text-left flex justify-between p-2">
                                            {/* Product title with 2-line clamp */}
                                            <div className="w-9/12 text-ellipsis overflow-hidden line-clamp-2">
                                                {product.title}
                                            </div>
                                            <div className="w-1/12 mt-[4px]" onClick={(e) => {
                                                e.preventDefault(); // Prevent default action
                                                openReportPopup();
                                            }}>
                                                <MdOutlineReport />
                                            </div>
                                        </div>
                                        <div className="text-red-500 font-semibold w-full text-left flex ml-[20px]">
                                            <span className="font-[2px] mr-[2px]">đ </span>{formatPrice(product.price)}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center h-64">
                                <span>Không có sản phẩm nào để gợi ý.</span>
                            </div>
                        )}
                    </div>
                )}
                {/* Load More Button */}
                {displayedProducts.length < products.length && (
                    <div className="flex justify-center mt-4 flex-col items-center"> {/* Center items horizontally */}
                        <button
                            onClick={loadMore}
                            className="text-primary px-4  rounded flex items-center" // Use flex for the button
                        >
                            Xem thêm
                        </button>
                        <FaArrowDown className="" /> {/* Add margin for spacing between button and icon */}
                    </div>
                )}

            </div>
            <ReportPopup isOpen={isReportPopupOpen} onClose={closeReportPopup} /> {/* Render the popup */}
        </>
    );
};
