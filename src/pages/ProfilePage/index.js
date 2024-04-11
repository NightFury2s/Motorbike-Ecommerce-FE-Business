import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaPencilAlt } from 'react-icons/fa';
import { InpuProfileField } from '@/components/constants/Input';

export default function ProfilePage() {
    const [fullName, setFullName] = useState('NightFury');
    const [tel, setTel] = useState('0123456789');
    const [email, setEmail] = useState('test@gmail.com');
    const [address, setAddress] = useState('Việt Nam');
    const [isEditable, setIsEditable] = useState({});

    // Edit profile
    const toggleEdit = (field) => {
        setIsEditable((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    // Save profile
    const saveProfile = () => {
        console.log('Đã lưu thông tin');
        setIsEditable({
            firstName: false,
            tel: false,
            email: false,
            address: false,
        });
    };

    // Cancel edit profile
    const cancelEdit = () => {
        console.log('Đã hủy chỉnh sửa');
        setIsEditable({
            firstName: false,
            tel: false,
            email: false,
            address: false,
        });
    };
    // const { username } = useParams();
    // const GET_USER_URL = `/profile/${username}`;
    // const UPDATE_USER_URL = `/account/${username}/update`;
    // const [cookie, setCookie] = useCookies(['cookie']);

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [uname, setUname] = useState('');
    // const [email, setEmail] = useState('');
    // const [image, setImage] = useState(null);
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [edit, setEdit] = useState(false);

    // useEffect(() => {
    //     axios.get(GET_USER_URL).then((user) => {
    //         const data = user.data;
    //         setFirstName(data.firstName);
    //         setLastName(data.lastName);
    //         setUname(data.username);
    //         setEmail(data.email);
    //         setImage(data.image);
    //         if (data.username === cookie.username) {
    //             setEdit(true);
    //         }
    //     });
    // }, []);

    // function handleUpdateUser(e) {
    //     console.log(e);
    //     e.preventDefault();
    //     var formData = new FormData();
    //     formData.append('firstName', firstName);
    //     formData.append('lastName', lastName);
    //     formData.append('username', username);
    //     formData.append('email', email);
    //     if (!image) {
    //         formData.append('image', selectedImage);
    //     }
    //     axios
    //         .put(UPDATE_USER_URL, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         })
    //         .then((result) => window.location.reload);
    // }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto flex flex-col">
                <div className="rounded-lg lg:h-full">
                    <div className="sm:mt-0">
                        {/* BÌA */}
                        <div className="relative rounded-lg lg:h-[25rem] overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="https://dummyimage.com/1200x500"
                            />
                            <input id="coverimage" type="file" className="hidden" />
                        </div>
                        {/* BÌA */}
                        <div className="py-4 md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                {/* AVATAR */}
                                <div className="relative">
                                    <label htmlFor="image">
                                        <div className="top-0 w-32 h-32 inline-flex overflow-hidden absolutes justify-center items-center bg-gray-100 rounded-full dark:bg-gray-600">
                                            <FaUserCircle size={100} />
                                        </div>
                                    </label>
                                    <input
                                        id="image"
                                        type="file"
                                        className="hidden"
                                        name="image"
                                        onChange={(event) => {
                                            setSelectedImage(event.target.files[0]);
                                            setImage(null);
                                        }}
                                    />
                                </div>
                                {/* AVATAR */}
                                <div className="px-4 sm:px-0">
                                    {/* Name */}
                                    <div className="text-Gray-800 font-bold text-[2rem] flex gap-2 items-center">
                                        NightFury
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form>
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                {/* FullName Field */}
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="relative w-full">
                                                        <InpuProfileField
                                                            label="Họ và Tên"
                                                            id="fullName"
                                                            value={fullName}
                                                            isEditable={isEditable.firstName}
                                                            onChange={(e) => setFullName(e.target.value)}
                                                            toggleEdit={() => toggleEdit('firstName')}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Telephone Field */}
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="relative w-full">
                                                        <InpuProfileField
                                                            label="Số điện thoại"
                                                            id="tel"
                                                            value={tel}
                                                            isEditable={isEditable.tel}
                                                            onChange={(e) => setTel(e.target.value)}
                                                            toggleEdit={() => toggleEdit('tel')}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email Field */}
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="relative w-full">
                                                        <InpuProfileField
                                                            label="Email"
                                                            id="email"
                                                            value={email}
                                                            isEditable={isEditable.email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            toggleEdit={() => toggleEdit('email')}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Address Field */}
                                                <div className="col-span-6 sm:col-span-3">
                                                    <div className="relative w-full">
                                                        <InpuProfileField
                                                            label="Address"
                                                            id="address"
                                                            value={address}
                                                            isEditable={isEditable.address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            toggleEdit={() => toggleEdit('address')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Nút Lưu và các phần khác */}
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                {/* Các trường nhập thông tin */}
                                            </div>
                                            {/* Nút Lưu và Thoát */}
                                            <div className="flex justify-end mt-4 space-x-4">
                                                <button
                                                    onClick={cancelEdit}
                                                    className="bg-[#D9D9D9] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                                                >
                                                    Thoát
                                                </button>
                                                <button
                                                    onClick={saveProfile}
                                                    className="bg-[#2B92E4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                                >
                                                    Lưu
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
