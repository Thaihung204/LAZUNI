import { Footer } from "../components/Other/Footer";
import { Header } from "../components/Other/Header";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

export const Cart = () => {
    const [products, setProducts] = useState([
        {
            img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png",
            title: "IPhone 16 PROMAX",
            price: 100,
            quantity: 2,
            subtotal: 200
        },
        {
            img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro.png",
            title: "IPhone 16 PROMAX",
            price: 50,
            quantity: 1,
            subtotal: 50
        }
    ]);

    // Hàm xử lý khi thay đổi số lượng sản phẩm
    const handleQuantityChange = (index, newQuantity) => {
        const updatedProducts = products.map((product, i) => {
            if (i === index) {
                // Cập nhật quantity và subtotal của sản phẩm
                const updatedProduct = {
                    ...product,
                    quantity: newQuantity,
                    subtotal: newQuantity * product.price
                };
                return updatedProduct;
            }
            return product;
        });

        setProducts(updatedProducts);
    };

    // Tính toán tổng tiền
    const calculateGrandTotal = () => {
        return products.reduce((acc, product) => acc + product.subtotal, 0).toFixed(2);
    };

    return (
        <>
          
            <div className="container mx-auto h-[500px] my-[50px]">
                <h2 className="font-bold text-primary row text-[30px] my-[20px]">Check Out</h2>
                <div className="flex justify-between">
                    <table className="table-auto w-full text-left border-separate border-spacing-y-4"> {/* Khoảng cách giữa các dòng */}
                        <thead>
                            <tr className="text-left ">
                                <th className="font-semibold w-2/5">Products</th>
                                <th className="font-semibold w-1/6 text-center">Price</th>
                                <th className="font-semibold w-1/6 text-center">Quantity</th>
                                <th className="font-semibold w-1/6 text-center">Subtotal</th>
                                <th className="w-1/12"></th>
                            </tr>
                        </thead>
                        <tbody className="list-product "> 
                            {products.map((product, index) => (
                                <tr key={index} className="items-center">
                                    <td className="flex items-center space-x-4">
                                        <img src={product.img} alt={product.title} className="object-cover h-[80px]" />
                                        <div>{product.title}</div>
                                    </td>
                                    <td className="text-center">${product.price.toFixed(2)}</td>
                                    <td className="text-center">
                                        <div className="flex justify-center">
                                            <div className="items-center justify-center border border-[#131118] px-2 rounded-lg">
                                                {/* Nút giảm số lượng */}
                                                <button
                                                    onClick={() =>
                                                        handleQuantityChange(index, Math.max(1, product.quantity - 1))
                                                    }
                                                    className="px-2 rounded-l text-[27px]"
                                                >
                                                    -
                                                </button>
                                                {/* Hiển thị số lượng */}
                                                <span className="text-[17px]">{product.quantity}</span>
                                                {/* Nút tăng số lượng */}
                                                <button
                                                    onClick={() => handleQuantityChange(index, product.quantity + 1)}
                                                    className="px-2 rounded-r text-[22px]"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">${product.subtotal.toFixed(2)}</td>
                                    <td className="text-center">
                                        <FaRegTrashCan className="cursor-pointer text-red-500" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="border-2 border-[#ECEBED] w-[350px]">
                        <div className="p-[20px]">
                            <h3 className="border-b font-bold pb-3">Order summary</h3>
                            <div className="flex justify-between py-5">
                                <div className="font-semibold">Grand Total</div>
                                <div className="font-semibold">${calculateGrandTotal()}</div>
                            </div>
                            <div>
                                <button className="text-white rounded-lg p-[18px] bg-primary w-full">
                                    Proceed to CheckOut
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};
