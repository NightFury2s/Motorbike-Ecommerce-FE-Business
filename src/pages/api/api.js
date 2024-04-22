import axios from "./axios";

// Handle Login
export const auth_login = async (username, password) => {
  const loginInfo = { username, password };

  try {
    const response = await axios.post("/authenticate", loginInfo);
    const data = response.data;

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.userDTO));
      // Reload page after login success
      window.location.reload();

      return { success: true, data };
    } else {
      return { success: false, messenger: data.messenger };
    }
  } catch (error) {
    return {
      success: false,
      messenger: error.response
        ? error.response.data.messenger
        : error.messenger,
    };
  }
};

// Handle Register
export const setRegisterData = async (data) => {
  try {
    const response = await axios.post("/register", data);
    return response;
  } catch (error) {
    return {
      success: false,
      messenger: error.response
        ? error.response.data.messenger
        : error.messenger,
    };
  }
};

// Forgot Password
export const ForgotPassword = async (email) => {
  // Create form data
  const formData = new URLSearchParams();
  formData.append("email", email);

  try {
    const response = await axios.post("/otp/otp", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    // If success return true
    if (response.status === 200) {
      alert("Vui bạn kiểm tra email của bạn để nhận mã xác nhận.");
      return true;
    }
    return false;
  } catch (error) {
    console.error(
      "Có lỗi xảy ra:",
      error.response ? error.response.data : error.messenger
    );
    throw new Error(
      error.response
        ? error.response.data.messenger
        : "Có lỗi xảy ra, vui lòng thử lại sau."
    );
  }
};

// Confirm OTP
export const ConfirmOTP = async (email, otp) => {
  // Create form data
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("otp", otp);

  try {
    // Send request
    const response = await axios.post("/otp/resetPassword", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    // Handle response
    alert("Mã xác nhận đúng, bạn có thể thiết lập mật khẩu mới.");
  } catch (error) {
    console.error(
      "Có lỗi xảy ra:",
      error.response ? error.response.data : error.messenger
    );
    throw new Error(
      error.response
        ? error.response.data.messenger
        : "Có lỗi xảy ra, vui lòng thử lại sau."
    );
  }
};
// Motorbike Products API
export const MotorbikeData = async () => {
  const pageNumber = 0;
  const pageSize = 4;
  const sortBy = 1;

  try {
    const response = await axios.get(
      `/productcar/getsome/${pageNumber}/${pageSize}/${sortBy}`
    );
    const data = response.data;
    const products = data.productSomeReponseDtos;

    return products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Accessories Products API
export const AccessoriesData = async () => {
  const pageNumber = 0;
  const pageSize = 4;
  const sortBy = 2;

  try {
    const response = await axios.get(
      `/productcar/getsome/${pageNumber}/${pageSize}/${sortBy}`
    );
    const data = response.data;
    const products = data.productSomeReponseDtos;

    return products;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Detail Product API
export const DetailProductData = async (id) => {
  try {
    const response = await axios.get(`/product/getDetail/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product details: " + error.message);
  }
};

// Get Reviews Data by Product ID
export const ReviewsData = async (productId) => {
  try {
    const response = await axios.get(`/reviews/get/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
};
// data page product
export const dataPageProduct = async (link, currentPage, type, sort) => {
  try {
    const response = await axios.get(
      `${link}/${currentPage}/${12}/${type}${sort ? `/${sort}` : ""}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// send token to server
export const sendToken = async (token) => {
  try{
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Loại nội dung của dữ liệu gửi đi
      }
    };
  
    const response = await axios.post('/user/shopping-cart/get-cart-by-user', {}, config)
    
    return response.data
}
catch (error) {
  console.error("Error:", error);
  return [];
}
}

export const sendTokenOderSuss = async (token) => {
  try{
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Loại nội dung của dữ liệu gửi đi
      }
    };
  
    const response = await axios.post('/user/shopping-cart/payment', {}, config)
    
    return response.data
}
catch (error) {
  console.error("Error:", error);
  return [];
}
}