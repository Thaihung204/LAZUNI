// import axios from 'axios';

// export const UploadProductServices = async (formData) => {
//     try {
//         // Create a new FormData object to handle image uploads
//         const formData = new FormData();

//         // Append each image file to the form data
//         images.forEach((image, index) => {
//             formData.append(`image_${index}`, image);
//         });

//         // Append other product data (excluding images)
//         Object.keys(productData).forEach((key) => {
//             formData.append(key, productData[key]);
//         });

//         // Send a POST request to your backend API
//         const response = await axios.post('your-api-endpoint/products', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         // Handle success response
//         console.log('Product uploaded successfully:', response.data);
//         return response.data;
//     } catch (error) {
//         // Handle error response
//         console.error('Error uploading product:', error);
//         throw error;
//     }
// };
