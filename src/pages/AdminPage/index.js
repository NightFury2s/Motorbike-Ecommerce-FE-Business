import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import ContentProducts from '@/components/ContentProducts';
// import { getSession } from 'next-auth/react';

// export async function getServerSideProps(context) {
//     const session = await getSession(context);
//     if (!session || session.user.role !== 'USER') {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: {},
//     };
// }

const AdminPage = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
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
                <div className="w-64 bg-[#2B92E4] p-4">
                    <ul className="text-white">
                        <li className="text-lg font-semibold cursor-pointer" onClick={handleToggleOptions}>
                            Sản phẩm
                            {showOptions && (
                                <ul className="ml-4 mt-2 text-base">
                                    <li className="mt-2 hover:text-gray-300">
                                        <Link href="/products">Danh sách sản phẩm</Link>
                                    </li>
                                    <li className="mt-2 hover:text-gray-300">
                                        <Link href="/products/new">Thêm sản phẩm</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="mt-4 text-lg font-semibold cursor-pointer">Đăng xuất</li>
                    </ul>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 overflow-auto">
                    <ContentProducts />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
