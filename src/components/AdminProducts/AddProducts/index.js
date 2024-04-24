import React, { useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { FaUpload } from 'react-icons/fa6';

const AddProducts = ({ activeContent }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const motorcycleBrands = ['Honda', 'Ducati', 'Kawasaki', 'Suzuki'];
    const parts = ['Gương', 'Phanh', 'Bánh xe', 'Đèn'];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedBrand(''); // Reset brand selection when category changes
    };

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);
    };

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    };

    const getTitle = () => {
        switch (activeContent) {
            case 'products':
                return (
                    <span className="flex justify-center items-center font-thin text-xl">
                        Sản phẩm <MdKeyboardDoubleArrowRight className="mx-2 font-thin" /> Danh sách sản phẩm
                    </span>
                );
            case 'addProduct':
                return (
                    <span>
                        Sản phẩm <MdKeyboardDoubleArrowRight className="mx-2 font-thin" /> Thêm sản phẩm
                    </span>
                );
            default:
                return 'Sản phẩm';
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2>{getTitle()}</h2>
            </div>
            <div className="bg-white p-4 px-10 h-[calc(100vh-150px)]">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <label className="mr-32 flex items-center text-xl font-bold">
                            <input
                                type="radio"
                                name="category"
                                value="motorbike"
                                checked={selectedCategory === 'motorbike'}
                                onChange={handleCategoryChange}
                                className="mr-1"
                            />
                            Xe máy
                        </label>
                        <label className="mr-32 flex items-center text-xl font-bold">
                            <input
                                type="radio"
                                name="category"
                                value="accessories"
                                checked={selectedCategory === 'accessories'}
                                onChange={handleCategoryChange}
                                className="mr-1"
                            />
                            Phụ tùng
                        </label>
                    </div>
                </div>

                <div className="flex justify-start">
                    {/* Product Name */}
                    <div className="flex flex-col items-start mb-4 mr-52">
                        <h2 className="mb-3 text-lg">Tên sản phẩm</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base"
                            value={productName}
                            onChange={handleProductNameChange}
                        />
                    </div>

                    {/* Category Brand */}
                    <div className="flex flex-col items-start mb-4 mr-52">
                        <h2 className="mb-3 text-lg">Danh mục</h2>
                        <select
                            className="px-3 py-2 border rounded-md text-base italic"
                            value={selectedBrand}
                            onChange={handleBrandChange}
                            disabled={!selectedCategory}
                        >
                            <option value="">-Chọn danh mục-</option>
                            {selectedCategory === 'motorbike' &&
                                motorcycleBrands.map((brand) => (
                                    <option key={brand} value={brand}>
                                        {brand}
                                    </option>
                                ))}
                            {selectedCategory === 'accessories' &&
                                parts.map((part) => (
                                    <option key={part} value={part}>
                                        {part}
                                    </option>
                                ))}
                        </select>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-start mb-4">
                        <h2 className="mb-3 text-lg">Giá</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>

                <div className="flex justify-start">
                    {/* Product Name */}
                    <div className="flex flex-col items-start mb-4 mr-52">
                        <h2 className="mb-3 text-lg">Phần trăm giảm giá</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base"
                            value={productName}
                            onChange={handleProductNameChange}
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-start mb-4">
                        <h2 className="mb-3 text-lg">Giá sau khi đã giảm</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>

                <div className="flex justify-start">
                    {/* Images Product */}
                    <div className="flex flex-col items-start mb-4 mr-52">
                        <h2 className="mb-3 text-lg">Ảnh</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, index)}
                                        style={{ display: 'none' }}
                                        id={`file-input-${index}`}
                                    />
                                    <label
                                        htmlFor={`file-input-${index}`}
                                        className="block w-24 h-24 border-2 border-dashed border-gray-300 rounded-md cursor-pointer justify-center items-center"
                                    >
                                        {images[index] ? (
                                            <img
                                                src={URL.createObjectURL(images[index])}
                                                alt="Thumbnail"
                                                className="max-w-full max-h-full"
                                            />
                                        ) : (
                                            <span>Upload</span>
                                        )}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Upload Images */}
                <div className="flex justify-start mt-4 ">
                    <button
                        className="bg-[#12419b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center align-middle"
                        // onClick={uploadImages}
                    >
                        <FaUpload />
                        Tải ảnh lên
                    </button>
                </div>

                {/* Description */}
                <div className="flex flex-col items-start mb-4 mt-4">
                    <label className="block text-lg font-medium text-gray-700 mb-4">Nội dung</label>
                    <textarea placeholder="Nhập nội dung..." className="w-full p-2 border rounded" rows="4"></textarea>
                </div>

                <div className="flex justify-end p-4 space-x-4">
                    <button className="bg-[#12419b] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Thêm
                    </button>
                    <button className="bg-[#777777] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Thoát
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
