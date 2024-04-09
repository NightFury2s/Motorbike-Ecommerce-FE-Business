import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaUser } from 'react-icons/fa';
import { MdLockOutline, MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import InputComponent from '@/components/constants/Input';
import { setRegisterData } from '@/pages/api/api';
import { IoCloseCircleSharp } from 'react-icons/io5';

const RegisterModal = ({ setShowModal, setShowLoginModal }) => {
    // Close Modal Event
    const handleClose = (e) => {
        if (e.target.id === 'modal-wrapper') {
            setShowModal(false);
        }
    };

    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const dataSubmit = async (data) => {
        if (data.password === data.ConfirmPassword) {
            delete data.ConfirmPassword;
            setPasswordsMatch(false);
            try {
                // Giả sử setRegisterData trả về một Promise
                await setRegisterData(data);
                alert('Đăng ký thành công!');
                // Đặt thời gian chờ để chuyển sang modal đăng nhập sau khi hiển thị thông báo
                setTimeout(() => {
                    setShowModal(false);
                    setShowLoginModal(true);
                }, 1000); // Chờ 1 giây để người dùng kịp đọc thông báo
            } catch (error) {
                alert('Đăng ký không thành công. Vui lòng thử lại!');
            }
        } else {
            setPasswordsMatch(true);
            alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        }
    };

    return (
        <div
            id="modal-wrapper"
            onClick={handleClose}
            className="z-10 fixed inset-0 bg-[#2B92E4] bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
            <div id="modal-content" className="flex flex-col rounded-2xl items-center text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-[850px]">
                    {/* Register Section */}
                    <div className="w-2/4 py-36 px-12 bg-[#2B92E4] text-white rounded-tl-2xl rounded-bl-2xl flex flex-col justify-center items-center align-middle">
                        <h2 className="font-bold text-3xl mb-2">Đăng nhập</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Bạn đã có tài khoản ?</p>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                setShowLoginModal(true);
                            }}
                            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#2B92E4]"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    {/* Login Section */}
                    <div className="w-3/4 p-5 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-0 right-0 mt-2 mr-3 text-red text-xl text-black"
                        >
                            <IoCloseCircleSharp />
                        </button>
                        <div className="text-left font-bold">
                            <span className="text-[#2B92E4]">Motorbike</span> Ecommerce
                        </div>
                        <form onSubmit={handleSubmit(dataSubmit)} className="py-10">
                            <h2 className="text-3xl font-bold text-gray-600 mb-2">Đăng ký</h2>
                            <div className="border-2 w-10 border-gray-600 inline-block mb-2"></div>
                            <p className="text-gray-400 my-3">Tạo tài khoản</p>

                            <div style={{ display: 'grid', gap: '3px' }} className="flex flex-col">
                                {/* Username Field */}
                                <InputComponent
                                    icon={<FaUser className="text-gray-400 m-2" />}
                                    placeholder="Họ và tên(*)"
                                    textMessage="Vui lòng nhập tên của bạn"
                                    register={register}
                                    name="fullName"
                                    errors={errors}
                                    // setValue={setValue}
                                />
                                {/*     email */}
                                <InputComponent
                                    icon={<MdEmail className="text-gray-400 m-2" />}
                                    placeholder="Email(*)"
                                    textMessage="Vui lòng nhập Email của bạn"
                                    register={register}
                                    name="email"
                                    errors={errors}
                                    // setValue={setValue}
                                    pattern={{
                                        value: /^\S+@\S+$/i,
                                        message: 'Địa chỉ email không hợp lệ',
                                    }}
                                />
                                {/* Telephone */}
                                <InputComponent
                                    icon={<BsFillTelephoneFill className="text-gray-400 m-2" />}
                                    placeholder="Số điện thoại(*)"
                                    textMessage="Vui lòng nhập số điện thoại của bạn"
                                    register={register}
                                    name="phoneNumber"
                                    errors={errors}
                                    // setValue={setValue}
                                    pattern={{
                                        value: /^[0-9]*$/,
                                        message: 'Vui lòng nhập số',
                                    }}
                                />
                                {/* Username */}
                                <InputComponent
                                    icon={<FaUser className="text-gray-400 m-2" />}
                                    placeholder="Tên đăng nhập(*)"
                                    textMessage="Vui lòng nhập tên đăng nhập của bạn"
                                    register={register}
                                    name="username"
                                    // setValue={setValue}
                                    errors={errors}
                                />
                                {/* Password Field */}
                                <InputComponent
                                    icon={<MdLockOutline className="text-gray-400 m-2" />}
                                    placeholder="Mật khẩu(*)"
                                    textMessage="Vui lòng nhập mật khẩu của bạn"
                                    register={register}
                                    name="password"
                                    errors={errors}
                                    // type='password'
                                />

                                {/* Confirm password Field */}

                                <InputComponent
                                    icon={<MdLockOutline className="text-gray-400 m-2" />}
                                    placeholder="Nhập lại mật khẩu(*)"
                                    textMessage="Vui lòng nhập mật khẩu của bạn"
                                    register={register}
                                    name="ConfirmPassword"
                                    // setValue={setValue}
                                    errors={errors}
                                    passwordsMatch={passwordsMatch}
                                    // type='password'
                                />

                                {/* Địa chỉ Field */}

                                <InputComponent
                                    icon={<ImLocation className="text-gray-400 m-2" />}
                                    placeholder="Địa chỉ(*)"
                                    textMessage="Vui lòng nhập địa chỉ của bạn"
                                    register={register}
                                    name="address"
                                    errors={errors}
                                    // setValue={setValue}
                                />

                                <div>
                                    <button className="w-40 flex-row items-center justify-center border-2 border-[#2B92E4] text-[#2B92E4] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#2B92E4] hover:text-white">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegisterModal;
