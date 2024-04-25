import React from 'react';

const CategoryDropdown = ({ category, onValueChange }) => {
    const motorcycleBrands = [
        { name: 'Kawasaki', link: '1', type: '1' },
        { name: 'Ducati', link: '2', type: '1' },
        { name: 'Honda', link: '3', type: '1' },
        { name: 'Suzuki', link: '4', type: '1' },
    ];

    const accessories = [
        { name: 'Dầu nhớt', link: '5', type: '2' },
        { name: 'Phanh xe', link: '6', type: '2' },
        { name: 'Gương', link: '7', type: '2' },
        { name: 'Bánh xe', link: '8', type: '2' },
    ];

    const isDisabled = !category;

    return (
        <select
            className="px-3 py-2 border rounded-md text-base italic"
            disabled={isDisabled}
            onChange={(e) => onValueChange(e.target.value)}
        >
            <option value="">-Chọn danh mục-</option>
            {category === 'motorbike' &&
                motorcycleBrands.map((brand) => (
                    <option key={brand.link} value={brand.link}>
                        {brand.name}
                    </option>
                ))}
            {category === 'accessories' &&
                accessories.map((part) => (
                    <option key={part.link} value={part.link}>
                        {part.name}
                    </option>
                ))}
        </select>
    );
};

export default CategoryDropdown;
