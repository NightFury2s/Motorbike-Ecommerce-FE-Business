import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const DetailProduct = () => {
    const [images, setImages] = useState({
        img1: '/assets/images/NinjaZX_10R_2022.png',
        img2: 'assets/images/Kawasaki_Z1000.png',
        img3: '/assets/images/BWM_s1000r.png',
        img4: '/assets/images/BMW_S1000RR_2020.jpg',
    });

    const [activeImg, setActiveImage] = useState(images.img1);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

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
        <div className="rounded-lg overflow-hidden">
            <div className="max-w-full mx-auto p-10">
                <div className="flex flex-col lg:flex-row gap-10 shadow-2xl ">
                    <div className="flex flex-col gap-4 lg:w-2/4 p-10 bg-[#FFFFFF] rounded-l-xl">
                        <h1 className="text-[#000000] text-3xl font-bold">NinjaZX 10R 2022</h1>
                        <h6 className="text-[#D3D3D3] text-xl font-semibold">Bảo hành tại Motorbike</h6>
                        <div className="flex ">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'}
                                        onClick={() => setRating(index)}
                                        onMouseEnter={() => setHover(index)}
                                        onMouseLeave={() => setHover(rating)}
                                    >
                                        <div className="text-2xl">
                                            {index <= rating ? <IoIosStar /> : <IoIosStarOutline />}
                                        </div>
                                    </button>
                                );
                            })}
                            <div>
                                <h3 className="text-xl font-bold text-[#777777] ml-4">4 (4 đánh giá)</h3>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="max-w-2xl max-h-96 mt-20 flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src={activeImg}
                                    alt=""
                                    className="max-w-full max-h-full object-contain rounded-xl mix-blend-multiply"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between h-24">
                            <img
                                src={images.img1}
                                alt="NinjaZX_10R_2022"
                                className="w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply"
                                onClick={() => setActiveImage(images.img1)}
                            />
                            <img
                                src={images.img2}
                                alt="Kawasaki_Z1000"
                                className="w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply"
                                onClick={() => setActiveImage(images.img2)}
                            />
                            <img
                                src={images.img3}
                                alt="BWM_s1000r"
                                className="w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply"
                                onClick={() => setActiveImage(images.img3)}
                            />
                            <img
                                src={images.img4}
                                alt="BMW_S1000RR_2020"
                                className="w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply"
                                onClick={() => setActiveImage(images.img4)}
                            />
                        </div>
                    </div>
                    {/* Product Description */}
                    <div className="flex flex-col gap-6 lg:w-2/4 p-10 bg-[#D9D9D9] rounded-r-lg">
                        <div className="flex items-center bg-[#D9D9D9">
                            {/* New Price */}
                            <h6 className="text-3xl text-[#FF5E22] font-bold">37.000.000 đ</h6>
                            {/* Old Price */}
                            <span className="text-xl font-medium text-[#777777] line-through ml-5">65.000.000 VNĐ</span>
                            {/* Discount */}
                            <div className="ml-5 bg-[#FF5E22] px-3 flex items-center justify-center rounded-md">
                                <span className="text-md font-medium text-black">-13%</span>
                            </div>
                        </div>

                        <h6 className="text-[#000000] text-2xl font-bold">Mô tả sản phẩm:</h6>
                        {/* Product Description */}
                        <p className="text-gray-700 text-xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        {/* Quantity */}
                        <div className="flex flex-row items-center gap-12 ">
                            <div className="flex items-center my-4">
                                <span className="text-xl font-semibold">Số lượng:</span>
                                <button
                                    className="border-none flex text-3xl p-0 mx-2 cursor-pointer"
                                    onClick={decreaseQty}
                                >
                                    <AiFillMinusCircle />
                                </button>

                                {/* Ô nhập số lượng */}
                                <input
                                    className="w-12 text-center border-2 border-gray-300 rounded-md"
                                    type="number"
                                    min="1"
                                    value={qty}
                                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value)))}
                                />

                                {/* Nút tăng số lượng */}
                                <button
                                    className="border-none flex text-3xl p-0 mx-2 cursor-pointer"
                                    onClick={increaseQty}
                                >
                                    <AiFillPlusCircle />
                                </button>
                            </div>
                        </div>
                        {/* Add to Cart Button */}
                        <div className="flex justify-center">
                            {/* Add to Cart Button */}
                            <button className="flex items-center justify-center bg-[#FF9700] text-white text-2xl rounded-l-lg px-3 py-3 text-center w-1/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <FaCartPlus className="text-white mr-2" />
                            </button>
                            {/* Buy now Button */}
                            <button className="bg-[#FF5E22] text-white font-bold rounded-r-lg text-[15px] px-5 py-1.5 text-center w-2/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
