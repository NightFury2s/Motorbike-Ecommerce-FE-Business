import React, { useState } from 'react';
import { AiTwotoneShop } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';

const CartPage = () => {
    const [images, setImages] = useState({
        img1: '/assets/images/NinjaZX_10R_2022.png',
        img2: 'assets/images/Kawasaki_Z1000.png',
        img3: '/assets/images/BWM_s1000r.png',
        img4: '/assets/images/BMW_S1000RR_2020.jpg',
    });

    const [qty, setQty] = useState(1);
    // Increase quantity
    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    // Decrease quantity
    const decreaseQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-6xl mx-auto">
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
                        <div className="mb-4 p-4 bg-white rounded-xl shadow-xl-xl">
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
                                Nhân viên tư vấn, hỗ trợ khách hàng nhiệt tình{' '}
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 lg:w-2/5 px-2">
                        {/* Box for selected products */}
                        <div className="p-4 bg-white rounded-lg shadow-xl h-full">
                            <h2 className="text-lg font-bold mb-2 uppercase">Sản phẩm đã chọn</h2>
                            <div className="mb-6">
                                {/* Line */}
                                <div className="border-t border-gray-200 my-2"></div>
                                {/* Product display */}
                                <div className="flex items-center my-4">
                                    <img
                                        src={images.img1}
                                        alt="NinjaZX 10R 2022"
                                        className="w-32 h-24 bg-contain object-cover mr-4"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg mb-2">NinjaZX 10R 2022</h3>
                                        <div className="flex items-center">
                                            <div className="text-lg text-[#ff6700] font-bold">37.000.000 đ</div>
                                            <div className="text-[#bbb] line-through text-sm ml-5">65.000.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Quantity adjustment */}
                                <div className="flex items-center rounded-lg">
                                    <button onClick={decreaseQty} className="px-3 py-1 border">
                                        -
                                    </button>
                                    <input
                                        className="w-10 text-center border py-1"
                                        type="number"
                                        min="1"
                                        value={qty}
                                        readOnly
                                    />
                                    <button onClick={increaseQty} className="px-3 py-1 border">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                {/* Line */}
                                <div className="border-t border-gray-200 my-2"></div>
                                {/* Product display */}
                                <div className="flex items-center my-4">
                                    <img
                                        src={images.img1}
                                        alt="NinjaZX 10R 2022"
                                        className="w-32 h-24 bg-contain object-cover mr-4"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="font-bold mb-2">NinjaZX 10R 2022</h3>
                                        <div className="flex items-center">
                                            <div className="text-lg text-[#ff6700] font-bold">37.000.000 đ</div>
                                            <div className="text-[#bbb] line-through text-sm ml-5">65.000.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Quantity adjustment */}
                                <div className="flex items-center rounded-lg">
                                    <button onClick={decreaseQty} className="px-3 py-1 border">
                                        -
                                    </button>
                                    <input
                                        className="w-10 text-center border py-1"
                                        type="number"
                                        min="1"
                                        value={qty}
                                        readOnly
                                    />
                                    <button onClick={increaseQty} className="px-3 py-1 border">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Total and Order Button */}
                            <div className="mt-6 p-4">
                                {/* Line */}
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex justify-between items-center mt-5">
                                    <div className="text-xl font-bold uppercase">Tổng tiền:</div>
                                    <div className="text-xl font-bold text-[#ff6700]">111.000.000 đ</div>
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
