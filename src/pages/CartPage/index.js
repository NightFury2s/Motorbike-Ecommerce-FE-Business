import React, { useState, useEffect, useContext } from 'react';
import { AiTwotoneShop } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';
import { getCartByUser } from '@/pages/api/api';
import { AuthContext } from '@/context/AuthContext';

const CartPage = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const response = await getCartByUser();
                if (response && response.cart && response.cart.shoppingCartDetailsDto) {
                    const productsWithQuantities = response.cart.shoppingCartDetailsDto.map((product) => ({
                        ...product,
                        quantity: product.quantityCart, // Update the quantity from quantityCart
                    }));
                    setCartProducts(productsWithQuantities);
                }
            } catch (error) {
                console.error('Error fetching cart products:', error);
            }
        };

        fetchCartProducts();
    }, []);

    // Calculate total price of selected products
    const getTotalPrice = () => {
        return cartProducts.reduce((total, product) => {
            if (selectedProducts.includes(product.productSomeReponseDto.id)) {
                // Sử dụng số lượng được cập nhật của sản phẩm để tính tổng giá
                return total + product.productSomeReponseDto.newPrice * product.quantity;
            }
            return total;
        }, 0);
    };

    // Increase quantity
    const onAdd = (productId) => {
        const updatedCartProducts = cartProducts.map((product) => {
            if (product.productSomeReponseDto.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setCartProducts(updatedCartProducts);
    };

    // Decrease quantity
    const onRemove = (productId) => {
        const updatedCartProducts = cartProducts.map((product) => {
            if (product.productSomeReponseDto.id === productId && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setCartProducts(updatedCartProducts);
    };

    // Toggle selection of a product
    const toggleSelection = (productId) => {
        setSelectedProducts((prev) => {
            if (prev.includes(productId)) {
                return prev.filter((id) => id !== productId);
            } else {
                return [...prev, productId];
            }
        });
    };

    return (
        <div className="p-5 mb-14">
            <div className="max-w-7xl mx-auto">
                {/* Title with lines */}
                <div className="flex items-center text-center my-8">
                    <div className="flex-grow h-0.5 bg-black"></div>
                    <span className="px-4 text-3xl font-bold text-black">Giỏ hàng</span>
                    <div className="flex-grow h-0.5 bg-black"></div>
                </div>

                <div className="flex flex-wrap -mx-2">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 lg:w-3/5 px-2 mb-4 md:mb-0">
                        {/* Customer Information Form */}
                        <div className="mb-4 p-4 bg-white rounded-xl shadow-xl">
                            <h2 className="text-lg font-bold mb-2 uppercase">Thông tin khách hàng</h2>
                            <p className="mb-2 text-[#7f7f7f]">Chọn cách thức mua hàng</p>
                            <button className="flex flex-row items-center bg-[#f8fafc] text-black font-semibold py-2 px-4 rounded-lg mb-4">
                                <AiTwotoneShop className="mr-2 text-[#7f7f7f]" />
                                Nhận tại cửa hàng
                            </button>
                            {/* Form fields */}
                            <div className="flex flex-wrap -mx-2 mb-4">
                                <div className="w-1/2 px-2 mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Họ và tên <span className="text-red-500">*</span>
                                    </label>
                                    <input type="text" placeholder="Họ và tên" className="w-full p-2 border rounded" />
                                </div>
                                <div className="w-1/2 px-2 mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Số điện thoại <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                                </div>
                                <div className="w-1/2 px-2">
                                    <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                    <input type="text" placeholder="Địa chỉ" className="w-full p-2 border rounded" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nội dung</label>
                                <textarea
                                    placeholder="Nhập nội dung..."
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>

                        {/* Special Offers form */}
                        <div className="p-4 bg-white rounded-lg shadow-xl">
                            <h2 className="text-lg font-bold mb-2">
                                Một số ưu đãi của khách hàng khi mua hàng bên shop
                            </h2>
                            {/* Content */}
                            <p className="flex flex-row items-center mb-2 text-[#7f7f7f]">
                                <FaCheck className="mr-3 text-2xl text-[#29D825]" />
                                Được nhận mã giảm giá hấp dẫn cho mỗi lần mua
                            </p>
                            <p className="flex flex-row items-center mb-2 text-[#7f7f7f]">
                                <FaCheck className="mr-3 text-2xl text-[#29D825]" />
                                Được bảo trì 3 lần cho một sản phẩm
                            </p>
                            <p className="flex flex-row items-center mb-2 text-[#7f7f7f]">
                                <FaCheck className="mr-3 text-2xl text-[#29D825]" />
                                Nhân viên tư vấn, hỗ trợ khách hàng nhiệt tình
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 lg:w-2/5 px-2">
                        {/* Box for selected products */}
                        <div className="p-4 bg-white rounded-lg shadow-xl h-full">
                            <h2 className="text-lg font-bold mb-2 uppercase">Sản phẩm đã chọn</h2>
                            <div className="p-4 bg-white rounded-lg max-h-96 overflow-y-auto">
                                {cartProducts &&
                                    cartProducts.map((product) => (
                                        <div key={product.productSomeReponseDto.id} className="mb-6">
                                            <div className="border-t border-gray-200 my-2"></div>
                                            <div className="flex items-center my-4">
                                                <input
                                                    type="checkbox"
                                                    className="mr-4"
                                                    checked={selectedProducts.includes(
                                                        product.productSomeReponseDto.id,
                                                    )}
                                                    onChange={() => toggleSelection(product.productSomeReponseDto.id)}
                                                />
                                                {product.productSomeReponseDto.images &&
                                                    product.productSomeReponseDto.images.length > 0 && (
                                                        <img
                                                            src={`data:image/png;base64,${product.productSomeReponseDto.images[0].imgData}`}
                                                            alt={product.productSomeReponseDto.name}
                                                            className="w-32 h-24 object-cover mr-4"
                                                        />
                                                    )}
                                                <div className="flex-grow">
                                                    <h3 className="font-bold text-lg mb-2">
                                                        {product.productSomeReponseDto.name}
                                                    </h3>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-[17px] font-bold text-[#FF0000]">
                                                            {product.productSomeReponseDto.newPrice.toLocaleString(
                                                                'vi-VN',
                                                            )}{' '}
                                                            <span>&#8363;</span>
                                                        </span>
                                                        <span className="text-[15px] font-bold text-gray-500 line-through">
                                                            {product.productSomeReponseDto.originalPrice.toLocaleString(
                                                                'vi-VN',
                                                            )}{' '}
                                                            <span>&#8363;</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quantity adjustment */}
                                            <div className="flex items-center rounded-lg">
                                                <button
                                                    onClick={() => onRemove(product.id)}
                                                    className="px-3 py-1 border"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className="w-10 text-center border py-1"
                                                    type="number"
                                                    min="1"
                                                    value={product.quantity}
                                                    readOnly
                                                />
                                                <button onClick={() => onAdd(product.id)} className="px-3 py-1 border">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {/* Total and Order Button */}
                            <div className="mt-6 p-4">
                                {/* Line */}
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex justify-between items-center mt-5">
                                    <div className="text-xl font-bold uppercase">Tổng tiền:</div>
                                    <div className="text-xl font-bold text-[#ff6700]">
                                        {getTotalPrice().toLocaleString('vi-VN')} <span>&#8363;</span>
                                    </div>
                                </div>
                                {/* Order Button */}
                                <div className="flex justify-center mt-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-16 rounded-lg mt-5">
                                        Đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
