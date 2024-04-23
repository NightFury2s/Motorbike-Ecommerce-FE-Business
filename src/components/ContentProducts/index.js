import React from 'react';
import { FaPlus, FaTrash, FaEdit, FaSearch } from 'react-icons/fa';

const ContentProducts = () => {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Sản phẩm</h2>
            </div>
            <div className="bg-white p-4">
                <div className="flex justify-between items-center mb-4">
                    {/* Left-side buttons and dropdown */}
                    <div className="flex items-center">
                        <button className="mr-4 flex items-center px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                            <FaPlus className="mr-1" /> Thêm danh mục
                        </button>
                        <button className="mr-4 flex items-center px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600">
                            <FaTrash className="mr-1" /> Xoá tất cả
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    {/* Sort */}
                    <div className="flex items-center">
                        <h2 className="mr-4">Danh mục</h2>
                        <select className="px-3 py-2 border rounded-md mr-4 px-4">
                            <option value="motorbike">Xe máy</option>
                            <option value="accessories">Phụ tùng</option>
                        </select>
                    </div>

                    {/* Search bar */}
                    <div className="flex items-center relative">
                        <input
                            type="search"
                            className="pl-4 pr-3 py-2 border rounded-md focus:outline-none italic w-full"
                            placeholder="Tìm kiếm"
                        />
                        <FaSearch className="absolute right-3 text-gray-500" />
                    </div>
                </div>

                {/* Table */}
                <table className="w-full border-collapse border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">
                                <input type="checkbox" />
                            </th>
                            <th className="border border-gray-300 px-4 py-2">Mã Sản Phẩm</th>
                            <th className="border border-gray-300 px-4 py-2">Tên Sản Phẩm</th>
                            <th className="border border-gray-300 px-4 py-2">Ảnh</th>
                            <th className="border border-gray-300 px-4 py-2">Số lượng</th>
                            <th className="border border-gray-300 px-4 py-2">Tình trạng</th>
                            <th className="border border-gray-300 px-4 py-2">Giá gốc (VNĐ)</th>
                            <th className="border border-gray-300 px-4 py-2">Phần trăm giảm giá (%)</th>
                            <th className="border border-gray-300 px-4 py-2">Giá giảm giá (VNĐ)</th>
                            <th className="border border-gray-300 px-4 py-2">Danh mục</th>
                            <th className="border border-gray-300 px-4 py-2">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Data rows here */}
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="checkbox" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">01</td>
                            <td className="border border-gray-300 px-4 py-2">Wave RSX</td>
                            <td className="border border-gray-300 px-4 py-2">Ảnh 1</td>
                            <td className="border border-gray-300 px-4 py-2">5</td>
                            <td className="border border-gray-300 px-4 py-2">Còn hàng</td>
                            <td className="border border-gray-300 px-4 py-2">30.000.000 VNĐ</td>
                            <td className="border border-gray-300 px-4 py-2">10</td>
                            <td className="border border-gray-300 px-4 py-2">27.000.000 VNĐ</td>
                            <td className="border border-gray-300 px-4 py-2">Honda</td>
                            <td className="px-4 py-2 flex justify-center">
                                <button className="mr-2">
                                    <FaEdit className="text-[#FFA800] text-[20px]" />
                                </button>
                                <button>
                                    <FaTrash className="text-[#FF0000] text-[20px]" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContentProducts;
