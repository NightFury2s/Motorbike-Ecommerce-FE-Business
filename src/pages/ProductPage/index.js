import FilterProduct from '../../components/FilterProduct';
import ProductCard from '../../components/constants/Card';
import { useEffect, useState } from 'react';
import { dataPageProduct } from '../api/api';
import { Pagination } from '@nextui-org/react';
import Link from 'next/link';

function ProductPage() {
    const [motorbikeProducts, setMotorbikeProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, SetCurrentPage] = useState(0);
    const [apiFiter, setApiFiter] = useState(null);
    const [link, setLink] = useState('/productcar/getsome');

    const productsData = async (link, currentPage, type) => {
        try {
            const motorbikeData = await dataPageProduct(link, currentPage, type);
            setMotorbikeProducts(motorbikeData.productSomeReponseDtos);
            setTotalPage(motorbikeData.totalPages);
            return 'sucsseful';
        } catch (error) {
            console.error('Error fetching products:', error);
            return 'err';
        }
    };

    const handlePageChange = (index) => {
        console.log(link);
        const pageCondition = index <= 0 ? 0 : index - 1;
        SetCurrentPage(pageCondition);
        productsData(link, pageCondition, apiFiter || 1);
    };
    // filter
    useEffect(() => {
        productsData(link, currentPage, apiFiter);
    }, [apiFiter]);

    // mac dinh
    useEffect(() => {
        productsData(link, currentPage, 1);
    }, []);

    const filterMoto = [
        {
            name: 'Kawasaki',
            link: '1',
        },
        {
            name: 'Ducati',
            link: '2',
        },
        {
            name: 'Honda',
            link: '3',
        },
        {
            name: 'Suziki',
            link: '4',
        },
    ];

    const filterAccessary = [
        {
            name: 'Dầu nhớt',
            link: '5',
        },
        {
            name: 'Phanh xe',
            link: '6',
        },
        {
            name: 'Gương',
            link: '7',
        },
        {
            name: 'Bánh xe',
            link: '8',
        },
    ];

    return (
        <div className="ProductPage-container">
            <div className="ProductPage-name">
                <h6 style={{ position: 'absolute', zIndex: '1', backgroundColor: '#d9d9d9', padding: '0px 20px' }}>
                    Xe Máy
                </h6>
                <div className="ProductPage-line"></div>
            </div>
            <div className="ProductPage-total-filter">
                <h3 className="ProductPage-total">12 Sản Phẩm </h3>
                <div className="ProductPage-filter">
                    <span className="ProductPage-filter-name">Sắp xếp theo: </span>
                    <select>
                        <option> - Chọn tiêu chí - </option>
                        <option> Giá từ thấp đến cao </option>
                        <option> Giá từ cao đến thấp </option>
                    </select>
                </div>
            </div>

            <div className="ProductPage-content">
                <div className="ProductPage-content-filter">
                    <h1 className="ProductPage-content-filter-name"> Bộ Lọc </h1>
                    <FilterProduct
                        filter={filterMoto}
                        setApiFiter={setApiFiter}
                        SetCurrentPage={SetCurrentPage}
                        setLink={setLink}
                    />
                    <FilterProduct
                        filter={filterAccessary}
                        setApiFiter={setApiFiter}
                        setLink={setLink}
                        SetCurrentPage={SetCurrentPage}
                    />
                </div>

                <div className="ProductPage-content-main">
                    {motorbikeProducts &&
                        motorbikeProducts.map((product, index) => (
                            <div key={index} style={{ width: '25.5%', margin: '0 2px 7px', overflow: 'hidden' }}>
                                <ProductCard style={{ width: '100%', margin: '0 2px' }} product={product} />
                            </div>
                        ))}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            marginTop: '30px',
                            zIndex: '1',
                        }}
                    >
                        <Pagination showControls onChange={handlePageChange} total={totalPage} initialPage={1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
