import React from 'react';
import { FaPlus, FaTrash, FaEdit, FaSearch } from 'react-icons/fa';

function RowProduct({ product }) {

    return (
        <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
                <input type="checkbox" />
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
            <td className="border border-gray-300 px-4 py-2">{product && product.originalPrice}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.discount}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.newPrice}</td>
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
    )

}

export default RowProduct;
