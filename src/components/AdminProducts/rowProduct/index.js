import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/router';

function RowProduct({ product, onDelete, onSelect, isSelected, changeContent }) {
    const router = useRouter();

    return (
        <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" checked={isSelected} onChange={() => onSelect(product.id)} />
            </td>
            <td className="border border-gray-300 px-4 py-2">{product && product.id}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.name}</td>
            <td className="border border-gray-300 px-4 py-2">
                {product && product.images && product.images.length > 0 && (
                    <img
                        src={'data:image/png;base64,' + product.images[0].imgData}
                        alt={product.name}
                        style={{ width: '200px', height: '100px', objectFit: 'contain' }}
                    />
                )}
            </td>
            <td className="border border-gray-300 px-4 py-2">{product && product.quantity}</td>
            <td className="border border-gray-300 px-4 py-2">{product.quantity > 0 ? "Còn Hàng " : 'Hết Hàng'}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.originalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.discount}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.detailType}</td>
            <td  className="px-4 py-2 flex justify-center mt-12">
                <button className="mr-2">
                    <FaEdit className="text-[#FFA800] text-[20px]" />
                </button>
                <button>
                    <FaTrash className="text-[#FF0000] text-[20px]" />
                </button>
            </td>
        </tr>
    );
}

export default RowProduct;
