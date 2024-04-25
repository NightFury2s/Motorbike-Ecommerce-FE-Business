import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoClockFill } from "react-icons/go";

function Footer() {
    return (
        <div className="bg-blue-800 py-16 px-28 flex">
            <ul className="w-1/3">
                <li className="text-white text-2xl pb-5">Danh mục các hãng</li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Honda</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Ducati</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Kawasaki</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Yamaha</a></li>
            </ul>

            <ul className="w-1/3">
                <li className="text-white text-2xl pb-5">Danh mục các trang</li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/">Trang Chủ</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Xe Máy</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Phụ Tùng</a></li>
                <li className="text-white text-base leading-8 pb-4 flex"><a href="/#">Dịch vụ</a></li>
            </ul>

            <ul className="w-1/3">
                <li className="text-white text-2xl pb-5">Liên hệ</li>
                <li className="text-white text-base leading-8 pb-4 flex items-center"><FaHome className="text-3xl" />Đại Lộ Khoa Học, TP. Quy Nhơn</li>
                <li className="text-white text-base leading-8 pb-4 flex items-center"><IoMdMail className="text-3xl" />motobikes@gmail.com</li>
                <li className="text-white text-base leading-8 pb-4 flex items-center"><FaPhoneAlt className="text-3xl" />0123456789</li>
                <li className="text-white text-base leading-8 pb-4 flex items-center"><GoClockFill className="text-3xl" /><span className="pl-2">08:00 AM - 17:30 PM</span></li>
            </ul>
        </div>
    );
}

export default Footer;
