import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { useRouter } from 'next/router';
import { DetailProductData, ReviewsData } from '@/pages/api/api';

const DetailProduct = () => {
    const [activeImg, setActiveImage] = useState('');
    const router = useRouter();
    const { id } = router.query;
    const [reviewData, setReviewData] = useState({
        comments: [],
        quantityReviews: 0,
        averageRating: 0,
    });

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        // Fetch product details with id
        if (id) {
            DetailProductData(id)
                .then((productDetail) => {
                    setProductDetail(productDetail);
                    if (productDetail && productDetail.images && productDetail.images.length > 0) {
                        setActiveImage('data:image/png;base64,' + productDetail.images[0].imgData);
                    }
                })
                .catch((error) => console.error(error.message));

            // Fetch reviews for the product
            ReviewsData(id)
                .then((data) => {
                    if (data) {
                        setReviewData({
                            ...data,
                            averageRating: isNaN(parseFloat(data.averageRating)) ? 0 : parseFloat(data.averageRating),
                        });
                    }
                })
                .catch((error) => {
                    console.error('Failed to fetch reviews:', error);
                });
        }
    }, [id]);

    // Make sure to handle loading state or check if productDetail is null before trying to render details
    if (!productDetail) return <div>Loading...</div>;

    return (
        <div className="rounded-lg overflow-hidden">
            <div className="max-w-8xl mx-auto px-28 py-10">
                <div className="flex flex-col lg:flex-row gap-5 shadow-2xl ">
                    <div className="flex flex-col gap-4 lg:w-2/4 p-10 bg-[#FFFFFF] rounded-l-xl">
                        <h1 className="text-[#000000] text-3xl font-bold">{productDetail.name}</h1>
                        <h6 className="text-[#D3D3D3] text-xl font-semibold">Bảo hành tại Motorbike</h6>
                        <div className="flex ">
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={
                                            index <= Math.round(reviewData.averageRating)
                                                ? 'text-yellow-500'
                                                : 'text-gray-400'
                                        }
                                        style={{ cursor: 'default' }}
                                    >
                                        <div className="text-2xl">
                                            {index <= Math.round(reviewData.averageRating) ? (
                                                <IoIosStar />
                                            ) : (
                                                <IoIosStarOutline />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                            <div>
                                <h3 className="text-xl font-bold text-[#777777] ml-4">
                                    {reviewData.averageRating} ({reviewData.quantityReviews} đánh giá)
                                </h3>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-10 flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src={activeImg}
                                    alt="Active product image"
                                    className="max-w-full h-64 object-contain rounded-xl mix-blend-multiply"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-5">
                            <div className="flex flex-row gap-4 h-32 max-w-xl justify-center p-5 rounded-lg overflow-hidden">
                                {productDetail.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-center w-40 h-24 overflow-hidden rounded-md cursor-pointer ${
                                            'data:image/png;base64,' + image.imgData === activeImg ? 'shadow-xl' : ''
                                        } bg-[#D9D9D9] m-2`} // Thêm một chút margin xung quanh để shadow có chỗ hiển thị
                                        onClick={() => setActiveImage('data:image/png;base64,' + image.imgData)}
                                    >
                                        <img
                                            src={'data:image/png;base64,' + image.imgData}
                                            alt={`Hình ảnh ${index + 1}`}
                                            className="object-contain mix-blend-multiply bg-cover"
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
                            <h6 className="text-3xl text-[#FF5E22] font-bold">
                                {productDetail.newPrice.toLocaleString('vi-VN')} <span>&#8363;</span>
                            </h6>
                            {/* Old Price */}
                            <span className="text-xl font-medium text-[#777777] line-through ml-5">
                                {productDetail.originalPrice.toLocaleString('vi-VN')} <span>&#8363;</span>
                            </span>
                            {/* Discount */}
                            <div className="ml-5 bg-[#FF5E22] px-3 flex items-center justify-center rounded-md">
                                <span className="text-md font-medium text-black">-{productDetail.discount}%</span>
                            </div>
                        </div>

                        {/* Quantity */}
                        <h6 className="text-2xl font-bold">Số lượng: {productDetail.quantity}</h6>

                        <h6 className="text-[#000000] text-2xl font-bold">Mô tả sản phẩm:</h6>
                        {/* Product Description */}
                        <p className="text-gray-700 text-xl py-10">{productDetail.describe}</p>

                        {/* Add to Cart Button */}
                        <div className="flex justify-center mt-10 space-x-4">
                            {/* Add to Cart Button */}
                            <button className="flex items-center justify-center bg-[#2B92E4] text-white text-2xl rounded-lg px-3 py-3 text-center w-1/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
                                <FaCartPlus className="text-white mr-2" />
                            </button>
                            {/* Buy now Button */}
                            <button className="bg-[#2B92E4] text-white font-bold rounded-lg text-[15px] px-5 py-1.5 text-center w-2/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
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
