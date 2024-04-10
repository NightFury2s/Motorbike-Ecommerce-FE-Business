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
    try {
        const response = await axios.post('/register', data);
        return response;
    } catch (error) {
       return {
        success: false,
        messenger: error.response ? error.response.data.messenger : error.messenger,
        }
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

        // Check Are There Any Products
        // products.forEach((product) => {
        //     console.log(product.name);
        //     console.log(product.newPrice);
        //     console.log(product.originalPrice);
        //     console.log(product.images[0].imgData);
        // });
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

        // Check Are There Any Products
        // products.forEach((product) => {
        //     console.log(product.name);
        //     console.log(product.newPrice);
        //     console.log(product.originalPrice);
        //     console.log(product.images[0].imgData);
        // });
        return products;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
export const dataPageProduct = async (link,currentPage,type) => {
    try {
        const response = await axios.get(`${link}/${currentPage}/${12}/${type}`);
        const data = response.data;
        // const products = data.productSomeReponseDtos;
        // return products;
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

