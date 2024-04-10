import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { InputLoginField } from '@/components/constants/Input';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('');

    // Handle email change
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 py-40">
            <div className="px-8 py-6 md:px-12 md:py-10 text-left bg-white shadow-lg max-w-lg w-full">
                {/* Title */}
                <h3 className="text-2xl font-bold text-center p-2">Quên mật khẩu</h3>
                {/* Description */}
                <p className="mt-4 p-2 text-center">Vui lòng nhập email để lấy lại mật khẩu</p>
                {/* Form */}
                <form action="">
                    <div className="text-2xl">
                        <div className="mt-4 flex flex-col justify-center items-center">
                            <InputLoginField
                                Icon={FaEnvelope} // Biểu tượng cho input
                                type="email"
                                placeholder="Nhập email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className="flex items-baseline justify-between mt-4 ml-10 mb-10">
                            <a href="#" className="text-base font-semibold text-blue-600 hover:underline">
                                Đăng nhập?
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <button className="px-20 py-3 leading-5 text-lg text-white transition-colors duration-200 transform bg-[#0F3187] rounded-full hover:bg-blue-700 focus:outline-none">
                            Lấy lại mật khẩu
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center">
                    Bạn chưa có tài khoản?
                    <a href="#" className="text-blue-600 hover:underline ml-4 text-lg font-semibold">
                        Đăng ký
                    </a>
                </p>
            </div>
        </div>
    );
}
