import PropTypes from 'prop-types';
import { IoEyeOff } from 'react-icons/io5';
import { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
function InputComponent({
    type,
    placeholder,
    icon,
    textMessage,
    register,
    name,
    errors,
    pattern,
    passwordsMatch,
    minLength,
    typePassword,
    severErorEmail,
    severErorPhone,
    severErorUser,
    handleReset,
    ...props
}) {
    const [eye, SetEye] = useState(false);

    const checkErr = () => {
        if (errors[name] || severErorEmail || severErorUser || severErorUser || passwordsMatch) {
            return 'red';
        } else {
            return 'transparent';
        }
    };

    const handleEye = () => {
        SetEye(!eye);
    };

    return (
        <>
            <div style={{ alignItems: 'center', border: `0.5px solid ${checkErr()}` }} className="bg-gray-100 p-2 flex">
                {icon}
                <input
                    id="input"
                    name={name}
                    type={typePassword ? (eye ? 'text' : 'password') : 'text'}
                    placeholder={placeholder}
                    onInput={() => {
                        handleReset ? handleReset() : null;
                    }}
                    className="w_64 bg_transparent bg-gray-100 outline-none text-sm ml-2 flex-1"
                    {...register(name, { required: textMessage, pattern, minLength })}
                    {...props}
                />
                {typePassword ? <span onClick={handleEye}>{eye ? <FaEye /> : <IoEyeOff />} </span> : ''}
            </div>
            <div
                style={{
                    textAlign: 'start',
                }}
            >
                {errors[name] && <p style={{ fontSize: '12px', color: 'red' }}>{errors[name].message}</p>}
                {passwordsMatch && (
                    <p style={{ fontSize: '12px', color: 'red' }}>
                        {errors[name] ? null : 'Mật khẩu không trùng khớp '}
                    </p>
                )}
                {severErorEmail && (
                    <p style={{ fontSize: '12px', color: 'red' }}>{errors[name] ? null : `Email đã tồn tại `}</p>
                )}
                {severErorPhone && (
                    <p style={{ fontSize: '12px', color: 'red' }}>
                        {errors[name] ? null : `Số điện thoại đã tồn tại `}
                    </p>
                )}
                {severErorUser && (
                    <p style={{ fontSize: '12px', color: 'red' }}>{errors[name] ? null : `User đã tồn tại `}</p>
                )}
            </div>
        </>
    );
}

export default InputComponent;
InputComponent.defaultProps = {
    type: 'text ',
    placeholder: 'placeholder',
    textMessage: 'textMessage',
    pattern: null,
};

InputComponent.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    textMessage: PropTypes.string,
    pattern: PropTypes.object,
};

export const InputLoginField = ({ Icon, type = 'text', placeholder, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`bg-gray-100 w-[80%] p-2 flex items-center mb-3 ${error ? 'border-red-500 border' : ''}`}>
            <Icon className="text-gray-400 m-2" onClick={handleClick} />
            <input
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                className="bg-gray-100 outline-none text-sm flex-1"
                value={value}
                onChange={onChange}
                ref={inputRef}
            />
            {type === 'password' && (
                <div onClick={togglePasswordVisibility} className="cursor-pointer p-2">
                    {showPassword ? <FaEye className="text-gray-400" /> : <FaEyeSlash className="text-gray-400" />}
                </div>
            )}
        </div>
    );
};
