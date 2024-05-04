import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserCircle, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import ContentProducts from '@/components/AdminProducts/Contents';
import AddProducts from '@/components/AdminProducts/AddProducts';
import UpdateProducts from '@/components/AdminProducts/UpdateProducts';
import ProtectedRoute from '@/components/ProtectedRoute';

const AdminPage = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeContent, setActiveContent] = useState('default');
    const [productToEdit, setProductToEdit] = useState(null);

    // Handle toggle options
    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
        handleItemClick('products');
    };

    // Handle item click
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Handle content change
    const handleContentChange = (content, e) => {
        e.stopPropagation();
        setActiveContent(content);
    };

    const changeContent = (content, product = null) => {
        setActiveContent(content);
        setProductToEdit(product);
    };

    return (
        <ProtectedRoute>
            <div className="min-h-screen flex flex-col">
                {/* Navbar */}
                <nav className="flex justify-between items-center bg-[#2B92E4] text-white p-4">
                    <Link href={'/'}>
                        <div className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                            Motorbike Ecommerce
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <FaUserCircle className="text-3xl" />
                        </div>
                    </div>
                </nav>

                {/* Body */}
                <div className="flex flex-1 bg-[#EAEAEA]">
                    {/* Sidebar */}
                    <div className="w-60 bg-[#2B92E4]">
                        <ul className="text-white">
                            <li
                                className={`text-lg font-semibold cursor-pointer p-4 ${
                                    selectedItem === 'products' ? 'bg-[#9ECEE8]' : ''
                                }`}
                                onClick={handleToggleOptions}
                            >
                                <div className="flex items-center justify-between">
                                    Sản phẩm
                                    {showOptions ? <FaChevronDown /> : <FaChevronRight />}
                                </div>
                                {showOptions && (
                                    <ul className="ml-4 mt-2 text-base">
                                        <li
                                            className="mt-2 hover:text-gray-300"
                                            onClick={(e) => handleContentChange('products', e)}
                                        >
                                            Danh sách sản phẩm
                                        </li>
                                        <li
                                            className="mt-2 hover:text-gray-300"
                                            onClick={(e) => handleContentChange('addProduct', e)}
                                        >
                                            Thêm sản phẩm
                                        </li>
                                        <li onClick={(e) => handleContentChange('updateProduct', e)}></li>
                                    </ul>
                                )}
                            </li>
                            <li className="ml-4 text-lg font-semibold cursor-pointer">Đăng xuất</li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 overflow-auto">
                        {activeContent === 'products' ? (
                            <ContentProducts activeContent={activeContent} changeContent={changeContent} />
                        ) : activeContent === 'addProduct' ? (
                            <AddProducts activeContent={activeContent} />
                        ) : activeContent === 'updateProduct' ? (
                            <UpdateProducts
                                activeContent={activeContent}
                                product={productToEdit}
                                changeContent={changeContent}
                            />
                        ) : (
                            <div className="text-center text-lg">Đây là Admin Page</div>
                        )}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default AdminPage;
