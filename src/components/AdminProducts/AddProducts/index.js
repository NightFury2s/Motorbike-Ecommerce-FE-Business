import React, { useState } from 'react';
import { addProduct } from '@/pages/api/api';
import CategorySelector from '@/components/constants/CategorySelector';
import CategoryDropdown from '@/components/constants/CategoryDropdown';
import ImageUploader from '@/components/constants/ImageUploader';
import DescriptionUploader from '@/components/constants/DescriptionUploader';
import TitleManager from '@/components/constants/TitleManager';
import SuccessModal from '@/components/SuccessModal';

const AddProducts = ({ activeContent }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('0');
    const [quantity, setQuantity] = useState('0');
    const [detailType, setDetailType] = useState(0);
    const [idTypeProduct, setIdTypeProduct] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState('0');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleProductNameChange = (e) => setProductName(e.target.value);

    const handlePriceChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setPrice(value || '0');
    };

    const handleIdTypeProductChange = (value) => {
        const [link, type] = value.split(',');
        setIdTypeProduct(parseInt(link, 10));
        setDetailType(parseInt(type, 10));
    };

    const handleDiscount = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setDiscountPercentage(value || '0');
    };

    // Add product
    const handleAddProduct = async () => {
        const productData = {
            name: productName,
            price: parseFloat(price),
            quantity: parseInt(quantity, 10),
            detailType: parseInt(detailType, 10),
            idTypeProduct: parseInt(idTypeProduct, 10),
            discount: parseFloat(discountPercentage),
            describe: description,
            images: images,
        };

        const response = await addProduct(productData);
        if (response.success) {
            console.log('Sản phẩm đã được thêm thành công:', response.data);
            setShowSuccessModal(true);
        } else {
            console.error('Không thể thêm sản phẩm:', response.message);
        }
    };

    // Discount calculation
    const calculateDiscount = () => {
        const originalPrice = parseFloat(price) || 0;
        const discount = parseFloat(discountPercentage) / 100;
        const discountedPrice = originalPrice * (1 - discount);
        return originalPrice && !isNaN(discountedPrice) ? `${discountedPrice.toLocaleString('vi-VN')} VNĐ` : '';
    };

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        setQuantity(value || '0');
    };

    return (
        <div className="mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <TitleManager activeContent={activeContent} />
            </div>

            <div className="bg-white p-4 md:px-10 pb-10 md:pb-0">
                <div className="mb-6">
                    <CategorySelector onCategoryChange={handleCategoryChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product Name */}
                    <div>
                        <h2 className="mb-3 text-lg">Tên sản phẩm</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base w-64"
                            value={productName}
                            onChange={handleProductNameChange}
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <h2 className="mb-3 text-lg">Danh mục</h2>
                        <CategoryDropdown category={category} onValueChange={handleIdTypeProductChange} />
                    </div>

                    {/* Price */}
                    <div>
                        <h2 className="mb-3 text-lg">Giá</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base w-64"
                            value={`${parseInt(price).toLocaleString('vi-VN')} VNĐ`}
                            onChange={handlePriceChange}
                        />
                    </div>

                    {/* Discount Percentage */}
                    <div>
                        <h2 className="mb-3 text-lg">Phần trăm giảm giá</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base w-64"
                            value={discountPercentage + (discountPercentage ? '%' : '')}
                            onChange={handleDiscount}
                            onFocus={(e) => e.target.value === '0%' && setDiscountPercentage('')}
                            onBlur={(e) => {
                                if (e.target.value === '') {
                                    setDiscountPercentage('0');
                                }
                            }}
                        />
                    </div>

                    {/* Discounted Price */}
                    <div>
                        <h2 className="mb-3 text-lg">Giá sau khi đã giảm</h2>
                        <input
                            type="text"
                            className="px-3 py-2 border rounded-md text-base w-64 bg-[#D8D8D8]"
                            value={calculateDiscount()}
                            readOnly
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <h2 className="mb-3 text-lg">Số lượng</h2>
                        <input
                            type="number"
                            className="px-3 py-2 border rounded-md text-base w-64"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onFocus={(e) => e.target.value === '0' && setQuantity('')}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6">
                    <ImageUploader onImagesChange={setImages} />
                </div>

                {/* Caution */}
                <div className="mt-6">
                    <span className="text-base font-thin text-red-500">
                        * Lưu ý: Chỉ được thêm tối đa 4 ảnh. Hỗ trợ tệp .jpg, .png, ...
                    </span>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <DescriptionUploader description={description} setDescription={setDescription} />
                </div>

                {/* Success Modal & Button */}
                <div className="flex justify-end mt-6 p-4 space-x-4">
                    {showSuccessModal && (
                        <SuccessModal
                            setShowSuccessModal={setShowSuccessModal}
                            title="Thêm sản phẩm thành công!"
                            message="Chào mừng bạn đến với Motobike Ecommerce."
                            onClose={() => {
                                setShowSuccessModal(false);
                            }}
                        />
                    )}
                    <button
                        className="bg-[#2B92E4] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleAddProduct}
                    >
                        Thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
