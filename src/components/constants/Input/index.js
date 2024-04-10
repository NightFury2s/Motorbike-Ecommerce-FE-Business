import PropTypes from "prop-types";
import {  useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

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

  const checkErr=()=>{
      if(errors[name] || severErorEmail  || severErorUser || severErorUser ||passwordsMatch ){
        return 'red'
      }
      else{
        return 'transparent'
      }
  }


  const handleEye = () => {
    SetEye(!eye);
  };

  return (
    <>
      <div style={{ alignItems: "center" , border:`0.5px solid ${checkErr()}` }} className="bg-gray-100 p-2 flex">
        {icon}
        <input
          id="input"
          name={name}
          type={typePassword ? (eye ? "text" : "password") : "text"}
          placeholder={placeholder}
          onInput={()=>{handleReset? handleReset():null}}
          className="w_64 bg_transparent bg-gray-100 outline-none text-sm ml-2 flex-1"
          {...register(name, { required: textMessage, pattern, minLength })}
          {...props}
        />
        {typePassword ? (
          <span onClick={handleEye}>{eye ? <FaEye /> : <IoEyeOff /> } </span>
        ) : (
          ""
        )}
      </div>
      <div
        style={{
          textAlign: "start",
        }}
      >
        {errors[name] && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors[name].message}
          </p>
        )}
        {passwordsMatch && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors[name] ? null : "Mật khẩu không trùng khớp "}
          </p>
        )}
        {severErorEmail && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors[name] ? null : `Email đã tồn tại `}
          </p>
        )}
        {severErorPhone && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors[name] ? null : `Số điện thoại đã tồn tại `}
          </p>
        )}
        {severErorUser && (
          <p style={{ fontSize: "12px", color: "red" }}>
            {errors[name] ? null : `User đã tồn tại `}
          </p>
        )}
      </div>
    </>
  );
}

export default InputComponent;
InputComponent.defaultProps = {
  type: "text ",
  placeholder: "placeholder",
  textMessage: "textMessage",
  pattern: null,
};

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  textMessage: PropTypes.string,
  pattern: PropTypes.object,
};
