import axios from 'axios';

export const ProductDetailServices = async (productId) => {
    try {
       
        // Fetch product data using a GET request
        const response = await axios.get(`https://dummyjson.com/products/${productId}`); // Use backticks here
        console.log(response);
        if (response.data) {
            return response.data;
        } else {
            console.log('Product not found');
            return null;
        }
    } catch (error) {
        console.error('Failed to fetch product details:', error);
        throw error;
    }
};
