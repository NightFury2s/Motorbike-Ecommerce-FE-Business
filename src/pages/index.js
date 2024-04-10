import Head from 'next/head';
import SlideHome from '@/components/Slide/index.js';
import ProductCard from '@/components/constants/Card';
import React, { useState, useEffect } from 'react';
import { MotorbikeData, AccessoriesData } from '@/pages/api/api';
import Link from 'next/link';

export default function Home() {
    const [motorbikeProducts, setMotorbikeProducts] = useState([]);
    const [accessoriesProducts, setAccessoriesProducts] = useState([]);

    useEffect(() => {
        const productsData = async () => {
            try {
                const motorbikeData = await MotorbikeData();
                setMotorbikeProducts(motorbikeData);

                const accessoriesData = await AccessoriesData();
                setAccessoriesProducts(accessoriesData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        productsData();
    }, []);

    return (
        <div>
            <Head>
                <title>Motorcycle Ecommerce</title>
            </Head>
            <main className="-z-1">
                {/* Slide Show */}
                <div>
                    <SlideHome />
                </div>

                {/* Motorbike Section */}
                <div>
                    <div className="text-center align-middle p-5">
                        <div className="flex justify-between items-center mx-auto">
                            <h1 className="font-bold text-3xl text-[#FF5E22] rounded-lg transition-colors">
                                Top những xe máy bán chạy nhất
                            </h1>
                            <Link href="/ProductPage">
                                <button className="text-blue-500 text-lg font-semibold rounded-lg">Xem thêm</button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="w-full h-auto bg-white shadow-2xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                            {motorbikeProducts &&
                                motorbikeProducts.map((product, index) => (
                                    <Link key={index} href={`/DetailProduct?id=${product.id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Accessories Section */}
                <div>
                    <div className="text-center align-middle p-5">
                        <div className="flex justify-between items-center mx-auto">
                            <h1 className="font-bold text-3xl text-[#FF5E22] rounded-lg transition-colors">
                                Top những phụ tùng bán chạy nhất
                            </h1>
                            <Link href="/ProductPage">
                                <button className="text-blue-500 text-lg font-semibold rounded-lg">Xem thêm</button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="w-full h-auto bg-white shadow-2xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                            {accessoriesProducts &&
                                accessoriesProducts.map((product, index) => (
                                    <Link key={index} href={`/DetailProduct?id=${product.id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}