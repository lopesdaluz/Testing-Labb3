// import axios from "axios";

// // Define the type for a product
// export interface Product {
//   id: number;
//   name: string;
//   // Add other properties as needed
// }

// // Function to get products by category
// export async function getProductsByCategory(
//   category: string
// ): Promise<Product[]> {
//   try {
//     // Make an API call to fetch products based on the category
//     const response = await axios.get(`/api/products?category=${category}`);
//     return response.data as Product[];
//   } catch (error) {
//     // Handle errors appropriately (logging, error boundaries, etc.)
//     throw error;
//   }
// }
