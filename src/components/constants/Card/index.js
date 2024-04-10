import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    return (
        <div  className="relative flex justify-center ">
            <div className=" w-80 bg-[#f9f9f9] rounded-lg shadow-md relative">
                <a href="#">
                    {product && product.images && (
                        <img
                            className="p-5 rounded-t-lg mix-blend-multiply w-full h-48 object-contain"
                            src={'data:image/png;base64,' + product.images[0].imgData}
                            alt={product.name}
                        />
                    )}
                </a>
                {product.discount && (
                    <div className="absolute top-0 right-0 bg-[#FF5E22] text-black font-medium px-2 rounded">
                        -{product.discount}%
                    </div>
                )}

                <div className="px-7 pb-5 text-center">
                    {/* Products Name */}
                    {product && product.name && (
                        <a href="#">
                            <h5 className="text-xl font-bold tracking-tight text-black">{product.name}</h5>
                        </a>
                    )}
                    {/* Price */}
                    {product && product.originalPrice && (
                        <div className="flex justify-between items-center my-3">
                            <span className="text-[20px] font-bold text-[#FF0000]">
                                {product.newPrice.toLocaleString('vi-VN')} <span>&#8363;</span>
                            </span>
                            <span className="text-[15px] font-bold text-[#777777] line-through">
                                {product.originalPrice.toLocaleString('vi-VN')} <span>&#8363;</span>
                            </span>
                        </div>
                    )}
                    <div className="flex justify-center">
                        {/* Add to Cart Button */}
                        <button className="flex items-center justify-center bg-[#FF9700] text-white text-2xl rounded-l-lg px-3 py-1.5 text-center w-1/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
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
    );
};

export default ProductCard;
