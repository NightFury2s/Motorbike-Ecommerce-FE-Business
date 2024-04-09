import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

const DetailProduct = () => {
    const [images, setImages] = useState({
        img1: '/assets/images/NinjaZX_10R_2022.png',
        img2: 'assets/images/Honda_CBR_650.png',
        img3: '/assets/images/BWM_s1000r.png',
        img4: '/assets/images/BMW_S1000RR_2020.jpg',
    });

    const [activeImg, setActiveImage] = useState(images.img1);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="rounded-lg overflow-hidden">
            <div className="max-w-8xl mx-auto px-28 py-10">
                <div className="flex flex-col lg:flex-row gap-5 shadow-2xl ">
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
                            <div className="max-w-2xl max-h-96 mt-10 flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src={activeImg}
                                    alt=""
                                    className="max-w-full max-h-full object-contain rounded-xl mix-blend-multiply"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-5">
                            <div className="flex flex-row gap-4 h-24 max-w-xl justify-center p-2 rounded-lg">
                                {[images.img1, images.img2, images.img3, images.img4].map((imgSrc, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-center w-40 h-24 overflow-hidden rounded-md cursor-pointer mix-blend-multiply ${
                                            activeImg === imgSrc ? 'shadow-2xl' : ''
                                        } bg-[#D9D9D9]`}
                                        onClick={() => setActiveImage(imgSrc)}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`Hình ảnh ${index + 1}`}
                                            className="object-contain mix-blend-multiply"
                                        />
                                    </div>
                                ))}
                            </div>
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
                        <p className="text-gray-700 text-xl py-10">
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

                        {/* Add to Cart Button */}
                        <div className="flex justify-center mt-10">
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
