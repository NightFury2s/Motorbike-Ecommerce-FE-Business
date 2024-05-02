import React from 'react';
import { FaPlus, FaTrash, FaEdit, FaSearch } from 'react-icons/fa';

function RowProduct({ product, onDelete, onSelect, isSelected }) {
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
            <td className="border border-gray-300 px-4 py-2">{product.quantity > 0 ? 'Còn Hàng ' : 'Hết Hàng'}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.originalPrice}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.discount}</td>
            <td className="border border-gray-300 px-4 py-2">{product && product.newPrice}</td>
            <td className="border border-gray-300 px-4 py-2">Honda</td>
            <td className="border border-gray-300 text-center align-middle">
                <div className="flex justify-center items-center space-x-2">
                    <button onClick={() => onEdit(product.id)} className="focus:outline-none">
                        <FaEdit className="text-[#FFA800] text-lg" />
                    </button>
                    <button onClick={() => onDelete(product.id)} className="focus:outline-none">
                        <FaTrash className="cursor-pointer text-[#FF0000] text-lg" />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default RowProduct;
