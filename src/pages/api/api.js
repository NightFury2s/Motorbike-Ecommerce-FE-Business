import axios from './axios';

// Handle Login
export const auth_login = async (username, password) => {
    const loginInfo = { username, password };

    try {
        const response = await axios.post('/authenticate', loginInfo);
        const data = response.data;

        if (response.status === 200) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userInfo', JSON.stringify(data.userDTO));

            // console.log(userInfo.id);
            // console.log(userInfo.fullName);
            // console.log(userInfo.username);
            // console.log(userInfo.email);
            // console.log(userInfo.phoneNumber);
            // console.log(userInfo.address);
            // console.log(userInfo.role);

            return { success: true, data };
        } else {
            return { success: false, messenger: data.messenger };
        }
    } catch (error) {
        return {
            success: false,
            messenger: error.response ? error.response.data.messenger : error.messenger,
        };
    }
};

// Handle Register
export const setRegisterData = async (data) => {
    console.log(data);
    try {
        const response = await axios.post('/register', data);
        return response.data;
    } catch (error) {
        console.log(error.response, 'error');
    }
};

// Forgot Password
export const ForgotPassword = async (email) => {
    // Create form data
    const formData = new URLSearchParams();
    formData.append('email', email);

    try {
        const response = await axios.post('/otp/otp', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        // If success return true
        if (response.status === 200) {
            alert('Vui bạn kiểm tra email của bạn để nhận mã xác nhận.');
            return true;
        }
        return false;
    } catch (error) {
        console.error('Có lỗi xảy ra:', error.response ? error.response.data : error.messenger);
        throw new Error(error.response ? error.response.data.messenger : 'Có lỗi xảy ra, vui lòng thử lại sau.');
    }
};

// Confirm OTP
export const ConfirmOTP = async (email, otp) => {
    // Create form data
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('otp', otp);

    try {
        // Send request
        const response = await axios.post('/otp/resetPassword', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        // Handle response
        alert('Mã xác nhận đúng, bạn có thể thiết lập mật khẩu mới.');
    } catch (error) {
        console.error('Có lỗi xảy ra:', error.response ? error.response.data : error.messenger);
        throw new Error(error.response ? error.response.data.messenger : 'Có lỗi xảy ra, vui lòng thử lại sau.');
    }
};
// Motorbike Products API
export const MotorbikeData = async () => {
    const pageNumber = 0;
    const pageSize = 4;
    const sortBy = 1;

    try {
        const response = await axios.get(`/productcar/getsome/${pageNumber}/${pageSize}/${sortBy}`);
        const data = response.data;
        const products = data.productSomeReponseDtos;

        return products;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

// Accessories Products API
export const AccessoriesData = async () => {
    const pageNumber = 0;
    const pageSize = 4;
    const sortBy = 2;

    try {
        const response = await axios.get(`/productcar/getsome/${pageNumber}/${pageSize}/${sortBy}`);
        const data = response.data;
        const products = data.productSomeReponseDtos;

        return products;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export const DetailProductData = async (id) => {
    try {
        const response = await axios.get(`http://192.168.199.241:8080/product/getDetail/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch product details: ' + error.message);
    }
};
