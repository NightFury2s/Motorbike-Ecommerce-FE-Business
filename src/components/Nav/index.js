import Link from 'next/link';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '@/context/AuthContext';
import { useContext, useEffect, useState, useRef } from 'react';
import { FaCaretDown, FaCaretRight, FaSearch } from 'react-icons/fa';

export default function Nav({ setShowLoginModal, setShowRegisterModal }) {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [userInfo, setUserInfo] = useState(null);

    // Close dropdown when click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    // Check if token exists in localStorage when component mounts
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        const token = localStorage.getItem('token');
        if ((token, storedUserInfo)) {
            // If token exists, set isAuthenticated to true
            setIsAuthenticated(true);
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, [setIsAuthenticated]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo'); // Đảm bảo xóa userInfo
        setIsAuthenticated(false);
        setUserInfo(null);
        window.location.href = '/';
    };

    return (
        <>
            <div className="grid w-full place-items-center rounded-lg p-6 pb-7 lg:overflow-visible">
                <div className="-m-7 max-h-[768px] w-[calc(100%+48px)]">
                    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-3 text-white bg-[#0F3187] rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                        <div className="flex items-center justify-between text-blue-gray-900">
                            <Link
                                href={'/'}
                                className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
                            >
                                Motorbike Ecommerce
                            </Link>

                            {/* Search bar */}
                            <div className="relative flex w-full gap-2 md:w-max">
                                <div className="relative h-10 w-full min-w-[30rem] ">
                                    <input
                                        type="search"
                                        className="peer h-full w-full rounded-[7px] border bg-[#D9D9D9] px-3 py-3.5 pr-20 font-sans text-sm font-normal !text-black transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-transparent peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-transparent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Tìm kiếm...
                                    </label>
                                </div>
                                <button
                                    className="!absolute right-1 select-none py-2 px-2 text-center align-middle font-sans font-bold uppercase transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    <FaSearch className="text-xl text-black" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-x-5">
                                    {/* Motorcycle */}
                                    <Link href={'/ProductPage'}>
                                        <button
                                            className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                            type="button"
                                        >
                                            <span>Xe máy</span>
                                        </button>
                                    </Link>
                                    {/* Accessary */}
                                    <Link href={'#'}>
                                        <button
                                            className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                            type="button"
                                        >
                                            <span>Phụ tùng</span>
                                        </button>
                                    </Link>
                                    {/* Login */}
                                    {isAuthenticated ? (
                                        // Render FaUserCircle button if authenticated
                                        <div ref={dropdownRef} className="relative flex items-center">
                                            <FaUserCircle
                                                className="cursor-pointer text-4xl text-[#FFFFFF]"
                                                onClick={() => setShowDropdown(!showDropdown)}
                                            />
                                            <span
                                                className="ml-2 font-bold text-white cursor-pointer"
                                                onClick={() => setShowDropdown(!showDropdown)}
                                            >
                                                {userInfo?.username}
                                            </span>
                                            {showDropdown ? (
                                                <FaCaretDown
                                                    className="ml-2 text-xl text-white cursor-pointer"
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                />
                                            ) : (
                                                <FaCaretRight
                                                    className="ml-2 text-xl text-white cursor-pointer"
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                />
                                            )}

                                            {showDropdown && (
                                                <div className="absolute right-0 mt-72 w-48 py-5 bg-white shadow-xl rounded-md overflow-hidden">
                                                    <div className="flex flex-col justify-center items-center p-2">
                                                        <FaUserCircle className="text-4xl text-[#949393]" />
                                                        <h3 className="font-bold text-xl text-black mt-3">
                                                            <span>{userInfo.username}</span>
                                                        </h3>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <hr className="w-3/4 border-gray-300" />
                                                    </div>
                                                    <ul className="text-gray-700">
                                                        <Link href={'/ProfilePage'}>
                                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                                Xem hồ sơ
                                                            </li>
                                                        </Link>
                                                        <li
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                                                            onClick={() => {
                                                                handleLogout();
                                                                setShowDropdown(false); /* handleLogout */
                                                            }}
                                                        >
                                                            Đăng xuất
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // Render your regular buttons for login and register
                                        <>
                                            <button
                                                className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                                onClick={() => setShowLoginModal(true)}
                                            >
                                                Đăng nhập
                                            </button>
                                            <button
                                                className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white bg-black uppercase align-middle transition-all rounded-lg select-none hover:bg-black/30 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                                onClick={() => setShowRegisterModal(true)}
                                            >
                                                Đăng ký
                                            </button>
                                        </>
                                    )}
                                    {/* Cart */}
                                    <div className="hidden px-5 py-3 cursor-pointer font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                                        <Link href={'/CartPage'}>
                                            <FaShoppingCart className="text-2xl" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
